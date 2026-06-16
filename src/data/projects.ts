import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "ShelfIO",
    description:
      "A full-stack inventory management application that lets users organize items into custom lists, track their status, and manage inventory through a modern dashboard.",
    image: "/projects/shelfio.png",
    technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Stripe"],
    category: "Full-Stack",
    liveUrl: "https://shelfio.org",
    githubUrl: "https://github.com/phuong-le-tech/shelfio",
    featured: true,
  },
  {
    id: 2,
    title: "BooqIn",
    description:
      "A platform for managing and lending books between users. Allows users to create collections, share their books, and borrow those of other users.",
    image: "/projects/available_soon.jpg",
    technologies: [
      "React",
      "Java 21",
      "Spring 6",
      "Stripe",
      "Google Books API",
      "Thymeleaf",
      "Docker",
    ],
    category: "Full-Stack",
    githubUrl: "https://github.com/phuong-le-tech/booqin",
    featured: true,
    hidden: true,
  },
  {
    id: 3,
    title: "Chadow",
    description:
      "An online chat server enabling file sharing between connected users while preserving IP address anonymity. Supports open mode (direct P2P) and hidden mode (proxy-based IP masking).",
    image: "/projects/available_soon.jpg",
    technologies: ["Java 21"],
    category: "Backend",
    githubUrl: "https://github.com/phuong-le-tech/chadow",
    featured: true,
    hidden: true,
  },
  {
    id: 4,
    title: "BooqIn — Android",
    description:
      "The Android version of BooqIn — a platform for managing and lending books between users. Adapted for mobile with native Kotlin, supporting collections, sharing, and borrowing flows.",
    image: "/projects/android.png",
    technologies: ["Kotlin"],
    category: "Mobile",
    githubUrl: "https://github.com/phuong-le-tech/booqin-android",
    featured: true,
  },
  {
    id: 5,
    title: "Nasm Compilator",
    description:
      "A compiler that detects semantic errors and produces target code in NASM assembly language for the TPC programming language.",
    image: "/projects/available_soon.jpg",
    technologies: ["C", "Yacc", "Lex"],
    category: "Backend",
    githubUrl: "https://github.com/phuong-le-tech/nasm-compilator",
    featured: false,
    hidden: true,
  },
  {
    id: 6,
    title: "GitClout",
    description:
      "A web application that analyses tags in a git repository and displays contributor statistics to provide a clearer understanding of each contributor's impact over time.",
    image: "/projects/available_soon.jpg",
    technologies: [
      "Java 21",
      "Spring 6",
      "Vue.js",
      "BulmaCSS",
      "Jgit",
      "HyperSQL",
    ],
    category: "Full-Stack",
    githubUrl: "https://github.com/phuong-le-tech/gitclout",
    featured: false,
    hidden: true,
  },
];
