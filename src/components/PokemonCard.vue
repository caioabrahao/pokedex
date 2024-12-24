<script setup>
    defineProps({
        name: {
            type: String,
            default: 'NAME'
        },
        image: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'Type'
        },
        typeIds: {
            type: Array,
            default: []
        },
        id: {
            type: Number,
            default: 0
        }
    });
</script>

<template>
    <div class="pokemonCard">
        <p>#{{ id }}</p>
        <img :src="image" :alt="name">
        <h2 class="name">{{ name }}</h2>
        
        <div class="typeIcons">
            <img v-for="typeId in typeIds" :key="typeId" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${typeId}.png`" :alt="`type ${typeId}`">
        </div>
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
        width: 100%;
        height: auto;
    }

    .name{
        text-transform: capitalize;
    }
    .type{
        text-transform: capitalize;
    }
</style>
