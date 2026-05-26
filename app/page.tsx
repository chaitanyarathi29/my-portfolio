
import FloatingNav from "./components/FloatingNav";
import ScrollSequence from "./components/ScrollSequence";

export default function Home() {
  return (
    <div className="page">
      <FloatingNav />

      <main>
        <section id="hero" className="hero-sequence">
          <div className="sequence-stage">
            <ScrollSequence
              scrollTargetId="hero"
              frameCount={40}
              framePath="/sequence/ezgif-frame-"
              frameExtension="jpg"
              zeroPad={3}
              fit="contain"
              fitPadding={0.96}
            />
            <div className="sequence-overlay">
              <div className="content hero-overlay">
                <div className="hero-copy">
                  <p className="hero-kicker">Cinematic developer portfolio</p>
                  <h1 className="hero-title">Chaitanya Rathi</h1>
                  <p className="hero-role">Full Stack Developer</p>
                  <p className="hero-summary">
                    Backend systems, cloud deployments, and realtime product
                    engineering for AI SaaS and developer platforms.
                  </p>
                  <div className="hero-actions">
                    <a className="btn btn-primary" href="#projects">
                      View work
                    </a>
                    <a
                      className="btn btn-ghost"
                      href="mailto:chaitanyarathi29@gmail.com"
                    >
                      Email me
                    </a>
                  </div>
                </div>
                <div className="hero-panel">
                  <p className="panel-title">Studio session 01</p>
                  <p className="panel-text">
                    Scroll to rotate the late-night workspace and follow the
                    quiet break between builds.
                  </p>
                  <div className="panel-meta">
                    <span>35mm documentary tone</span>
                    <span>Teal monitor glow</span>
                    <span>Image sequence</span>
                  </div>
                </div>
              </div>
              <div className="scroll-hint">
                <span className="scroll-line" aria-hidden="true" />
                Scroll to rotate
              </div>
            </div>
            <div className="sequence-vignette" aria-hidden="true" />
          </div>
        </section>

        <section id="about" className="info-section">
          <div className="content">
            <h2 className="section-title">About</h2>
            <p className="section-text">
              I love building reliable, scalable products that feel fast and
              intentional. I am a B.Tech student in Information Technology at
              IIIT Bhopal (2023-27), focused on backend systems, cloud
              infrastructure, and realtime experiences. I enjoy learning by
              building, exploring new tools, and turning ideas into dependable
              systems that scale smoothly.
            </p>
            <div className="tag-row">
              <span className="tag">Node.js</span>
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">AWS</span>
              <span className="tag">Redis</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
        </section>

        <section id="education" className="info-section">
          <div className="content">
            <h2 className="section-title">Education & Links</h2>
            <div className="edu-links">
              <div className="edu-block">
                <h3 className="edu-title">
                  Indian Institute of Information Technology, Bhopal
                </h3>
                <p className="section-text">
                  Bachelor of Technology (B.Tech), Information Technology
                </p>
                <div className="edu-meta">
                  <span>2023-27</span>
                </div>
              </div>
              <div className="links-block">
                <h3 className="edu-title">Links</h3>
                <ul className="links-list">
                  
                  <li>
                    <span>Email</span>
                    <a href="mailto:chaitanyarathi29@gmail.com">
                      chaitanyarathi29@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>GitHub</span>
                    <a
                      href="https://github.com/chaitanyarathi29"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/chaitanyarathi29
                    </a>
                  </li>
                  <li>
                    <span>LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/chaitanya-rathi-0932a1287/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/chaitanya-rathi-0932a1287
                    </a>
                  </li>
                  <li>
                    <span>LeetCode</span>
                    <a
                      href="https://leetcode.com/u/chaitanyarathi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      leetcode.com/u/chaitanyarathi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="info-section">
          <div className="content">
            <h2 className="section-title">Experience</h2>
            <div className="experience-grid">
              <article className="project-card experience-card">
                <h3>OutblogAI (PhotoGPT) - Backend Intern</h3>
                <p className="experience-meta">
                  Jan - Mar 2026 · Remote · Seoul, South Korea
                </p>
                <p className="section-text">
                  AI SaaS platform for SEO blog generation and automation.
                </p>
                <ul className="experience-list">
                  <li>
                    Developed 3000+ lines of production backend code for core
                    platform features.
                  </li>
                  <li>
                    Revamped user onboarding workflows to improve usability and
                    activation.
                  </li>
                  <li>
                    Built automated email notifications with rate limiting and
                    scalable delivery logic.
                  </li>
                  <li>
                    Implemented bot integrations and backend automation
                    workflows.
                  </li>
                  <li>
                    Designed cron-based scheduling for automated and missed blog
                    publishing.
                  </li>
                  <li>
                    Delivered dashboard upgrades including calendar module and
                    theme support.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="info-section">
          <div className="content">
            <h2 className="section-title">Projects</h2>
            <div className="project-grid">
              <article className="project-card">
                <h3>Buildspace</h3>
                <p>
                  Self-hosted Vercel clone with one-click GitHub deploys, ECS
                  builds, and live log streaming.
                </p>
                <a className="project-link" href="/projects/buildspace">
                  View project
                </a>
              </article>
              <article className="project-card">
                <h3>BetterUptime</h3>
                <p>
                  Realtime monitoring suite using Redis Streams workers, instant
                  alerts, and incident timelines.
                </p>
                <a className="project-link" href="/projects/betteruptime">
                  View project
                </a>
              </article>
              <article className="project-card">
                <h3>ChalkAI</h3>
                <p>
                  AI whiteboard that refines sketches into professional
                  diagrams with Gemini 2.5 Flash and voice input.
                </p>
                <a className="project-link" href="/projects/chalkai">
                  View project
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="info-section">
          <div className="content">
            <h2 className="section-title">Contact</h2>
            <div className="contact-card">
              <p className="section-text">
                Open to internships and full stack collaboration. Reach out for
                backend, cloud, and realtime systems work.
              </p>
              <a
                className="btn btn-primary"
                href="mailto:chaitanyarathi29@gmail.com"
              >
                Email me
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="content">
          Built with Next.js and a love for clean interface craft.
        </div>
      </footer>

      <div className="noise" aria-hidden="true" />
    </div>
  );
}
