<script setup>
import { ref, onMounted } from 'vue';
import { createApp } from 'vue';
import PokemonCard from './components/PokemonCard.vue';

const targetDiv = document.getElementById('pokemonList');

onMounted(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(response => response.json())
    .then(pokeAPI => {
        pokeAPI.results.forEach(element => {
            fetch(element.url)
                .then(response => response.json())
                .then(response => {
                    console.log(response.name);

                    const app = createApp(PokemonCard);
                    app.mount(targetDiv);
                });
        });

    })
    .catch(error => {
        console.error(error);
    });

});

</script>

<template>
    <main>
        <section class="section">
            <h1>Pokédex</h1>
            <div class="pokemonList">
                <PokemonCard></PokemonCard>
                <PokemonCard></PokemonCard>
                <PokemonCard></PokemonCard>
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
    }
</style>
