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
    type: "screenplay" | "equalizer" | "notes";
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
];
