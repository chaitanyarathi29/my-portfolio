import Link from "next/link";
import FloatingNav from "../../components/FloatingNav";
import GitHubRepoCard from "../../components/GitHubRepoCard";

export default function ChalkAiPage() {
  return (
    <div className="page project-page">
      <FloatingNav />

      <main className="project-main">
        <section className="project-hero">
          <div className="content project-hero-inner">
            <div>
              <p className="project-kicker">Project</p>
              <h1 className="project-title">ChalkAI</h1>
              <p className="project-subtitle">AI diagramming whiteboard</p>
              <p className="section-text">
                Interactive whiteboard that turns rough sketches into polished
                diagrams with Gemini 2.5 Flash, voice input, and fast iteration.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/#projects">
                  Back to projects
                </Link>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/chaitanyarathi29/chalkai"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-meta">
              <span>Canvas: tldraw</span>
              <span>AI: Gemini 2.5 Flash</span>
              <span>UI: Framer Motion</span>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Demo</h2>
            <p className="section-text">
              Sketch, refine, and iterate with quick enhance, voice prompts, and
              selection-aware improvements.
            </p>
            <div className="project-video-frame">
              <video controls playsInline preload="metadata">
                <source
                  src="/videos/531213240-69496cf1-7e2d-4a32-bc0d-b29b8c92ade3%20(1).mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Architecture</h2>
            <div className="architecture-grid">
              <div className="architecture-card">
                tldraw powers freehand drawing, shapes, arrows, and flexible
                canvas editing.
              </div>
              <div className="architecture-card">
                Gemini 2.5 Flash refines selected shapes or full sketches into
                professional diagrams.
              </div>
              <div className="architecture-card">
                Voice input supports intent-driven refinement with idle
                detection and rapid iteration.
              </div>
              <div className="architecture-card">
                Keyboard shortcuts enable accept/reject flows for quick
                feedback loops.
              </div>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">GitHub</h2>
            <p className="section-text">Source code and AI tooling.</p>
            <GitHubRepoCard repo="chaitanyarathi29/chalkai" />
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">About the project</h2>
            <p className="section-text">
              ChalkAI blends a full-featured whiteboard with AI refinement,
              enabling fast, professional diagram creation using voice prompts,
              quick enhance, and selection-aware generation.
            </p>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Tech stack</h2>
            <div className="project-tech">
              <span className="tag">tldraw</span>
              <span className="tag">Gemini 2.5 Flash</span>
              <span className="tag">Web Speech API</span>
              <span className="tag">Framer Motion</span>
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
