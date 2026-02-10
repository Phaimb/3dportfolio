// Project data structure
export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    thumbnail: string; // Imported image for portfolio grid (always loaded)
    images: string[]; // String paths for detail page (lazy loaded, supports images & videos)
    tools: string[];
    year: string;
}

// Import project images
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.png";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.png";
import art6 from "@/assets/art-6.jpg";
import art7 from "@/assets/art-7.jpg";


export const projects: Project[] = [
    {
        id: "monorail",
        title: "Monorail",
        category: "Environment",
        description: "A futuristic monorail designed for a sci-fi universe. This monorail represents the perfect blend of human and machine, featuring intricate mechanical details and a commanding presence. The design emphasizes both functionality and aesthetic appeal, with careful attention to materials, weathering, and storytelling through visual elements.",
        thumbnail: art1,
        images: [
            "/assets/monorail1.jpg",
            "/assets/monorail2.mp4",
        ],
        tools: ["Blender", "Houdini", "Substance Painter"],
        year: "2025",
    },
    {
        id: "renault",
        title: "Renault RS1",
        category: "Vehicle Design",
        description: "Renault RS1 is a high-performance sports car concept that pushes the boundaries of automotive design. Every curve and surface has been meticulously crafted to balance aerodynamic efficiency with aggressive aesthetics. The attention to detail extends from the carbon fiber body panels to the intricate wheel design, creating a vehicle that looks as fast as it would perform.",
        thumbnail: art2,
        images: [
            "/assets/Renault1.png",
            "/assets/Renault2.png",
            "/assets/Renault3.png",
            "/assets/Renault4.png",
            "/assets/Renault5.png",
        ],
        tools: ["ZBrush", "Blender", "Substance Painter", "Marmoset Toolbag"],
        year: "2025",
    },
    {
        id: "cowboy",
        title: "Cowboy",
        category: "Character Design",
        description: "A cowboy character in a Wild West setting. This cowboy represents the perfect blend of human and machine, featuring intricate mechanical details and a commanding presence. The design emphasizes both functionality and aesthetic appeal, with careful attention to materials, weathering, and storytelling through visual elements.",
        thumbnail: art3,
        images: [
            "/assets/cowboy_1.jpg",
            "/assets/cowboy_2.jpg",
            "/assets/cowboy_3.jpg",
            "/assets/cowboy_4.jpg",
            "/assets/cowboy_anim2.mp4",
        ],
        tools: ["Unreal Engine", "Blender", "Substance Designer"],
        year: "2024",
    },
    {
        id: "orangutan",
        title: "Orangutan",
        category: "Character Design",
        description: "A anthropomorphic orangutan character inspired by painter Lawson Wood. This character represents the perfect blend of human and machine, featuring intricate mechanical details and a commanding presence. The design emphasizes both functionality and aesthetic appeal, with careful attention to materials, weathering, and storytelling through visual elements.",
        thumbnail: art4,
        images: [
            "/assets/Orangutan1.jpg",
            "/assets/Orangutan2.jpg",
            "/assets/Orangutan1_cc.mp4",

        ],
        tools: ["Blender", "Substance Painter", "Keyshot"],
        year: "2024",
    },
    {
        id: "tommy",
        title: "Tommy",
        category: "Character Design",
        description: "Tommy, a cartoon Tomato character",
        thumbnail: art5,
        images: [
            "/assets/tom.png",
            "/assets/tomat2.mp4",
        ],
        tools: ["Blender", "Cinema 4D", "Corona Renderer"],
        year: "2024",
    },
    {
        id: "ziggurat",
        title: "Ziggurat",
        category: "Environment",
        description: "A ziggurat, a stepped pyramid, designed from imagination. This ziggurat represents the perfect blend of human and machine, featuring intricate mechanical details and a commanding presence. The environment captures the essence of the old world, with a blend of organic and geometric elements.",
        thumbnail: art6,
        images: [
            "/assets/Ziggurat1.jpg",
            "/assets/Ziggurat2.jpg",
            "/assets/Ziggurat_Edit01_k.mp4",
        ],
        tools: ["Houdini", "Blender", "Octane Render"],
        year: "2025",
    },
    {
        id: "shattered",
        title: "Shattered",
        category: "Character Design",
        description: "A tired and worn singer, on stage and looking in the mirror.",
        thumbnail: art7,
        images: [
            "/assets/c3r1k.png",
            "/assets/c1r2k.png",
            "/assets/c1_m.mp4",
            "/assets/c1_g.mp4",
        ],
        tools: ["Houdini", "Blender", "Octane Render"],
        year: "2025",
    },
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
    return projects.find((project) => project.id === id);
};
