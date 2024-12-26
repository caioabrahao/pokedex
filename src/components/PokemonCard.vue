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
        
        <div class="typeIconsContainer">
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
        text-align: center;

        overflow: hidden;

        border-radius: 10px;
        background-color: rgb(220, 220, 220);
        padding: 2rem;

        border: 1px solid rgba(0, 0, 0, 0.2);

        cursor: pointer;

        transition: all 0.3s;
    }
    .pokemonCard:hover{
        background-color: #f0f0f0;
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .pokemonCard img{
        width: 160px;
        height: auto;
    }

    .typeIconsContainer{
        display: flex;
        flex-direction: column;
        gap: 8px;

        align-items: center;
        justify-content: center;
        height: 72px;
    }
    .typeIconsContainer img{
        width: auto;
        height: 32px;
    }

    .name{
        text-transform: capitalize;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;

    }
    .type{
        text-transform: capitalize;
    }
</style>
