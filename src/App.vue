<script setup>
import PokemonCard from './components/PokemonCard.vue';

</script>

<template>
    <main>
        <section class="section">
            <h1>Pokédex</h1>
            <div class="pokemonList">
                <PokemonCard></PokemonCard>
                <PokemonCard></PokemonCard>
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
