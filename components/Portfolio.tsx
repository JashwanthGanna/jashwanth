import React from 'react'

export default function Portfolio() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="logo">ganna</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span>Welcome</span>
            </div>
            <h2 className="hero-subtitle">Software Engineer</h2>
            <h1 className="hero-title">Jashwanth Ganna</h1>
            <p className="hero-tagline">
              Full-stack developer crafting elegant digital solutions. Specialized in modern web technologies and cloud infrastructure.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Jashwanth Ganna"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-inner">
          <h3>Building the Future, One Line of Code at a Time</h3>
          <p>
            I'm a passionate software engineer with a deep interest in full-stack development, cloud technologies, and creating scalable
            solutions. With expertise in modern web frameworks and DevOps practices, I transform ideas into robust digital products.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring
            developers.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="skills-container">
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-divider"></div>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Vue.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>DevOps & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=220&fit=crop"
                alt="E-commerce Platform"
              />
            </div>
            <div className="project-content">
              <span className="project-number">Project 01</span>
              <h3 className="project-title">E-commerce Platform</h3>
              <p className="project-description">
                Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Stripe</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1460925895917-adf4e565dc18?w=500&h=220&fit=crop"
                alt="Analytics Dashboard"
              />
            </div>
            <div className="project-content">
              <span className="project-number">Project 02</span>
              <h3 className="project-title">Analytics Dashboard</h3>
              <p className="project-description">
                Interactive data visualization platform with real-time analytics, custom reports, and data export capabilities.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">D3.js</span>
                <span className="tech-tag">Node.js</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=220&fit=crop"
                alt="Mobile App"
              />
            </div>
            <div className="project-content">
              <span className="project-number">Project 03</span>
              <h3 className="project-title">Mobile App Sync</h3>
              <p className="project-description">
                Cross-platform mobile app with real-time sync, offline support, and cloud backup functionality.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="academic">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-date">2020 - 2024</span>
            <h3 className="timeline-title">Bachelor of Technology</h3>
            <p className="timeline-subtitle">Computer Science & Engineering</p>
            <p className="timeline-content">
              Specialized in cloud computing and distributed systems. Maintained a 3.8 GPA and participated in various technical competitions.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-date">2019 - 2020</span>
            <h3 className="timeline-title">Advanced Diploma</h3>
            <p className="timeline-subtitle">Full Stack Development</p>
            <p className="timeline-content">
              Intensive bootcamp covering modern web technologies, system design, and best practices in software engineering.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-date">2018 - 2019</span>
            <h3 className="timeline-title">Senior Secondary School</h3>
            <p className="timeline-subtitle">Science Stream</p>
            <p className="timeline-content">
              Completed senior secondary education with focus on mathematics and physics, laying foundation for engineering studies.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="work-experience">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-date">2023 - Present</span>
            <h3 className="timeline-title">Senior Full Stack Developer</h3>
            <p className="timeline-subtitle">
              <span className="company-highlight">Tech Innovation Labs</span>
            </p>
            <p className="timeline-content">
              Leading development of cloud-native applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-date">2021 - 2023</span>
            <h3 className="timeline-title">Full Stack Engineer</h3>
            <p className="timeline-subtitle">
              <span className="company-highlight">Digital Solutions Inc</span>
            </p>
            <p className="timeline-content">
              Developed and maintained multiple customer-facing applications using React and Node.js. Improved application performance by 40% through optimization.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-date">2020 - 2021</span>
            <h3 className="timeline-title">Junior Developer</h3>
            <p className="timeline-subtitle">
              <span className="company-highlight">StartUp Ventures</span>
            </p>
            <p className="timeline-content">
              Built responsive web applications and contributed to backend API development. Gained expertise in modern development practices and agile workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
        </div>

        <div className="certs-grid">
          <div className="cert-card">
            <div className="cert-icon">📜</div>
            <h3 className="cert-title">AWS Solutions Architect</h3>
            <p className="cert-issuer">Amazon Web Services</p>
            <p className="cert-year">2023</p>
            <button className="cert-view-btn">View Credential</button>
          </div>

          <div className="cert-card">
            <div className="cert-icon">📜</div>
            <h3 className="cert-title">Kubernetes Application Developer</h3>
            <p className="cert-issuer">Cloud Native Computing Foundation</p>
            <p className="cert-year">2023</p>
            <button className="cert-view-btn">View Credential</button>
          </div>

          <div className="cert-card">
            <div className="cert-icon">📜</div>
            <h3 className="cert-title">Advanced React Development</h3>
            <p className="cert-issuer">Meta</p>
            <p className="cert-year">2022</p>
            <button className="cert-view-btn">View Credential</button>
          </div>

          <div className="cert-card">
            <div className="cert-icon">📜</div>
            <h3 className="cert-title">Full Stack Web Development</h3>
            <p className="cert-issuer">Udacity</p>
            <p className="cert-year">2021</p>
            <button className="cert-view-btn">View Credential</button>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-divider"></div>
        </div>

        <div className="resume-content">
          <p>Interested in collaborating or learning more about my work? Download my resume and let's connect!</p>
          <button className="resume-btn">
            Download Resume
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-content">
          <p>Have a project in mind or want to chat about opportunities? I'd love to hear from you!</p>

          <div className="contact-links">
            <a href="mailto:jashwanth@example.com" className="contact-link">
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Email
            </a>
            <a href="https://linkedin.com" className="contact-link">
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com" className="contact-link">
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              GitHub
            </a>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>Designed & Built by Jashwanth Ganna</p>
          <div className="footer-divider"></div>
          <div className="footer-socials">
            <a href="https://twitter.com" className="footer-social-link" title="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1.5 9-5.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" className="footer-social-link" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              </svg>
            </a>
            <a href="https://github.com" className="footer-social-link" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </div>
          <div className="footer-divider"></div>
          <p>&copy; 2024 Jashwanth Ganna. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
