<script setup>
import { ref, defineEmits } from 'vue';

defineProps({
        pokemon: {
            type: Object,
            default: () => ({})
        }
    });

const emit = defineEmits(['close']);

function closeModal(){
    emit('close');
}
</script>

<template>

<div class="modal" @click="closeModal()">
    <div class="modalContent" @click.stop>
        <button class="closeBtn" @click="closeModal()"><i class="ri-close-circle-line"></i></button>
        <img :src="pokemon.sprite" :alt="pokemon.name">
        
        <div class="info">
            <h2>{{ pokemon.name }}</h2>
            <p>{{ pokemon.id }}</p>

            <div class="types">
                <img v-for="typeId in pokemon.typeId" :key="typeId" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${typeId}.png`" :alt="`type ${typeId}`">
            </div>
        </div>
        
        
    </div>
</div>

</template>

<style>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.modalContent{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    display: flex;
    width: 50%;
    height: 50%;
}
.types{
    display: flex;
    gap: 8px;
}

.closeBtn{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    
    background: none;
    border: none;

    cursor: pointer;

}
</style>