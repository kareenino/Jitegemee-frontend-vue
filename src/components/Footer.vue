<template>
    <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
      <div class="d-flex ga-3">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          density="comfortable"
          variant="text"
        ></v-btn>
      </div>
  
      <v-divider class="my-2" thickness="2" width="50"></v-divider>
  
      <div class="text-caption font-weight-regular opacity-60">
        This is the footer text
    </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Jitegemee</strong>
      </div>
    </v-footer>
  </template>

  