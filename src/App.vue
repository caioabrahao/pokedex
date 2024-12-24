<script setup>
import PokemonCard from './components/PokemonCard.vue';

const pokemonList = [
    {
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        type: 'Grass/Poison'
    },
    {
        name: 'Ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
        type: 'Grass/Poison'
    },
    {
        name: 'Venusaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        type: 'Grass/Poison'
    },
    {
        name: 'Charmander',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
        type: 'Fire'
    },
    {
        name: 'Charmeleon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
        type: 'Fire'
    },
    {
        name: 'Charizard',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        type: 'Fire/Flying'
    },
    {
        name: 'Squirtle',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
        type: 'Water'
    },
    {
        name: 'Wartortle',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
        type: 'Water'
    },
    {
        name: 'Blastoise',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        type: 'Water'
    },
    {
        name: 'Caterpie',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
        type: 'Bug'
    },
    {
        name: 'Metapod',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
        type: 'Bug'
    },
    {
        name: 'Butterfree',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
        type: 'Bug/Flying'
    },
    {
        name: 'Weedle',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png',
        type: 'Bug/Poison'
    }];

</script>

<template>
    <main>
        <section class="section">
            <h1>Pokédex</h1>
            <div class="pokemonList">
                <div  v-for="pokemon in pokemonList">
                    <PokemonCard :name="pokemon.name" :image="pokemon.image" :type="pokemon.type"/>
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
    }
</style>
