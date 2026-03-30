import { Briefcase } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    role: "AI Engineer",
    company: "Hirewiser",
    duration: "2025 – Present",
    bullets: [
      "Built an AI Interviewer using LLM orchestration with stateful agent workflows and multi-turn evaluation",
      "Designed evaluation pipeline scoring correctness, depth, and clarity of candidate responses",
      "Integrated FastAPI backend with real-time WebSocket communication for interview sessions",
    ],
    tags: ["LLM Orchestration", "FastAPI", "Agent Workflows", "WebSockets"],
  },
  {
    role: "AI/ML Intern",
    company: "Insightloom",
    duration: "2024 – 2025",
    bullets: [
      "Built Duoples — a multi-agent AI system with intelligent task routing via intent detection",
      "Implemented multi-model fallback orchestration for robust, reliable AI responses",
    ],
    tags: ["Multi-Agent Systems", "Intent Detection", "Model Orchestration"],
  },
  {
    role: "AI/ML Intern",
    company: "Nullclass",
    duration: "2024",
    bullets: [
      "Developed Chrome extension powered by LLM APIs for real-time content analysis",
      "Architected event-driven system with async processing and webhook handling",
    ],
    tags: ["LLM APIs", "Event-Driven", "Async Processing", "Chrome Extension"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Building the future of autonomous AI systems</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Mobile dot */}
                <div className="md:hidden absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className={`glass-card p-6 md:w-[45%] ml-10 md:ml-0 ${
                  index % 2 === 0 ? "" : "md:ml-auto"
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-lg">{exp.role}</h3>
                      <p className="text-muted-foreground text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-accent text-sm font-medium mb-3">{exp.duration}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
