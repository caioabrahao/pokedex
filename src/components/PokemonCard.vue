<script setup>

</script>

<template>
    <div class="pokemonCard">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur">
        <h2>Bulbasaur</h2>
        <p>Grass</p>
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
