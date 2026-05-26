import Link from "next/link";
import FloatingNav from "../../components/FloatingNav";
import GitHubRepoCard from "../../components/GitHubRepoCard";

export default function BuildspacePage() {
  return (
    <div className="page project-page">
      <FloatingNav />

      <main className="project-main">
        <section className="project-hero">
          <div className="content project-hero-inner">
            <div>
              <p className="project-kicker">Project</p>
              <h1 className="project-title">Buildspace</h1>
              <p className="project-subtitle">Cloud deployment platform</p>
              <p className="section-text">
                Self-hosted Vercel clone enabling one-click GitHub deployments,
                automated builds, and live logs on AWS.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/#projects">
                  Back to projects
                </Link>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/chaitanyarathi29/buildspace"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-meta">
              <span>Focus: CI/CD, containers, infra</span>
              <span>Runtime: AWS ECS + S3</span>
              <span>Realtime: Kafka + Redis Streams</span>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Demo</h2>
            <p className="section-text">
              Working walkthrough of the deployment flow, build logs, and live
              preview routing.
            </p>
            <div className="project-video-frame">
              <video controls playsInline preload="metadata">
                <source
                  src="/videos/cursorful-video-1779348324601.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">About the project</h2>
            <p className="section-text">
              Buildspace is a cloud-native deployment platform with automated
              builds, live logs, and scalable microservices. It includes a build
              server, API gateway, and reverse proxy layer for preview routing.
            </p>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Architecture</h2>
            <p className="section-text">
              Buildspace is a Vercel-style deployment pipeline split into four
              services with a streaming log backbone and fast artifact routing.
            </p>
            <div className="project-video-frame">
              <img
                src="/projects-images/524986749-f6759cfb-1b41-42b2-b039-b4d94e162a0d.png"
                alt="Buildspace architecture diagram"
              />
            </div>
            <div className="architecture-grid">
              <div className="architecture-card">
                React frontend creates projects and starts deployments with live
                status updates.
              </div>
              <div className="architecture-card">
                API server persists project and deployment metadata, launches
                ECS build tasks, and exposes log endpoints.
              </div>
              <div className="architecture-card">
                Build container clones the repo, runs build scripts, streams
                logs to Kafka, and uploads artifacts to S3.
              </div>
              <div className="architecture-card">
                Reverse proxy maps subdomains to S3 folders so deployments are
                served instantly.
              </div>
              <div className="architecture-card">
                PostgreSQL (via Prisma) tracks status, Kafka carries build logs,
                and ClickHouse stores them for fast polling in the UI.
              </div>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">GitHub</h2>
            <p className="section-text">Source code and deployment scripts.</p>
            <GitHubRepoCard repo="chaitanyarathi29/buildspace" />
          </div>
        </section>

        <section className="project-section">
          <div className="content">
            <h2 className="section-title">Tech stack</h2>
            <div className="project-tech">
              <span className="tag">Node.js</span>
              <span className="tag">Docker</span>
              <span className="tag">AWS ECS</span>
              <span className="tag">S3</span>
              <span className="tag">Redis</span>
              <span className="tag">Kafka</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Prisma</span>
              <span className="tag">Nginx</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
