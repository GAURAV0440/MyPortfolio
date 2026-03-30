import { ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  link?: string;
}

const projects: Project[] = [
    {
  title: "AI Sleep Monitor (Real-Time Computer Vision System)",
  
  description: "Built a real-time computer vision system to detect drowsiness, yawning, and head-drop events using facial landmark analysis and behavioral signals from webcam input.",
  
  features: [
    "Implemented Eye Aspect Ratio (EAR) for continuous drowsiness detection across video frames",
    "Detected yawning using lip distance analysis from facial landmarks",
    "Tracked head-drop events via nose position movement for fatigue monitoring",
    "Designed multi-modal alert system with voice and toast notifications",
    "Developed threaded PyQt5 GUI for smooth real-time processing and user interaction"
  ],
  
  tags: [
    "Python",
    "OpenCV",
    "MediaPipe",
    "PyQt5",
    "NumPy",
    "Computer Vision"
  ],
  
  link: "https://github.com/GAURAV0440/AI_Sleep_monitor"
  },
  {
    title: "AI Assistant (RAG System)",

description: "Designed and implemented a Retrieval-Augmented Generation (RAG) chatbot using Gemini API and vector-based retrieval to generate context-aware, document-grounded responses with multi-personality interaction support.",

features: [
  "RAG pipeline with PDF ingestion using PyMuPDF",
  "Semantic retrieval using embeddings for context-aware responses",
  "Multi-personality conversational system via prompt orchestration",
  "Session-based memory for maintaining conversational continuity",
  "Multilingual interaction support (English + Hindi)"
],

tags: [
  "Python",
  "Streamlit",
  "Gemini API",
  "PyMuPDF",
  "RAG",
  "FAISS",
  "FastAPI",
  "Prompt Engineering"
],

link: "https://github.com/GAURAV0440/AI_Assistant"
  },
  {
  title: "AI Language Learning Chatbot",

  description: "Built a conversational AI chatbot to assist language learning through interactive dialogue, grammar correction, and contextual response generation.",

  features: [
    "Designed conversational workflows for real-time language practice and feedback",
    "Implemented NLP-based intent understanding and response generation",
    "Integrated grammar correction and contextual suggestions for improved learning",
    "Developed interactive interface for continuous user engagement and learning tracking"
  ],

  tags: ["Python", "NLP", "LLMs", "Chatbot Systems", "Streamlit"],

  link: "https://github.com/GAURAV0440/AI_Language_Learning_Chatbot"
},
];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-6 group hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(239_84%_67%/0.15)] transition-all duration-300 ease-out flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-foreground text-lg leading-snug pr-4">
                  {project.title}
                </h3>
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
                  {project.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {f}
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
