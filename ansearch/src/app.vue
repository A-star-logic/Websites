<script setup lang="ts">
import linkedinIcon from '~icons/logos/linkedin-icon';
</script>

<template>
  <div class="center">
    <div class="background"></div>
    <div class="hero">
      <div class="hero-content">
        <img src="./assets/Logo (Base).png" alt="Ansearch Logo" class="logo" />
        <div class="title-container">
          <h1>Ansearch</h1>
          <h2>Document intelligence</h2>
        </div>
      </div>
      <p class="coming-soon">Coming soon</p>
      <a
        class="linkedin-link"
        href="https://www.linkedin.com/company/ansearch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <linkedinIcon class="w-6 h-6 bg-white rounded" />
        Follow us on LinkedIn
      </a>
    </div>
  </div>
</template>

<style lang="css" scoped>
@reference "./assets/main.css";

.center {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.background {
  @apply absolute inset-0;
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.7);
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @apply text-white gap-4;

  .hero-content {
    display: flex;
    align-items: center;

    .logo {
      height: calc(
        2 * theme('fontSize.6xl') + theme('fontSize.3xl') + theme('spacing.4')
      );
      width: auto;
    }

    .title-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      h1 {
        @apply text-6xl font-bold shadow;
      }

      h2 {
        @apply text-3xl shadow;
      }
    }
  }

  .linkedin-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @apply shadow;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
