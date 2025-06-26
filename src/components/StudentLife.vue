<script setup>

import {ref} from 'vue'
import { useStudentLifeStore } from '../stores/student_life'
const studentLifeStore = useStudentLifeStore() //making the student_life object accecssible
const student_life = studentLifeStore.student_life

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="item in student_life" :key="item">
                <!-- with full colo, it is called binding -->
                <v-card color="indigo-darken-2" class="mx-auto" max-width="400">
                    <v-img
                        class="align-end text-white"
                        height="200"
                        :src=item.image
                        cover>
                        <v-card-title>{{item.title}}</v-card-title>
                        <!-- with curly braces, it is calles interpolation -->
                    </v-img>
            
                    <v-card-subtitle class="pt-4">{{item.location}}</v-card-subtitle>
            
                    <v-card-text>
                        <div>{{item.description}}</div>
                    </v-card-text>
                
                    <v-card-actions>
                        <v-btn color="orange" text="Read More"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>