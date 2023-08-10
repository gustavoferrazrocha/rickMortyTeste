<script setup lang="ts">
import { onMounted, ref } from 'vue'

import axios from 'axios';
import CardComponent from "../components/CardComponent.vue";
import type { InfoPaginationProps } from "../interfaces/infoPaginationProps"
import type { CharacterProps } from "../interfaces/characterProps"

const characters = ref<Array<CharacterProps>>([]);
const currentPage = ref<number>(1);
const infoPagination = ref<InfoPaginationProps>()

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

async function getAllCharacters (): Promise<void> {
  await fetchData('https://rickandmortyapi.com/api/character');
}

async function getDataInCurrentPage(): Promise<void> {
  const url = searchText.value
    ? `https://rickandmortyapi.com/api/character/?page=${currentPage.value}&name=${searchText.value}`
    : `https://rickandmortyapi.com/api/character/?page=${currentPage.value}`;

  await fetchData(url);
}

async function searchCharacters(): Promise<void> {
  resetPageWhenSearching();
  await getDataInCurrentPage();
}

function resetPageWhenSearching(): number {
  return currentPage.value = 1;
}

onMounted(() => {
  getAllCharacters();
})


</script>


<template>
  <section className='min-h-screen flex flex-col items-center gap-4'>
    <input className='m-4 p-4 border-2 border-solid border-zinc-800' v-model="searchText" @input="searchCharacters" placeholder="Search characters">
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
    className='pb-10'
    prev-icon="mdi-menu-left"
    next-icon="mdi-menu-right"
    v-model="currentPage"
    @update:model-value="getDataInCurrentPage"
    :length="infoPagination.pages"
    :total-visible="5">
  </v-pagination>
  </section>
</template>



