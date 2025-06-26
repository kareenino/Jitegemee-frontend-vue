
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "The Alchemist by Paulo Coelho",
                image: " /images/library/alchemist.jpg",
                description: "A shepherd boy travels across deserts in search of a treasure, discovering his true destiny along the way.",
            },
            {
                id: 2,
                title: "Atomic Habits by James Clear",
                image:" /images/library/atomic.jpg",
                description: "A practical guide to transforming your life through small, consistent behavior changes.",
            },
            {
                id: 3,
                title: "Where the Crawdads Sing by Delia Owens",
                image:" /images/library/crawdads.jpg",
                description: "A mysterious murder in a quiet town unravels the life of an abandoned girl who grew up in the wild marshes."
            },
            {
                id: 4,
                title: "It Ends With Us by Colleen Hoover",
                image:" /images/library/ends.jpg",
                description: "A young woman navigates love, trauma, and the cycle of abuse in a raw and emotional journey.",
            },
            {
                id: 5,
                title: "Fourth Wing by Rebecca Yarros",
                image:" /images/library/fourth.jpg",
                description: "A young woman is thrust into a deadly dragon-riding war college where survival means mastering magic and betrayal.",
            },
            {
                id: 6,
                title: "Lessons in Chemistry by Bonnie Garmus",
                image:" /images/library/lessons.jpg",
                description: "A brilliant female scientist in the 1960s becomes an unexpected TV cooking star while challenging gender norms.",
            },
            {
                id: 7,
                title: "The Midnight Library by Matt Haig",
                image:" /images/library/midnight.jpg",
                description: "A woman finds herself in a magical library between life and death, exploring alternate versions of her life.",
            },
            {
                id: 8,
                title: "The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid",
                image:" /images/library/seven.jpg",
                description: "A reclusive Hollywood icon reveals her scandalous life story and hidden truths to an unknown journalist.",
            },
            {
                id: 9,
                title: "The Silent Patient by Alex Michaelides",
                image:" /images/library/silent.jpg",
                description: "A famous painter shoots her husband and then stops speaking, leading a psychotherapist to unravel the mystery.",
            },
            {
                id: 10,
                title: "Verity by Colleen Hoover",
                image:" /images/library/verity.jpg",
                description: "A struggling writer uncovers terrifying secrets while finishing a bestselling author’s unfinished manuscript.",
            },
        
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})