<script setup>
import {ref} from 'vue'

// models (to uniquely identify each text field)
const firstName = defineModel('firstName')
const middleName = defineModel('middleName')
const lastName = defineModel('lastName')
const emailAddress = defineModel('emailAddress')
const phoneNumber = defineModel('phoneNumber')
const physicalAddress = defineModel('physicalAddress')
const gender = defineModel('gender')
const dob = defineModel('dob')
const nationality = defineModel('nationality')

//object to hold form data
const applicationFormDetails = ref({
    firstName:firstName,
    middleName:middleName,
    lastName:lastName,
    emailAddress:emailAddress,
    phoneNumber:phoneNumber,
    physicalAddress:physicalAddress,
    gender:gender,
    dob:dob,
    nationality:nationality,
    course:selectedCourse

})

//function to save data 
function saveData(){
    for(let item in applicationFormDetails.value){
        console.log(applicationFormDetails.value[item])
    }
}

</script>

<template>
    <!-- Apply form -->
    <v-container>
     
        <!-- first name, middle name, last name -->
        <v-row>
            <v-col md="4">
                <v-text-field label="First Name" v-model="firstName"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Middle Name" v-model="middleName"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Last Name" v-model="lastName"> </v-text-field>
            </v-col>
        </v-row>
        <!-- email, phone, physical address -->
        <v-row>
            <v-col md="4">
                <v-text-field label="Email Address" v-model="emailAddress"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Phone Number" v-model="phoneNumber"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Physical Address" v-model="physicalAddress"> </v-text-field>
            </v-col>
        </v-row>
        <!-- gender, date of birth, nationality -->
         <v-row>
            <v-col md="4">
                <v-text-field label="Gender" v-model="gender"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Date of Birth" v-model="dob"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Nationality" v-model="nationality"> </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-btn block color="primary" @click="saveData()" >Submit</v-btn>
        </v-row>

    </v-container>

</template>