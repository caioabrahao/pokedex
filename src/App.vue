<script setup>
import { ref } from 'vue';
import PokemonCard from './components/PokemonCard.vue';

const pokemonList = ref([]);

fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
  .then(response => response.json())
  .then(async (data) => {
    // Map each Pokémon to a fetch request
    const fetchPromises = data.results.map(pokemonData => {
      return fetch(pokemonData.url)
        .then(response => response.json())
        .then(pokemonDetail => ({
          name: pokemonDetail.name,
          id: pokemonDetail.id,
          sprite: pokemonDetail.sprites.front_default,
          type: pokemonDetail.types.map(type => type.type.name).join(', '),
          typeId: pokemonDetail.types.map(type => type.type.url.split('/').slice(-2, -1)[0])
        }))
    });

    // Wait for all fetches to complete and then sort the results by ID
    const pokemonDetails = await Promise.all(fetchPromises);
    pokemonList.value = pokemonDetails.sort((a, b) => a.id - b.id);
  })
  .catch(error => console.error('Error:', error));
</script>


<template>
    <main>
        <section class="section">
            <h1>Pokédex</h1>
            <div class="pokemonList">
                <div  v-for="pokemon in pokemonList" :key="pokemon.id">
                    <PokemonCard :id="pokemon.id" 
                    :name="pokemon.name" 
                    :image="pokemon.sprite" 
                    :type="pokemon.type"
                    :typeIds="pokemon.typeId"/>
                </div>
                
                
            </div>
        </section>
    </main>
</template>

<style scoped>
    .section{
        padding: 32px;
        text-align: center;
    }

    .pokemonList{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        padding: 32px;
        align-items: center;
    }
</style>
