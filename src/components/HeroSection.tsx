import { Mail, Download, Github, Linkedin } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const socialIconClass =
    "inline-flex items-center justify-center rounded-full p-2 text-muted-foreground transition-all duration-300 cursor-pointer hover:scale-110 hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)]";

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <div className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[13px] md:text-sm font-medium tracking-wide text-slate-100 bg-gradient-to-r from-[#111a36]/85 via-[#1a1f4f]/80 to-[#2a2358]/80 backdrop-blur-md border border-cyan-300/30 shadow-[0_0_0_1px_rgba(125,211,252,0.18),0_0_26px_rgba(56,189,248,0.16)] hover:shadow-[0_0_0_1px_rgba(125,211,252,0.34),0_0_34px_rgba(99,102,241,0.24)] hover:scale-[1.03] transition-all duration-300">
            <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(74,222,128,0.85)]" />
            </span>
            <span>AI Engineer</span>
            <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(74,222,128,0.85)]" />
            </span>
            <span>Freelancer</span>
          </div>

          <h1 className="name-brand animate-name-reveal text-5xl md:text-6xl lg:text-[4.25rem] tracking-[-0.02em]">
            Gaurav Chawla
          </h1>

          <div className="max-w-xl text-muted-foreground leading-relaxed">
            <p className="mt-2 text-xl md:text-2xl text-foreground font-semibold leading-snug">
              I build <span className="text-primary">production-grade AI systems</span> that <span className="text-accent">scale</span> and solve <span className="text-primary">real-world problems</span>.
            </p>

            <div className="relative mt-4">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 -top-3 h-10 w-24 rounded-full border border-primary/35 rotate-[-18deg] blur-[0.2px]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -bottom-4 h-10 w-28 rounded-full border border-accent/35 rotate-[14deg]"
              />
              <p className="relative z-10 text-base md:text-lg text-foreground/95 font-medium">
                Focused on LLM orchestration, multi-agent systems and real-time AI pipelines combining machine learning with backend engineering to build reliable, scalable products.
              </p>
            </div>

            <p className="mt-7 text-2xl md:text-3xl font-bold leading-snug text-gradient">
              I build systems that scale not just models that run.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-200 glow-primary"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1Cpf1g6oXIyfQPIOdLL9C7ctWjFGoIuO3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-medium hover:border-primary/50 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/GAURAV0440"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className={socialIconClass}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravchawla001/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className={socialIconClass}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:gauravchawla147@gmail.com"
              title="Email"
              aria-label="Email"
              className={socialIconClass}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={heroIllustration}
              alt="AI Engineer illustration showing interconnected agents and systems"
              width={800}
              height={800}
              className="relative z-10 w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
