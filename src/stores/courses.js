import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses',  {
    state: () => {
        const courses = ref([
            {
                id:1,
                name:"BSc in Computer Science", 
                school:"School of Computing", 
                description:"Best for incoming computer students",
                intake:"September 2025"
            },
            {
                id:2,
                name:"BSc in Medicine", 
                school:"School of Medicine", 
                description:"Best for incoming medicine students",
                intake:"September 2025"
            },
            {
                id:3,
                name:"BSc in Data Science", 
                school:"School of Science", 
                description:"Best for incoming data science students",
                intake:"September 2025"
            },
            {
                id:4,
                name:"BSc in Mechanical Engineering", 
                school:"School of Engineering", 
                description:"Best for incoming engineering students",
                intake:"September 2025"
            },
            {
                id:5,
                name:"BSc in Business & IT", 
                school:"School of Medicine", 
                description:"Best for incoming medicine students",
                intake:"September 2025"
            },
            {
                id:6,
                name:"BSc in Architecture", 
                school:"School of Science", 
                description:"Best for incoming data science students",
                intake:"September 2025"
            },
            {
                id:7,
                name:"BSc in Communication", 
                school:"School of Engineering", 
                description:"Best for incoming engineering students",
                intake:"September 2025"
            },
            {
                id:8,
                name:"BSc in Tourism Management", 
                school:"School of Medicine", 
                description:"Best for incoming medicine students",
                intake:"September 2025"
            },
            {
                id:9,
                name:"BSc in International Relations", 
                school:"School of Science", 
                description:"Best for incoming data science students",
                intake:"September 2025"
            },
            {
                id:10,
                name:"BSc in Business Management", 
                school:"School of Engineering", 
                description:"Best for incoming engineering students",
                intake:"September 2025"
            },
        ])
  
        const selectedCourse = ref(0)

        return{
            courses,
            selectedCourse
        }
    }, 
    actions:{
        updateSelectedCourse (payload) { //payload is same as courseId
            this.selectedCourse = payload
        }
    },
    persist: true,
})