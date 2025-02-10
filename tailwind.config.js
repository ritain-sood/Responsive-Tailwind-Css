/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss()],
}


// // vite.config.js
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [tailwindcss()],
//   // Other Vite configurations...
// });

