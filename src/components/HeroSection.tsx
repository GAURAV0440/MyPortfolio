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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AI Engineer
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Gaurav Chawla
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Building{" "}
            <span className="text-primary font-semibold">Agentic AI Systems</span>{" "}
            and{" "}
            <span className="text-accent font-semibold">Scalable LLM Architectures</span>.{" "}
            Focused on multi-agent orchestration, backend AI pipelines, and production-grade reasoning systems.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-200 glow-primary"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="#"
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
