<script setup>
import { ref } from 'vue';
import gsap from 'gsap';

const darkMode = ref(false);

function animation(){
    gsap.to('.darkModeToggle', {
        duration: 0.7,
        rotate: 360,
        ease: 'elastic'
    });
}

function toggleDarkMode(){
    darkMode.value = !darkMode.value;
    updateTheme();

    console.log(darkMode)
    animation();
}

function updateTheme() {
  const root = document.documentElement;

  if (darkMode.value) {
    root.classList.add('darkMode');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('darkMode');
    localStorage.setItem('theme', 'light');
  }
}
</script>


<template>
<div class="darkModeToggle" @click="toggleDarkMode">
    <i v-if="darkMode === true" class="ri-moon-fill"></i>
    <i v-else class="ri-sun-fill"></i>
</div>
</template>



<style scopes>
    .darkModeToggle{
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>