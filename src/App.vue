<script setup>
import { computed, ref } from 'vue';
import PokemonCard from './components/PokemonCard.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import PokemonModal from './components/PokemonModal.vue';

const pokemonList = ref([]);
let pageIndex = 0;
let itemsPerPage = 20;
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
                spriteGif: pokemonDetail.sprites.other['showdown'].front_default,
                spriteSvg: pokemonDetail.sprites.other['dream_world'].front_default,

                abilities: pokemonDetail.abilities.map(ability => ability.ability.name).join(', '),
                height: pokemonDetail.height,
                weight: pokemonDetail.weight,
                baseExperience: pokemonDetail.base_experience,
                
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

const modalOpen = ref(false);

const selectedPokemon = ref({});

function openModal(pokemon){
    selectedPokemon.value = pokemon;
    modalOpen.value = true;
}

function closeModal(){
    modalOpen.value = false;
}

</script>


<template>
    <PokemonModal :pokemon="selectedPokemon" @close="closeModal" v-if="modalOpen"/>
    <Header />
    <main>
        <section class="section">
            <h1>Search for a Pokémon!</h1>

            <div class="searchContainer">
                <input class="searchBox" v-model="searchQuery" type="text" placeholder="Make a PokéSearch!">
                <button class="button-2"><span class="material-symbols-outlined">search</span></button>
            </div>

        
            <div class="paginationTop">
                <p>Page {{ pageIndex/itemsPerPage + 1 }} of {{ Math.ceil(maxPokemonNumber/itemsPerPage) }}</p>
                <div class="buttons">
                    <button class="button-2" @click="pageIndex > 0 && loadPokemonList(pageIndex -= itemsPerPage); scrollToTop()"><i class="ri-arrow-left-line"></i></button>
                    <button class="button-2" @click="pageIndex < maxPokemonNumber-itemsPerPage && loadPokemonList(pageIndex += itemsPerPage); scrollToTop()"><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
            <div class="pokemonList">
                <PokemonCard   v-for="pokemon in filteredPokemonList" :key="pokemon.id" 
                    @Click="openModal(pokemon)"
                    :id="pokemon.id" 
                    :name="pokemon.name" 
                    :image="pokemon.sprite" 
                    :type="pokemon.type"
                    :typeIds="pokemon.typeId"/>
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
        padding: 10vh var(--globalHorizontalPagePadding) 0 var(--globalHorizontalPagePadding);
        text-align: center;

        min-height: 90vh;
    }

    .paginationTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 32px;
    }
    .paginationTop .buttons{
        display: flex;
        gap: .5rem;
    }

    .pokemonList{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        padding: 32px;
        align-items: center;
        justify-content: center;    

        width: 100%;
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
        background-color: rgb(225, 225, 225);
    }


    @media (max-width: 1082px){
        .pokemonList{
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
        .searchContainer{
            flex-direction: row;
            gap: .5rem;
            padding: 32px 0;

            position: sticky;
            top: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 1);
        }
        .searchBox{
            width: 100%;
        }
    }
    
</style>
