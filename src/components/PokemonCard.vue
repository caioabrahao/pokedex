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
        <p class="type">{{ type }}</p>
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
