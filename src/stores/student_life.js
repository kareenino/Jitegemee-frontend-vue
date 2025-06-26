import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyond the Books: A Journey Through Student Life",
                image: "/images/studentlife/cheer.jpg",
                description: "More to life than school",
            },
            {
                id: 2,
                title: "Study.chill.repeat.life at its best",
                image:"/images/studentlife/basketball.jpg",
                description: "Sports included",
            },
            {
                id: 3,
                title: "Drama Club",
                image:"/images/studentlife/drama.jpg",
                description: "Sports included",
            },
            {
                id: 4,
                title: "Student Hostels",
                image:"/images/studentlife/hostels.jpg",
                description: "Sports included",
            },
            {
                id: 5,
                title: "The Grand Library",
                image:"/images/studentlife/library2.jpg",
                description: "Sports included",
            },
            {
                id: 6,
                title: "The Outdoors",
                image:"/images/studentlife/park.jpg",
                description: "Sports included",
            },
            {
                id: 7,
                title: "In class",
                image:"/images/studentlife/seats.jpg",
                description: "Sports included",
            },
            {
                id: 8,
                title: "Physucal Activity",
                image:"/images/studentlife/sport.jpg",
                description: "Sports included",
            },
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    }
})