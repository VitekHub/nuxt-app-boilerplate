<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Main Content Area -->
    <div class="flex flex-col min-h-screen">
      <!-- Main Content -->
      <main class="flex-1 p-6 overflow-auto pt-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
