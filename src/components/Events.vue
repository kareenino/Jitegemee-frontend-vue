<script setup>

import {ref} from 'vue'
import { useEventsStore } from '../stores/events'
const eventsStore = useEventsStore() //making the events object accecssible
const events = eventsStore.events

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="event in events" :key="event">
                <!-- with full colo, it is called binding -->
                <v-card color="indigo-darken-2" class="mx-auto" max-width="400">
                    <v-img
                        class="align-end text-white"
                        height="200"
                        :src=event.image
                        cover>
                        <v-card-title>{{event.name}}</v-card-title>
                        <!-- with curly braces, it is calles interpolation -->
                    </v-img>
            
                    <v-card-subtitle class="pt-4">{{event.location}}</v-card-subtitle>
            
                    <v-card-text>
                        <div>{{event.date}}</div>
                    </v-card-text>
                
                    <v-card-actions>
                        <v-btn color="orange" :text="event.category"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>