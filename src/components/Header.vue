<script setup>
import DarkModeToggle from './DarkModeToggle.vue';
</script>

<template>
<header class="header">
    <div class="logo">
        Pokedex
        <span class="subtitle">PINK SEVEN</span>
    </div>
    <div class="preferences">
        
    <DarkModeToggle />
    </div>
    

    
</header>

</template>

<style scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 10vh;
        background: none;

        padding: 0 var(--globalHorizontalPagePadding);

        position: absolute;
        width: 100%;
    }

    .logo{
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 90%;
    }
    .logo .subtitle{
        font-size: 0.7rem;
        font-weight: 600;
    }

    .preferences{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .preferences i{
        font-size: 1.5rem;
    }

    .langSelect{
        padding: 8px 16px; 
        border-radius: 90px;
        border: none;
        
    }
</style>