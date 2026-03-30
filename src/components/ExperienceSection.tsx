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
  duration: "May 2025 – Jan 2026",
  bullets: [
    "Built a production-ready AI Interviewer using LLM orchestration with stateful agent workflows, handling multi-turn conversations, adaptive questioning, and response evaluation",
    "Designed evaluation pipeline using prompt engineering and structured scoring (correctness, depth, clarity) with dynamic follow-up question generation",
    "Developed backend using FastAPI with WebSockets for real-time interview sessions, integrating LLM APIs (Gemini/OpenAI) and managing session state, memory, and API pipelines",
  ],
  tags: [
    "Python", "FastAPI", "WebSockets", "LLM APIs (Gemini/OpenAI)",
    "Agent Workflows", "LLM Orchestration", "Prompt Engineering",
    "State Management", "RAG", "FAISS", "REST APIs"
  ],
},
  {
  role: "AI/ML Intern",
  company: "Insightloom",
  duration: "Jan 2025 – April 2025",
  bullets: [
    "Designed a multi-agent AI system using Python and FastAPI with intent detection to dynamically route tasks across chat, code, math, OCR, and image generation modules",
    "Implemented multi-model orchestration across LLM APIs (Gemini, Groq, HuggingFace) with fallback chains, retry logic, and structured error handling for reliability",
    "Built REST API-based backend and webhook-driven architecture for asynchronous task execution and real-time AI workflow processing",
  ],
  tags: [
    "Python", "FastAPI", "LLM APIs (Gemini, Groq, HuggingFace)",
    "Multi-Agent Systems", "Agent Orchestration", "Intent Detection",
    "Webhooks", "Async Processing", "REST APIs", "Error Handling"
  ],
},
  {
  role: "AI/ML Intern",
  company: "NULLCLASS",
  duration: "May 2024 – Nov 2024",
  bullets: [
    "Developed an AI-powered Chrome extension integrating LLM APIs to generate context-aware tab names and automate browser workflow optimization",
    "Architected an event-driven system using JavaScript with asynchronous API handling, webhook-style triggers, and real-time response processing",
    "Implemented LLM-based content understanding and classification logic to improve tab organization and user productivity",
  ],
  tags: [
    "JavaScript", "Chrome Extension", "LLM APIs",
    "Event-Driven Architecture", "Async Processing",
    "Webhooks", "REST APIs"
  ],
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
