<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold mb-6">Welcome to Nuxt</h1>
      
      <div class="space-y-6">
        <p class="text-gray-600 dark:text-gray-400">
          Your Nuxt application is ready! Start building.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="font-semibold mb-2">Documentation</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Learn more about Nuxt features and API.
            </p>
            <UButton 
              to="https://nuxt.com/docs" 
              target="_blank" 
              variant="ghost" 
              size="xs"
              class="text-primary-500"
            >
              View Docs →
            </UButton>
          </div>
          
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="font-semibold mb-2">Components</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Build reusable UI components with Nuxt UI.
            </p>
            <UButton 
              to="https://ui.nuxt.com/" 
              target="_blank" 
              variant="ghost" 
              size="xs"
              class="text-primary-500"
            >
              View Docs →
            </UButton>
          </div>
          
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="font-semibold mb-2">Internationalization</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Add multi-language support with Nuxt i18n.
            </p>
            <UButton 
              to="https://i18n.nuxtjs.org/" 
              target="_blank" 
              variant="ghost" 
              size="xs"
              class="text-primary-500"
            >
              View Docs →
            </UButton>
          </div>
          
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="font-semibold mb-2">State Management</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Manage global state with Pinia.
            </p>
            <UButton 
              to="https://pinia.vuejs.org/" 
              target="_blank" 
              variant="ghost" 
              size="xs"
              class="text-primary-500"
            >
              View Docs →
            </UButton>
          </div>
          
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="font-semibold mb-2">TypeScript</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Build with full TypeScript support.
            </p>
            <UButton 
              to="https://nuxt.com/docs/guide/concepts/typescript" 
              target="_blank" 
              variant="ghost" 
              size="xs"
              class="text-primary-500"
            >
              View Docs →
            </UButton>
          </div>
          
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="font-semibold mb-2">Tailwind CSS</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Style your app with utility-first CSS.
            </p>
            <UButton 
              to="https://tailwindcss.com/docs" 
              target="_blank" 
              variant="ghost" 
              size="xs"
              class="text-primary-500"
            >
              View Docs →
            </UButton>
          </div>
        </div>
        
        <div class="mt-8 p-6 bg-primary-50 dark:bg-primary-950/20 rounded-lg border border-primary-200 dark:border-primary-800">
          <h3 class="font-semibold mb-3 text-primary-900 dark:text-primary-100">📚 Quick Links</h3>
          <div class="flex flex-wrap gap-3">
            <UButton 
              to="https://nuxt.com/docs/getting-started" 
              target="_blank" 
              variant="solid"
              size="sm"
            >
              Getting Started
            </UButton>
            <UButton 
              to="https://nuxt.com/docs/guide/directory-structure" 
              target="_blank" 
              variant="outline"
              size="sm"
            >
              Directory Structure
            </UButton>
            <UButton 
              to="https://nuxt.com/modules" 
              target="_blank" 
              variant="outline"
              size="sm"
            >
              Nuxt Modules
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Your application logic here
</script>