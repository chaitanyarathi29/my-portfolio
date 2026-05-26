import Link from "next/link";
import FloatingNav from "../../components/FloatingNav";
import GitHubRepoCard from "../../components/GitHubRepoCard";

export default function BetterUptimePage() {
  return (
    <div className="page project-page">
      <FloatingNav />

      <main className="project-main">
        <section className="project-hero">
          <div className="content project-hero-inner">
            <div>
              <p className="project-kicker">Project</p>
              <h1 className="project-title">BetterUptime</h1>
              <p className="project-subtitle">Realtime monitoring suite</p>
              <p className="section-text">
                Monitoring platform with live status dashboards, incident
                timelines, and worker-driven checks.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/#projects">
                  Back to projects
                </Link>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/chaitanyarathi29/uptimebetter"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-meta">
              <span>Focus: observability, reliability</span>
              <span>Workers: Redis Streams</span>
              <span>Realtime: status + alerts</span>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Demo</h2>
            <p className="section-text">
              Live checks, incident reporting, and uptime dashboards.
            </p>
            <div className="project-video-frame">
              <video controls playsInline preload="metadata">
                <source
                  src="/videos/cursorful-video-1779342414848.mp4"
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
            <div className="project-video-frame">
              <img
                src="/projects-images/590112994-933621d2-7640-44b1-96ea-c6191028b2c0.png"
                alt="BetterUptime architecture diagram"
              />
            </div>
            <div className="architecture-grid">
              <div className="architecture-card">
                JWT-based authentication for secure account access and team
                management.
              </div>
              <div className="architecture-card">
                Redis Streams power distributed workers with consumer groups for
                scalable checks and backpressure.
              </div>
              <div className="architecture-card">
                Live status dashboards and incident timelines stream updates to
                the UI.
              </div>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">GitHub</h2>
            <p className="section-text">Source code and worker infrastructure.</p>
            <GitHubRepoCard repo="chaitanyarathi29/uptimebetter" />
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">About the project</h2>
            <p className="section-text">
              BetterUptime delivers reliable monitoring with configurable check
              intervals, instant alerting, and realtime status signals to reduce
              downtime impact.
            </p>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Tech stack</h2>
            <div className="project-tech">
              <span className="tag">Node.js</span>
              <span className="tag">Redis Streams</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">JWT</span>
              <span className="tag">Pusher</span>
              <span className="tag">React</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
