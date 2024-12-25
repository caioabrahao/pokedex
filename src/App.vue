<script setup>
import { computed, ref } from 'vue';
import PokemonCard from './components/PokemonCard.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const pokemonList = ref([]);
let pageIndex = 0;
let itemsPerPage = 30;
let maxPokemonNumber;

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        maxPokemonNumber = data.count;
        console.log(maxPokemonNumber);
    })
    .catch(error => console.error('Error:', error));

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function loadPokemonList(pageIndex){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ itemsPerPage }&offset=${ pageIndex }`)
        .then(response => response.json())
        .then(async (data) => {
            // Map each Pokémon to a fetch request
            const fetchPromises = data.results.map(pokemonData => {
            return fetch(pokemonData.url)
                .then(response => response.json())
                .then(pokemonDetail => ({
                name: pokemonDetail.name,
                id: pokemonDetail.id,
                sprite: pokemonDetail.sprites.other['official-artwork'].front_default,
                type: pokemonDetail.types.map(type => type.type.name).join(', '),
                typeId: pokemonDetail.types.map(type => type.type.url.split('/').slice(-2, -1)[0])
                }))
            });

    // Wait for all fetches to complete and then sort the results by ID
    const pokemonDetails = await Promise.all(fetchPromises);
    pokemonList.value = pokemonDetails.sort((a, b) => a.id - b.id);
  })
  .catch(error => console.error('Error:', error));
}
loadPokemonList();

const searchQuery = ref("");

const filteredPokemonList = computed(() => {
  if (!searchQuery.value.trim()) {
    return pokemonList.value;
  }
  return pokemonList.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});


</script>


<template>
    <Header />
    <main>
        <section class="section">
            <div class="searchContainer">
                <input class="searchBox" v-model="searchQuery" type="text" placeholder="Search for a Pokémon">
                <button class="button-2"><span class="material-symbols-outlined">search</span></button>
            </div>
            <p>{{ searchQuery }}</p>

            <p>{{ pageIndex / itemsPerPage }}</p>
            <div class="pokemonList">
                <div  v-for="pokemon in filteredPokemonList" :key="pokemon.id">
                    <PokemonCard :id="pokemon.id" 
                    :name="pokemon.name" 
                    :image="pokemon.sprite" 
                    :type="pokemon.type"
                    :typeIds="pokemon.typeId"/>
                </div>
            </div>
            <div class="paginationControl">
                <button class="button-2" @click="loadPokemonList(pageIndex = 0); scrollToTop()"><i class="ri-arrow-left-double-line"></i></button>
                <button class="button-2" @click="pageIndex > 0 && loadPokemonList(pageIndex -= itemsPerPage); scrollToTop()"><i class="ri-arrow-left-line"></i></button>
                <div class="pageIndex">
                    <p>Page {{ pageIndex/itemsPerPage + 1 }} of {{ Math.ceil(maxPokemonNumber/itemsPerPage) }}</p>
                </div>
                <button class="button-2" @click="pageIndex < maxPokemonNumber-itemsPerPage && loadPokemonList(pageIndex += itemsPerPage); scrollToTop()"><i class="ri-arrow-right-line"></i></button>
                <button class="button-2" @click="loadPokemonList(pageIndex = maxPokemonNumber-itemsPerPage); scrollToTop()"><i class="ri-arrow-right-double-fill"></i></button>
            </div>
        </section>
    </main>
    <Footer></Footer>
</template>

<style scoped>

    .section{
        padding: 32px;
        text-align: center;

        min-height: 90vh;

        background: linear-gradient(to bottom, #F4EDD3, #A5BFCC, #7E99A3, #4C585B);
    }

    .pokemonList{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        padding: 32px;
        align-items: center;
    }

    .paginationControl{
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: 32px;
    }

    .searchContainer{
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: 32px;
    }
    .searchBox{
        padding: 8px 16px; 
        border-radius: 90px;
        border: none;
        width: 30%;
        font-size: 1rem;
    }
    
</style>
