import { ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  status: "completed" | "in-progress";
  link?: string;
}

const projects: Project[] = [
  {
    title: "AI Sleep Monitor (Real-Time Computer Vision System)",
    description:
      "Engineered a real-time computer vision system for behavioral analysis, capable of detecting drowsiness, yawning, and head-drop events using facial landmark tracking.",
    features: [
      "Eye Aspect Ratio (EAR) based drowsiness detection",
      "Facial landmark-based yawning and head movement tracking",
      "Multi-signal monitoring pipeline for robust detection",
      "Real-time processing with optimized performance",
      "Alert system for safety-critical scenarios",
    ],
    tags: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyQt5"],
    status: "completed",
    link: "https://github.com/GAURAV0440/AI_Sleep_monitor",
  },
  {
    title: "AI Assistant (RAG System)",
    description:
      "Developed a context-aware AI assistant leveraging Retrieval-Augmented Generation (RAG) to deliver accurate, document-grounded responses using semantic search and structured reasoning.",
    features: [
      "Document ingestion and embedding pipeline",
      "Semantic retrieval using FAISS",
      "Session-aware conversational memory",
      "Prompt orchestration for controlled reasoning",
      "Scalable FastAPI backend for real-time interaction",
    ],
    tags: ["Python", "FastAPI", "FAISS", "LangChain", "Gemini API", "PyMuPDF"],
    status: "completed",
    link: "https://github.com/GAURAV0440/AI_Assistant",
  },
  {
    title: "AI Language Learning Chatbot",
    description:
      "Built an interactive conversational AI system designed to improve language proficiency through contextual dialogue, grammar correction, and adaptive feedback.",
    features: [
      "NLP-based intent understanding and response generation",
      "Grammar correction with contextual suggestions",
      "Continuous conversation tracking for learning progression",
      "User engagement through interactive dialogue flows",
      "Lightweight and responsive interface",
    ],
    tags: ["Python", "NLP", "LLM APIs", "Streamlit"],
    status: "completed",
    link: "https://github.com/GAURAV0440/AI_Language_Learning_Chatbot",
  },
  {
    title: "AI Interviewer System",
    description:
      "Designing a production-grade AI interviewer that simulates real interview behavior by dynamically adapting questions based on resume analysis, job description, and real-time user responses.",
    features: [
      "Resume and job description driven question generation",
      "Adaptive questioning based on previous answers",
      "Real-time answer evaluation across depth, clarity, and correctness",
      "Interview state management and memory tracking",
      "Final feedback with scoring and improvement insights",
    ],
    tags: ["Python", "FastAPI", "LangChain", "FAISS", "LLM APIs", "WebSockets"],
    status: "in-progress",
  },
  {
    title: "Multi-Agent Code Debugger",
    description:
      "Building a multi-agent AI system capable of analyzing, debugging, and refining code through coordinated agent workflows and structured reasoning pipelines.",
    features: [
      "Multi-agent architecture (analysis, debugging, validation agents)",
      "Structured code understanding using AST parsing",
      "Iterative debugging with validation loops",
      "LLM-based reasoning with fallback mechanisms",
      "Scalable backend for handling complex code workflows",
    ],
    tags: ["Python", "FastAPI", "LangGraph", "Docker", "Redis", "LLM APIs"],
    status: "in-progress",
  },
];

const statusStyles = {
  completed: {
    label: "Completed",
    icon: "✅",
    className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  },
  "in-progress": {
    label: "In Progress",
    icon: "🚧",
    className: "bg-amber-500/15 text-amber-300 border-amber-500/40",
  },
} as const;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const status = statusStyles[project.status];
  const desktopPyramidClass =
    index === 3
      ? "xl:col-start-2 xl:col-span-2"
      : index === 4
        ? "xl:col-start-4 xl:col-span-2"
        : "xl:col-span-2";

  return (
    <div
      className={`glass-card p-6 group hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(239_84%_67%/0.15)] transition-all duration-300 ease-out flex flex-col ${desktopPyramidClass}`}
    >
      <div className="flex items-start justify-between mb-4 gap-3">
        <div className="min-w-0">
          <h3 className="font-display font-bold text-foreground text-lg leading-snug pr-2">{project.title}</h3>
          <span
            className={`mt-2 inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full border font-medium ${status.className}`}
          >
            <span>{status.icon}</span>
            <span>{status.label}</span>
          </span>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 p-1 rounded-lg hover:bg-primary/10"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>

      <div className="mb-4 flex-1">
        <p className="text-xs font-semibold text-foreground mb-2">Key Features:</p>
        <ul className="space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full border border-border bg-secondary/50 text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Innovative AI solutions with real-world impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/GAURAV0440"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/50 text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
          >
            View More Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
