<script setup>

</script>

<template>
    <v-carousel>

    <v-carousel-item
        src="/images/uni.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="/images/books.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="/images/grad.jpg"
        cover
    ></v-carousel-item>
    
    <v-carousel-item
        src="/images/students.jpg"
        cover
    ></v-carousel-item>
    </v-carousel>

    <!-- latest from jitegemee -->
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-card color="indigo-darken-2"
                    subtitle="Innovation meets real-world problems."
                    text="The ICT Club has begun work on a campus-wide mobile app aimed at streamlining communication, class schedules, and event alerts. Spearheaded by students across tech disciplines, the project combines design thinking with coding expertise and will be piloted before the end of the semester. Stay tuned for testing opportunities!"
                    title="ICT Club Launches App Project">
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card color="indigo-darken-2">
                    <template v-slot:title>
                        Trojans Triumph in Regional Finals
                    </template>

                    <template v-slot:subtitle>
                        Victory seals spot in nationals.
                    </template>

                    <template v-slot:text>
                        Jitegemee University’s sports team delivered a thrilling performance to clinch the regional championship title. With unmatched teamwork and dedication, the Trojans outplayed their rivals and are now set to represent the university at the national collegiate games next month. Support and school spirit are at an all-time high!
                    </template>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card color="indigo-darken-2">
                    <v-card-item>
                        <v-card-title>Class of 2025 Graduates</v-card-title>
                        <v-card-subtitle>Students celebrate academic milestones.</v-card-subtitle>
                    </v-card-item>

                    <v-card-text>
                        Over 500 graduates crossed the stage in a colorful and emotional ceremony marking the end of an academic chapter. Families, faculty, and alumni gathered to honor the achievements and resilience of the Class of 2025. The university community applauded as students turned their tassels and stepped into their futures.
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>

    <!-- Partners -->
    <v-container>
        <v-row>
            <v-col cols="12" md="2">
                <v-card-title>Amazon</v-card-title>
                <v-img src="../../public/images/amazon.jpg"></v-img>
            </v-col>

            <v-col cols="12" md="2">
                <v-card-title>Google</v-card-title>
                <v-img src="../../public/images/google.png"></v-img>
            </v-col>

            <v-col cols="12" md="2">
                <v-card-title>IBM</v-card-title>
                <v-img src="../../public/images/ibm.png"></v-img>
            </v-col>

            <v-col cols="12" md="2">
                <v-card-title>Meta</v-card-title>
                <v-img src="../../public/images/meta.png"></v-img>
            </v-col>

            <v-col cols="12" md="2">
                <v-card-title>Netflix</v-card-title>
                <v-img src="../../public/images/netflix.jpg"></v-img>
            </v-col>

            <v-col cols="12" md="2">
                <v-card-title>Strathmore</v-card-title>
                <v-img src="../../public/images/st.png"></v-img>
            </v-col>
        </v-row>

    </v-container>
</template>