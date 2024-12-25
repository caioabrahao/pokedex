import { gsap } from "gsap";


export function animateEntrance() {
    gsap.from(".pokemonCard", {
        delay: 2,
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out"
    });
}