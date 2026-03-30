const row1 = [
  "Multi-Agent Systems", "Agent Communication", "LLM Orchestration", "Prompt Pipelines",
  "RAG Pipelines", "LLM Evaluation", "Function Calling", "Autonomous Task Planning", "Reasoning Systems",
];

const row2 = [
  "LangChain", "LangGraph", "LangSmith", "HuggingFace Transformers", "LLaMA", "GPT APIs",
  "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy",
];

const row3 = [
  "FastAPI", "REST APIs", "Webhooks", "Async Processing", "Event-Driven Architecture",
  "MySQL", "PostgreSQL", "FAISS", "ChromaDB", "Neo4j",
  "Docker", "AWS (EC2, S3)", "Git", "Linux", "CI/CD",
];

const SkillPill = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-4 py-2 rounded-full border border-border/60 bg-card/60 text-sm text-foreground whitespace-nowrap hover:border-primary/50 hover:bg-primary/10 transition-all duration-200">
    {label}
  </span>
);

const MarqueeRow = ({ skills, direction }: { skills: string[]; direction: "left" | "right" }) => {
  const doubled = [...skills, ...skills];
  return (
    <div className="marquee-row overflow-hidden py-2">
      <div className={`flex gap-3 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill}-${i}`} label={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto text-center mb-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Technical <span className="text-gradient">Expertise</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A dynamic skill set for building the next generation of AI — from agentic frameworks to scalable backend infrastructure.
        </p>
      </div>

      <div className="space-y-4 max-w-6xl mx-auto">
        <MarqueeRow skills={row1} direction="left" />
        <MarqueeRow skills={row2} direction="right" />
        <MarqueeRow skills={row3} direction="left" />
      </div>
    </section>
  );
};

export default SkillsSection;
