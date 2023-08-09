<script setup lang="ts">
import { onMounted, ref } from 'vue'

import axios from 'axios';
import CardComponent from "../components/CardComponent.vue";

let characters = ref<Array<Character>>([]);

let currentPage = ref<number>(1);

let infoPagination = ref<InfoPagination>()

const searchText = ref('');

interface InfoPagination {
  count: number,
  pages: number,
  next: string,
  prev: string,
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  origin: { name: string };
  image: string;
}

async function getAllCharacters () {

  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    infoPagination.value = response.data.info;
    characters.value = response.data.results;  
  } catch (e) {
    console.error(e);
  }
}

async function getDataInCurrentPage () {
  try {
    if(searchText.value.length > 0) {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage.value}&name=${searchText.value}`)
      characters.value = response.data.results;
      infoPagination.value = response.data.info;
    } else {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage.value}`);
      characters.value = response.data.results;
      infoPagination.value = response.data.info;
    }
  } catch (e) {
    console.error(e);
  }
}

async function searchCharacters () {
  const firstPage: number = 1;

  currentPage.value = firstPage;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchText.value}`);
    characters.value = response.data.results;
    infoPagination.value = response.data.info;
    
  } catch (e) {
    console.error(e);
  }
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



