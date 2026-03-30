import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Multi-Agent Knowledge Graph Search Engine",
    description: "Engineered an autonomous multi-agent search system with specialized AI architecture including web-scraping agents and a Knowledge Graph Builder Agent.",
    features: ["Agent-to-agent communication", "Intelligent task execution", "Knowledge graph + LLM reasoning"],
    tags: ["Python", "LangChain", "Neo4j", "ChromaDB", "Gemini-Pro"],
    link: "#",
  },
  {
    title: "AI Chatbot (RAG System)",
    description: "Built a retrieval-augmented generation chatbot with a robust reasoning pipeline, combining vector search with LLM-powered answer synthesis.",
    features: ["FAISS vector embeddings", "Context-aware retrieval", "FastAPI backend"],
    tags: ["Python", "FAISS", "FastAPI", "HuggingFace", "RAG"],
    link: "#",
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-6 group hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-foreground text-lg leading-snug pr-4">
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-foreground mb-2">Key Features:</p>
                <ul className="space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
