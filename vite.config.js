// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Ustawia ścieżkę bazową dla projektu na GitHub Pages
  base: '/ravenshoot/',
  build: {
    // Konfiguracja dla budowy, dostosuj według potrzeb
    outDir: 'dist',  // domyślnie Vite zapisuje pliki do katalogu 'dist'
    // Dalsze opcje konfiguracyjne budowy
  }
  // Możesz dodać więcej opcji konfiguracji zależnie od potrzeb projektu
});
