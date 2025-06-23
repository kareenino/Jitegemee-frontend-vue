<script setup>
import {ref} from 'vue'
    const courses = ref([
        {
            name:"BSc in Computer Science", 
            school:"School of Computing", 
            description:"Best for incoming computer students",
            intake:"September 2025"
        },
        {
            name:"BSc in Medicine", 
            school:"School of Medicine", 
            description:"Best for incoming medicine students",
            intake:"September 2025"
        },
        {
            name:"BSc in Data Science", 
            school:"School of Science", 
            description:"Best for incoming data science students",
            intake:"September 2025"
        },
        {
            name:"BSc in Mechanical Engineering", 
            school:"School of Engineering", 
            description:"Best for incoming engineering students",
            intake:"September 2025"
        },
        {
            name:"BSc in Business & IT", 
            school:"School of Medicine", 
            description:"Best for incoming medicine students",
            intake:"September 2025"
        },
        {
            name:"BSc in Architecture", 
            school:"School of Science", 
            description:"Best for incoming data science students",
            intake:"September 2025"
        },
        {
            name:"BSc in Communication", 
            school:"School of Engineering", 
            description:"Best for incoming engineering students",
            intake:"September 2025"
        },
        {
            name:"BSc in Tourism Management", 
            school:"School of Medicine", 
            description:"Best for incoming medicine students",
            intake:"September 2025"
        },
        {
            name:"BSc in International Relations", 
            school:"School of Science", 
            description:"Best for incoming data science students",
            intake:"September 2025"
        },
        {
            name:"BSc in Business Management", 
            school:"School of Engineering", 
            description:"Best for incoming engineering students",
            intake:"September 2025"
        },
    ])
</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="course in courses">
                <!-- The v-for is for binding -->
                <v-card color="pink-darken-2">
                    <v-card-item>
                        <v-card-title>{{course.name}}</v-card-title>
                        <v-card-subtitle>{{course.school}}</v-card-subtitle>
                    </v-card-item>

                    <v-card-text>{{course.description}}</v-card-text>
                    <v-card-text>{{course.intake}}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>