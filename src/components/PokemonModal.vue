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

function handleKeydown(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}
window.addEventListener('keydown', handleKeydown);
</script>

<template>

<div class="modal" @click="closeModal()">
    <div class="modalContent" @click.stop>

        <div class="imageContainer">
            <img class="image" :src="pokemon.spriteGif" :alt="pokemon.name">
        </div>
        
        <div class="info">
            <div class="nameAndId">
                <h2 class="name">{{ pokemon.name }}</h2>
                <p class="id"><i class="ri-hashtag"></i>{{ pokemon.id }}</p>
            </div>
            
            <p><i class="ri-expand-height-fill"></i> Height: {{ pokemon.height }}m</p>
            <p><i class="ri-weight-fill"></i> Weight: {{ pokemon.weight }}kg</p>
            <p><i class="ri-sword-fill"></i> Abilities: {{ pokemon.abilities }}</p>
            <p><i class="ri-shield-fill"></i> Base Experience: {{ pokemon.baseExperience }}</p>
            
            <div class="typesContainer">
                <p>Types:</p>
                <div class="types">
                    <img v-for="typeId in pokemon.typeId" :key="typeId" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${typeId}.png`" :alt="`type ${typeId}`">
                </div>
            </div>
        </div>

        <button class="closeBtn" @click="closeModal()"><i class="ri-close-circle-line"></i></button>
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    gap: 32px;

    display: flex;
    width: 50%;
    height: 50%;
}

.nameAndId{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 8px;
}
.imageContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.image{
    width: auto;
    height: 70%;
}

.id{
    background-color: rgba(128, 128, 128, 0.2);
    padding: 4px 8px;
    border-radius: 16px;
}

.info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    text-transform: capitalize;
}
.name{
    font-size: 2rem;
    font-weight: bold;
    text-transform: capitalize;
}

.types{
    display: flex;
    gap: 8px;

    width: 100%;
}
.types img{
    width: 50%;
    height: auto;
}
.typesContainer{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.typesContainer p{
    font-weight: bold;
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

@media (max-width: 1082px) {
    .modalContent{
        flex-direction: column;
        gap: 16px;
        width: 80%;
        height: 60%;
    }

    .imageContainer{
        width: 100%;
        height: 50%;
    }

    .info{
        width: 100%;
    }

    .typesContainer{
        width: 100%;
    }
    .types{
        width: 100%;
    }
    .types img{
        width: 100%;
    }

    .closeBtn{
        position: static;
        align-self: center;
    }
}
</style>