<script setup lang="ts">
import { onMounted, ref } from 'vue';

import axios from 'axios';
import CardComponent from '../components/CardComponent.vue';
import type { InfoPaginationProps } from '../interfaces/infoPaginationProps';
import type { CharacterProps } from '../interfaces/characterProps';

const characters = ref<Array<CharacterProps>>([]);
const currentPage = ref<number>(1);
const infoPagination = ref<InfoPaginationProps>();
const selectStatus = ref<string[]>(['Alive', 'Dead', 'Unknown']);
const currentStatus = ref<string | null>('');
const searchText = ref('');

async function fetchData(url: string): Promise<void> {
  try {
    const response = await axios.get(url);
    characters.value = response.data.results;
    infoPagination.value = response.data.info;
  } catch (e) {
    console.error(e);
  }
}

async function getAllCharacters(): Promise<void> {
  await fetchData('https://rickandmortyapi.com/api/character');
}

function buildApiUrl() {
  const params = new URLSearchParams();
  params.append('page', currentPage.value.toString());

  if (searchText.value) params.append('name', searchText.value);
  if (currentStatus.value) params.append('status', currentStatus.value);

  return `https://rickandmortyapi.com/api/character/?${params.toString()}`;
}

async function getDataInCurrentPage(): Promise<void> {
  const url = buildApiUrl();
  await fetchData(url);
}

async function searchCharacters(): Promise<void> {
  resetPageWhenSearching();
  await getDataInCurrentPage();
}

function resetPageWhenSearching(): number {
  return (currentPage.value = 1);
}

function getValueStatus(status: string | null): string {
  currentStatus.value = status;
  return String(status);
}

onMounted(() => {
  getAllCharacters();
});
</script>

<template>
  <section className="min-h-screen flex flex-col items-center gap-4">
    <div className="flex flex-col gap-5 pt-5 max-xl:items-center">
      <header className="flex gap-5 max-xl:flex-col max-xl:w-full">
        <v-card-text className="w-9/12 max-xl:w-full">
          <v-text-field
            className="h-9"
            density="compact"
            v-model="searchText"
            @input="searchCharacters"
            variant="solo"
            label="Search characters"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
        </v-card-text>
        <div className="w-2/12 max-xl:w-full">
          <v-select
            @update:modelValue="getValueStatus"
            clearable
            label="Select status"
            :items="selectStatus"
            variant="solo"
          ></v-select>
        </div>
      </header>

      <main v-if="characters" className="grid 2xl:grid-cols-3 gap-5 xl:grid-cols-2 3xl:grid-cols-4">
        <CardComponent
          v-for="character in characters"
          :key="character.id"
          :name="character.name"
          :status="character.status"
          :species="character.species"
          :location="character.location.name"
          :origin="character.origin.name"
          :image="character.image"
        />
      </main>
      <v-pagination
        v-if="infoPagination"
        className="pb-10"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        v-model="currentPage"
        @update:model-value="getDataInCurrentPage"
        :length="infoPagination.pages"
        :total-visible="3"
      >
      </v-pagination>
    </div>
  </section>
</template>
