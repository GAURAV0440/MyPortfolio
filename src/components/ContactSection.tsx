import { useState } from "react";
import { Mail, Send, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:gaurav@example.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Ready to discuss AI innovations and collaboration opportunities</p>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                placeholder="Tell me about your project or collaboration idea..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:gaurav@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:border-primary/50 transition-colors">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
