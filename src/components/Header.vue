<script setup>

</script>

<template>
<header class="header">
    <div class="logo">
        Pokedex
    </div>
    <div class="preferences">
        <div class="langSelectContainer">
        <select class="langSelect">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="pt-br">Português</option>
        </select>
    </div>
    <i class="ri-sun-fill"></i>
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
    }

    .logo{
        font-size: 1.5rem;
        font-weight: bold;
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