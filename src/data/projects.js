export const projects = [
    {
        id: "battricks",
        title: "Battricks Adventure",
        timeline: "Fall 2025 - Present",
        categories: ["Level Design", "3D Art", "Game Design", "Game Programming"],
        engine: "Unity 6 URP",
        description: "Battricks Adventure is a 3D adventure game that I am currently developing. It will contain a variety of levels and experiences for players to enjoy.",
        tags: ["Unity", "C#", "3D Art", "Level Design", "Game Design"],
        featured: true, 
        media: [
            {
                type: "video",
                label: "Indev Update",
                youtubeId: "_1iCQlaqhXc"
            },
            {
                type: "models",
                label: "3D Assets",
                items: [
                    {
                        name: "Robot",
                        src: "/models/Robot.glb",
                    },
                    {
                        name: "Light Housing",
                        src: "/models/EmergencyLightHousing.glb",
                    },
                    {
                        name: "Monitor",
                        src: "/models/Monitor.glb",
                    }
                ]
            }
        ]
    },
    {
        id: "space-between",
        title: "The Space Between",
        timeline: "Spring 2024",
        categories: ["Level Design", "2D Art", "Team Project", "Game Programming"],
        engine: "Unity",
        description:  "The Space Between is a Top Down 2D Interactive Comic, based on the idea of Conciousness, Death and the Implications of Quantum Mechanics.",
        tags: ["Unity", "C#", "2D Art", "Team Project"],
        featured: false,
        media: [
            {
                type: "video",
                label: "Reflective Video",
                youtubeId: "XXQmSPtYiok"
            },
            {
                type: "gallery",
                label: "Gallery",
                images: [
                    "/images/TSB/TSB1.png",
                    "/images/TSB/TSB2.png",
                    "/images/TSB/TSB3.png",
                    "/images/TSB/TSB4.png",
                    "/images/TSB/TSB5.png",
                    "/images/TSB/TSB6.png",
                    "/images/TSB/TSB7.png",
                    "/images/TSB/TSB8.png" 
                ]
            }
        ],
        links: [
            {
                label: "Play the Game!",
                url: "https://kevinh929.itch.io/the-space-between",
                type: "itch"
            }
        ]
    },
    {
        id: "ar-platformer",
        title: "AR Platformer",
        timeline: "Winter 2023",
        categories: ["Programming", "AR Development", "Game Programming", "Team Project"],
        engine: "Unity",
        description: "An Augmented Reality Platformer Game that I developed in a team of 5 in 4 weeks. We used Vuforia to create the AR experience and Unity to develop the game.",
        tags: ["Unity", "C#", "AR Development", "Team Project"],
        featured: false
    },
    {
        id: "cats-climb",
        title: "Cats Climb",
        timeline: "Fall 2023",
        categories: ["Programming", "Game Design", "2D Art", "Level Design", "Game Programming"],
        engine: "Unity",
        description: "Cats Climb is a 2D Platformer Game that I developed as my very first foray into game development. I created the game in Unity and designed the levels, characters, and mechanics.",
        tags: ["Unity", "C#", "2D Art", "Level Design", "Game Design"],
        featured: false
    }
]