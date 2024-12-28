<script setup>
import { ref, onMounted } from 'vue';

const darkMode = ref(false);

function toggleDarkMode(){
    darkMode.value = !darkMode.value;
    updateTheme();

    console.log(darkMode)
}

function updateTheme() {
  const root = document.documentElement;

  if (darkMode.value) {
    root.classList.add('darkMode');
  } else {
    root.classList.remove('darkMode');
  }
}

updateTheme(); 
</script>


<template>
<div class="darkModeToggle" @click="toggleDarkMode">
    <i id="icon" :class="[darkMode ? 'ri-moon-fill' : 'ri-sun-fill']"></i>
</div>
</template>



<style scopes>
    .darkModeToggle{
        font-size: 1.5rem;
        cursor: pointer;

        padding: 1px 4px;
        border-radius: 5px;

        transition: all 0.3s;
    }
    .darkModeToggle:hover{
        transform: scale(1.1);

        background-color: rgba(240, 248, 255, 0.1);
        
    }
</style>