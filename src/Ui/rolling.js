// Import GSAP (make sure to include gsap.min.js in your project)
import { gsap } from "gsap";

// Get a reference to the container and the content to animate
const container = document.getElementById("spiral-container");
const content = document.querySelector(".content-to-animate");

// Create a GSAP timeline for the spiral animation
const tl = gsap.timeline();

// Define the number of spirals and the duration of the animation
const numSpirals = 3;
const duration = 4;

// Define the starting and ending positions
const startX = 0;
const startY = 0;
const endX = 500; // Adjust as needed
const endY = 0;   // Adjust as needed

// Calculate the angle increment for each step
const angleIncrement = 360 * numSpirals;

// Create the spiral animation
for (let i = 0; i < numSpirals; i++) {
    tl.to(content, {
        duration: duration / numSpirals,
        x: "+=" + endX,
        y: "+=" + endY,
        rotation: angleIncrement,
        ease: "power1.inOut"
    });
    // Update the end position for the next step
    endX *= -1;
    endY *= -1;
}

// Repeat the animation indefinitely
tl.repeat(-1);

// Adjust the animation speed if needed
// tl.timeScale(2); // Speed up the animation

// Adjust additional styles for the content element as needed
// gsap.set(content, { /* additional styles */ });
