export interface ProjectSpec {
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  specs: ProjectSpec[];
  technologies: string[];
  liveUrl?: string;
  sourceUrl: string;
  mockup: {
    type:
      | "screenplay"
      | "equalizer"
      | "notes"
      | "face-animate"
      | "movie-universe"
      | "miro";
    header: string;
    badge: string;
  };
}

export const projects: Project[] = [
  {
    id: "karu",
    number: "01",
    title: "KARU",
    subtitle: "Film Workspace & Screenplay Studio",
    category: "FILM WORKSPACE & SCREENPLAY STUDIO",
    description:
      "A modern, distraction-free film workspace and screenplay writing studio built for screenwriters, directors, and independent filmmakers. Combines industry-standard screenplay formatting with modern full-stack engineering.",
    specs: [
      {
        label: "01. Canvas Engine",
        detail:
          "Physical 8.5 × 11 screenplay editor with TipTap & real-time autosave.",
      },
      {
        label: "02. Versioning",
        detail:
          "Optimistic concurrency control, revision checkpoints & restoration.",
      },
      {
        label: "03. Exports",
        detail:
          "Automated PDF, Fountain spec, and plain text export pipeline.",
      },
      {
        label: "04. Security",
        detail:
          "Google OAuth, email authentication, and refresh token rotation.",
      },
    ],
    technologies: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND",
      "TIPTAP",
      "GO",
      "GIN",
      "POSTGRESQL",
      "DOCKER",
    ],
    liveUrl: "https://karu-app.netlify.app",
    sourceUrl: "https://github.com/senthil-karthikeyan/karu",
    mockup: {
      type: "screenplay",
      header: "karu-app.netlify.app // SCREENPLAY CANVAS",
      badge: "55 FPS SYNC",
    },
  },
  {
    id: "voxpulse",
    number: "02",
    title: "VOXPULSE",
    subtitle: "Voice Attribute Inference Service",
    category: "MACHINE LEARNING MICROSERVICE",
    description:
      "A production-oriented real-time machine learning backend microservice that processes audio and infers voice attributes with temperature calibration and CPU inference benchmarking.",
    specs: [
      {
        label: "01. Audio Ingestion",
        detail:
          "Real-time WebSocket streaming with Voice Activity Detection (VAD).",
      },
      {
        label: "02. Classification",
        detail:
          "PyTorch training pipeline, ordinal classification & confidence scores.",
      },
      {
        label: "03. Benchmarks",
        detail:
          "Automated evaluation harness & calibrated CPU inference metrics.",
      },
    ],
    technologies: [
      "PYTHON 3.12",
      "FASTAPI",
      "PYTORCH",
      "WEBSOCKETS",
      "DOCKER",
    ],
    sourceUrl: "https://github.com/senthil-karthikeyan/voxpulse",
    mockup: {
      type: "equalizer",
      header: "voxpulse-wss-telemetry",
      badge: "[ STREAMING ]",
    },
  },
  {
    id: "notes",
    number: "03",
    title: "NOTES",
    subtitle: "Modern Notes & Task Tracking Workspace",
    category: "PRODUCTIVITY APPLICATION",
    description:
      "A modern notes and task tracking application designed for organizing ideas, notes, and daily work with seamless state management and instant local responsiveness.",
    specs: [
      {
        label: "01. Organization",
        detail:
          "Intuitive workflow boards and hierarchical list organization.",
      },
      {
        label: "02. Architecture",
        detail:
          "Instant client-side persistence and responsive web layout.",
      },
    ],
    technologies: ["REACT", "JAVASCRIPT", "TAILWIND CSS", "VERCEL"],
    liveUrl: "https://notes-trackers-app.vercel.app/",
    sourceUrl: "https://github.com/senthil-karthikeyan/notes",
    mockup: {
      type: "notes",
      header: "notes-app.vercel.app",
      badge: "EDGE RUNTIME",
    },
  },
  {
    id: "face-animate",
    number: "04",
    title: "FACE ANIMATE",
    subtitle: "3D Face Animation & MediaPipe Studio",
    category: "3D GRAPHICS & COMPUTER VISION",
    description:
      "A high-performance 3D face animation application that uses computer vision to track facial landmarks and applies various shaders and effects to animate facial expressions in real-time.",
    specs: [
      {
        label: "01. Computer Vision",
        detail:
          "MediaPipe facial landmark mesh extraction & real-time webcam processing.",
      },
      {
        label: "02. 3D WebGL Pipeline",
        detail:
          "Three.js & React Three Fiber custom vertex shader and morph target deformation.",
      },
      {
        label: "03. Interactive Filters",
        detail:
          "Real-time expression calibration, mesh smoothing, and shader post-processing.",
      },
    ],
    technologies: [
      "NEXT.JS",
      "TYPESCRIPT",
      "THREE.JS",
      "REACT THREE FIBER",
      "REACT WEBCAM",
      "TAILWIND",
    ],
    liveUrl: "https://threejs-mediapipe.vercel.app",
    sourceUrl: "https://github.com/senthil-developer/THREEJS-MEDIAPIPE",
    mockup: {
      type: "face-animate",
      header: "threejs-mediapipe.vercel.app // 3D CANVAS",
      badge: "WEBGL 60 FPS",
    },
  },
  {
    id: "movie-universe",
    number: "05",
    title: "MOVIE UNIVERSE",
    subtitle: "Comprehensive Cinema & Actor Intelligence",
    category: "ENTERTAINMENT & MEDIA DISCOVERY",
    description:
      "A comprehensive movie database platform providing detailed intelligence about movies, actors, and directors with fluid kinetic page transitions, rating analytics, and rich media discovery.",
    specs: [
      {
        label: "01. Media Indexing",
        detail:
          "Deep actor, director, and filmography relational exploration engine.",
      },
      {
        label: "02. Kinetic Interface",
        detail:
          "Framer Motion layout transitions, dynamic backdrop blurring & responsive poster grids.",
      },
      {
        label: "03. Optimized Caching",
        detail:
          "Edge cached API queries with instant sub-100ms client search responsiveness.",
      },
    ],
    technologies: [
      "NEXT.JS",
      "TYPESCRIPT",
      "FRAMER MOTION",
      "TAILWIND CSS",
      "REST APIS",
    ],
    liveUrl: "https://movie-universe-nextjs.netlify.app",
    sourceUrl: "https://github.com/senthil-developer/movie",
    mockup: {
      type: "movie-universe",
      header: "movie-universe-nextjs.netlify.app",
      badge: "REST SYNC",
    },
  },
  {
    id: "miro",
    number: "06",
    title: "MIRO",
    subtitle: "Real-Time Collaborative Whiteboard System",
    category: "REAL-TIME COLLABORATIVE SYSTEM",
    description:
      "A production-grade collaborative whiteboard workspace engineered for creating, sharing, and managing multi-user whiteboards in real-time with multi-cursor live presence and instant state sync.",
    specs: [
      {
        label: "01. Canvas Architecture",
        detail:
          "Infinite vector canvas supporting freehand drawing, geometric shapes & sticky notes.",
      },
      {
        label: "02. Live Multiplayer",
        detail:
          "Liveblocks real-time multiplayer cursor synchronization and conflict-free data replication.",
      },
      {
        label: "03. Reactive Backend",
        detail:
          "Convex real-time database engine, Clerk enterprise auth, and optimistic UI mutations.",
      },
    ],
    technologies: [
      "NEXT.JS",
      "TYPESCRIPT",
      "CONVEX",
      "LIVEBLOCKS",
      "CLERK AUTH",
      "FRAMER MOTION",
      "TAILWIND",
    ],
    liveUrl: "https://miro-nextjs14.vercel.app",
    sourceUrl: "https://github.com/senthil-developer/miro",
    mockup: {
      type: "miro",
      header: "miro-nextjs14.vercel.app // LIVE COLLAB",
      badge: "LIVE MULTIPLAYER",
    },
  },
];
