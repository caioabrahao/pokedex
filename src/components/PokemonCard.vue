<script setup>
    defineProps({
        name: {
            type: String,
            default: 'Bulbasaur'
        },
        image: {
            type: String,
            default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        },
        type: {
            type: String,
            default: 'Grass/Poison'
        }
    });
</script>

<template>
    <div class="pokemonCard">
        <img :src="image" :alt="name">
        <h2>{{ name }}</h2>
        <p>{{ type }}</p>
    </div>
</template>

<style scoped>
    .pokemonCard{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border: 1px solid #000000;
        border-radius: 5px;
        padding: 1rem;
        text-align: center;
        width: 200px;

        transition: all 0.3s;
    }
    .pokemonCard:hover{
        background-color: #f0f0f0;
    }

    .pokemonCard img{
        width: 100px;
        height: 100px;
    }
</style>
