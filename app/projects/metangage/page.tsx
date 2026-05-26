import Link from "next/link";
import FloatingNav from "../../components/FloatingNav";
import GitHubRepoCard from "../../components/GitHubRepoCard";

export default function MetangagePage() {
  return (
    <div className="page project-page">
      <FloatingNav />

      <main className="project-main">
        <section className="project-hero">
          <div className="content project-hero-inner">
            <div>
              <p className="project-kicker">Project</p>
              <h1 className="project-title">Metangage</h1>
              <p className="project-subtitle">Virtual office backend</p>
              <p className="section-text">
                Real-time virtual office platform with customizable spaces and
                scalable interactions.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/#projects">
                  Back to projects
                </Link>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/chaitanyarathi29"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-meta">
              <span>Realtime: WebSockets</span>
              <span>Testing: Jest coverage</span>
              <span>Admin: role-based control</span>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Demo</h2>
            <p className="section-text">
              Walkthrough of avatar movement, chat, and space management.
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
                WebSocket gateway handles realtime avatar movement and chat.
              </div>
              <div className="architecture-card">
                Spaces support CRUD operations with prebuilt arenas and
                configurable elements.
              </div>
              <div className="architecture-card">
                Singleton socket architecture ensures stable realtime sessions
                with admin controls for arena management.
              </div>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">GitHub</h2>
            <p className="section-text">Source code and testing suite.</p>
            <GitHubRepoCard repo="chaitanyarathi29/metangage" />
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">About the project</h2>
            <p className="section-text">
              Metangage delivers a test-driven backend for virtual offices with
              realtime coordination, role-based access, and end-to-end endpoint
              coverage.
            </p>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Tech stack</h2>
            <div className="project-tech">
              <span className="tag">Node.js</span>
              <span className="tag">WebSockets</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Jest</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
