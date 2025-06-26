import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {

    const events=ref([
        {
            name:"Freshers’ Week Kickoff",
            image:"../../public/images/events/freshers.jpg",
            date:"September 17th 2025",
            location:"On Campus",
            category:"Entertainment",
            description:""
        },
        {
            name:"TechTalks: AI & the Future",
            image:"../../public/images/events/tech.jpg",
            date:"June 30th 2025",
            location:"iLab Africa",
            category:"Technology",
            description:""
        },
        {
            name:"Jitegemee Sports Day",
            image:"../../public/images/events/sports.jpg",
            date:"17th July 2025",
            location:"Nyayo Stadium",
            category:"Sports",
            description:""
        },
        {
            name:"Graduate School Info Night",
            image:"../../public/images/events/graduation.jpg",
            date:"2nd October 2025",
            location:"Radisson Blu Hotel",
            category:"Information",
            description:""
        },
        {
            name:"Career & Internship Expo",
            image:"../../public/images/events/career.jpg",
            date:"6th November 2025",
            location:"KICC",
            category:"Career",
            description:""
        },
        {
            name:"Library Open Night",
            image:"../../public/images/events/library.jpg",
            date:"15th December 2025",
            location:"Campus Library",
            category:"Information",
            description:""
        },
        {
            name:"Open Mic & Talent Night",
            image:"../../public/images/events/talent.jpg",
            date:"3rd February 2026",
            location:"Campus Auditorium",
            category:"Entertainment",
            description:""
        },
        {
            name:"Cultural and Diversity Fair",
            image:"../../public/images/events/culture.jpg",
            date:"19th August 2025",
            location:"Campus Sports Field",
            category:"Entertainment",
            description:""
        }
    ])
  
    return { events }
})