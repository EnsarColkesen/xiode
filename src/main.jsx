import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// Shared interface icons
const Arrow = ({ down = false }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d={down ? "M10 3v13m-5-5 5 5 5-5" : "M4 10h12m-5-5 5 5-5 5"} />
  </svg>
);
const Spark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M12 1c.7 7 4.3 10.3 11 11-6.7.7-10.3 4-11 11-.7-7-4.3-10.3-11-11 6.7-.7 10.3-4 11-11Z" />
  </svg>
);

// Animated holographic system used in the hero
function TechOrbit() {
  return (
    <div className="tech-orbit" aria-hidden="true">
      <div className="orbit-glow" />
      <div className="orbit-ring orbit-ring-one">
        <i />
        <i />
        <i />
      </div>
      <div className="orbit-ring orbit-ring-two">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="orbit-ring orbit-ring-three">
        <i />
        <i />
      </div>
      <div className="orbit-ring orbit-ring-four">
        <i />
        <i />
        <i />
      </div>
      <div className="orbit-crosshair">
        <span />
        <span />
      </div>
      <div className="holo-system">
        <div className="holo-gradient-waves">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="holo-wisp holo-wisp-a" />
        <div className="holo-wisp holo-wisp-b" />
        <div className="holo-wisp holo-wisp-c" />
        <div className="holo-globe">
          <svg viewBox="0 0 400 400" role="presentation">
            <defs>
              <radialGradient id="holoFill" cx="42%" cy="35%">
                <stop offset="0" stopColor="#65c7ff" stopOpacity=".28" />
                <stop offset=".58" stopColor="#1557ff" stopOpacity=".12" />
                <stop offset="1" stopColor="#5c2fd0" stopOpacity=".05" />
              </radialGradient>
              <linearGradient id="holoStroke" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#8ce3ff" />
                <stop offset=".55" stopColor="#4088ff" />
                <stop offset="1" stopColor="#9b5cff" />
              </linearGradient>
              <filter id="holoGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              className="holo-shell"
              cx="200"
              cy="200"
              r="151"
              fill="url(#holoFill)"
              stroke="url(#holoStroke)"
            />
            <g className="holo-grid" fill="none" stroke="url(#holoStroke)">
              <ellipse cx="200" cy="200" rx="150" ry="47" />
              <ellipse cx="200" cy="200" rx="150" ry="91" />
              <ellipse cx="200" cy="200" rx="150" ry="124" />
              <ellipse cx="200" cy="200" rx="48" ry="151" />
              <ellipse cx="200" cy="200" rx="94" ry="151" />
              <ellipse cx="200" cy="200" rx="126" ry="151" />
            </g>
            <g
              className="holo-land"
              fill="none"
              stroke="url(#holoStroke)"
              filter="url(#holoGlow)"
            >
              <path d="M75 126l25-25 35 3 18 20 27-4 14 18-16 18-29 5-12 29-31-7-18-24Z" />
              <path d="M215 89l29 4 13 18 35 2 22 25-7 20-28 7-13 29-21-4-8-31-26-15-15-25Z" />
              <path d="M199 221l33-13 37 12 19 31-19 21-3 39-28 18-20-28-27-14-8-34Z" />
              <path d="M102 237l30-18 29 12 11 32-13 19-6 38-24-7-12-34-24-20Z" />
            </g>
            <g className="holo-links" fill="none">
              <path d="M95 141 151 126 226 112 286 148 252 229 281 263 229 303 155 271 114 241 95 141Z" />
              <path d="M151 126 155 271M226 112 229 303M114 241 252 229" />
            </g>
            <g className="holo-points" fill="#a8eaff">
              {[
                [95, 141],
                [151, 126],
                [226, 112],
                [286, 148],
                [252, 229],
                [281, 263],
                [229, 303],
                [155, 271],
                [114, 241],
                [200, 200],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r={i === 9 ? 4 : 2.5} />
              ))}
            </g>
            <circle
              className="holo-scan-ring"
              cx="200"
              cy="200"
              r="172"
              fill="none"
              stroke="#79cfff"
            />
          </svg>
          <div className="holo-scan-beam" />
          <div className="holo-pulses">
            <i />
            <i />
            <i />
          </div>
          <div className="holo-label">
            <b>XIODE SOLUTIONS</b>
            <span>Connected digital systems</span>
          </div>
          <div className="holo-particles">
            {Array.from({ length: 18 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
        </div>
        <div className="holo-card holo-card-users">
          <span>◎</span>
          <div>
            <b>+184%</b>
            <small>engagement</small>
          </div>
        </div>
        <div className="holo-card holo-card-growth">
          <svg viewBox="0 0 40 24">
            <path d="M2 21 13 13l8 4L37 3" />
            <path d="m30 3h7v7" />
          </svg>
          <div>
            <b>2.4×</b>
            <small>growth signal</small>
          </div>
        </div>
        <div className="holo-card holo-card-live">
          <i />
          <span>System live</span>
        </div>
        <div className="holo-satellite-ring">
          <div className="holo-satellite sat-a">
            <span>98</span>
            <small>performance</small>
          </div>
          <div className="holo-satellite sat-b">
            <span>AA</span>
            <small>accessible</small>
          </div>
          <div className="holo-satellite sat-c">
            <span>0.8s</span>
            <small>load signal</small>
          </div>
          <div className="holo-satellite sat-d">
            <span>24/7</span>
            <small>online</small>
          </div>
        </div>
        <div className="holo-system-title">
          <i /> DIGITAL EXPERIENCE ENGINE <span>SYNC / 100%</span>
        </div>
      </div>
      <div className="orbit-core">
        <span>XIODE</span>
        <small>Solutions</small>
      </div>
      <div className="orbit-node orbit-node-a">01</div>
      <div className="orbit-node orbit-node-b">UX</div>
      <div className="orbit-node orbit-node-c">/26</div>
    </div>
  );
}

// Fixed blue-gradient atmosphere behind the entire site
function SiteOrbitField() {
  return (
    <div className="site-orbit-field" aria-hidden="true">
      <div className="field-aura" />
      <div className="field-orbit field-orbit-primary">
        <div className="field-ring field-ring-outer" />
        <div className="field-ring field-ring-large" />
        <div className="field-ring field-ring-medium" />
        <div className="field-ring field-ring-inner" />
        <div className="field-ring field-ring-hairline" />
      </div>
      <div className="field-orbit field-orbit-secondary">
        <div className="field-ring field-ring-outer" />
        <div className="field-ring field-ring-medium" />
        <div className="field-ring field-ring-inner" />
      </div>
      <div className="field-sweep" />
      <div className="field-particles">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

// Portfolio case-study content
const projects = [
  {
    id: "arc",
    n: "01",
    title: "Arc & Form",
    type: "Architecture studio",
    tone: "sand",
    line: "Space, shaped with intent.",
    year: "2026",
    scope: "Strategy · Portfolio · Development",
    summary:
      "A quiet, image-led portfolio that gives the studio’s work room to breathe and turns considered browsing into serious project enquiries.",
    stat: "+184%",
    statLabel: "project enquiries",
    secondStat: "3.1×",
    secondLabel: "longer visits",
  },
  {
    id: "northline",
    n: "02",
    title: "Northline",
    type: "Independent finance",
    tone: "blue",
    line: "Clarity for the road ahead.",
    year: "2026",
    scope: "Positioning · UX · Lead generation",
    summary:
      "A precise digital platform that makes complex financial guidance feel accessible, human, and immediately credible.",
    stat: "2.4×",
    statLabel: "qualified leads",
    secondStat: "-38%",
    secondLabel: "bounce rate",
  },
  {
    id: "mysa",
    n: "03",
    title: "Mysa",
    type: "Wellness & skincare",
    tone: "rose",
    line: "Rituals for real life.",
    year: "2025",
    scope: "E-commerce · Booking · Brand system",
    summary:
      "A tactile commerce and booking experience designed around daily rituals, expert guidance, and effortless product discovery.",
    stat: "+71%",
    statLabel: "online bookings",
    secondStat: "+46%",
    secondLabel: "cart value",
  },
];

// Distinct website preview for each portfolio project
function BrowserMockup({ project, active = false }) {
  return (
    <div className={`browser ${project.tone} ${active ? "active" : ""}`}>
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>{project.title.toLowerCase().replaceAll(" ", "")}.com</span>
      </div>
      {project.id === "arc" && (
        <div className="case-screen arc-screen">
          <div className="case-nav">
            <b>
              ARC<span>+</span>FORM
            </b>
            <span>Projects &nbsp;&nbsp; Studio &nbsp;&nbsp; Journal</span>
            <button>Enquire ↗</button>
          </div>
          <div className="arc-hero">
            <div className="case-copy">
              <small>Architecture / Urbanism / Interiors</small>
              <h3>
                Space, shaped
                <br />
                with intent.
              </h3>
              <p>
                We design enduring spaces where material, light, and daily life
                find their balance.
              </p>
              <button>
                View selected projects <Arrow />
              </button>
            </div>
            <div className="arc-visual">
              <div className="arc-building">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>Haus 07 · Berlin</span>
            </div>
          </div>
          <div className="arc-projects">
            <span>Selected work</span>
            <div>
              <i>01</i>
              <b>Atelier N</b>
              <small>Berlin · 2025</small>
            </div>
            <div>
              <i>02</i>
              <b>Casa Lumen</b>
              <small>Lisbon · 2024</small>
            </div>
          </div>
        </div>
      )}
      {project.id === "northline" && (
        <div className="case-screen north-screen">
          <div className="case-nav">
            <b>
              NORTH<span>/</span>LINE
            </b>
            <span>
              Our approach &nbsp;&nbsp; Expertise &nbsp;&nbsp; Insights
            </span>
            <button>Speak to an adviser ↗</button>
          </div>
          <div className="north-hero">
            <div className="case-copy">
              <div className="live-pill">
                <i /> Independent advice · Clear thinking
              </div>
              <h3>
                Make your next move
                <br />
                <em>with confidence.</em>
              </h3>
              <p>
                Evidence-led financial planning for founders, families, and
                everything they are building.
              </p>
              <button>
                Plan your first conversation <Arrow />
              </button>
              <div className="north-trust">
                <b>£1.2B</b>
                <span>assets advised</span>
                <b>18 yrs</b>
                <span>average relationship</span>
              </div>
            </div>
            <div className="north-panel">
              <div className="panel-top">
                <span>Portfolio outlook</span>
                <b>Live</b>
              </div>
              <strong>+12.8%</strong>
              <small>Projected long-term growth</small>
              <svg viewBox="0 0 300 120">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#4f82ff" stopOpacity=".5" />
                    <stop offset="1" stopColor="#4f82ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  className="area"
                  d="M0 105 C40 95,40 80,75 85 S115 53,145 62 S190 25,220 41 S263 10,300 14 L300 120 L0 120Z"
                />
                <path
                  className="chart-line"
                  d="M0 105 C40 95,40 80,75 85 S115 53,145 62 S190 25,220 41 S263 10,300 14"
                />
              </svg>
              <div className="allocation">
                <span>
                  <i />
                  Global equity 62%
                </span>
                <span>
                  <i />
                  Fixed income 24%
                </span>
                <span>
                  <i />
                  Alternatives 14%
                </span>
              </div>
            </div>
          </div>
          <div className="north-bar">
            <span>Trusted thinking for complex lives.</span>
            <b>For founders</b>
            <b>For families</b>
            <b>For the future</b>
          </div>
        </div>
      )}
      {project.id === "mysa" && (
        <div className="case-screen mysa-screen">
          <div className="case-nav">
            <b>mýsa</b>
            <span>Shop &nbsp;&nbsp; Treatments &nbsp;&nbsp; Skin journal</span>
            <button>Book a treatment</button>
          </div>
          <div className="mysa-hero">
            <div className="case-copy">
              <small>Considered care · Made personal</small>
              <h3>
                Rituals for
                <br />
                <em>real life.</em>
              </h3>
              <p>
                High-performance skincare and thoughtful treatments, shaped
                around you.
              </p>
              <div>
                <button>Shop the collection</button>
                <a>Meet your skin ↗</a>
              </div>
            </div>
            <div className="mysa-product">
              <div className="product-glow" />
              <div className="bottle">
                <span>mýsa</span>
                <small>
                  daily
                  <br />
                  renewal
                  <br />
                  serum
                </small>
                <i>30 ml</i>
              </div>
              <span className="product-note">01 / Hydrate + restore</span>
            </div>
          </div>
          <div className="mysa-bottom">
            <div>
              <span>01</span>
              <b>Skin consultation</b>
              <small>Start with an expert</small>
            </div>
            <div>
              <span>02</span>
              <b>Your daily ritual</b>
              <small>Built for your skin</small>
            </div>
            <div className="review">
              <b>“My skin finally makes sense.”</b>
              <span>★★★★★ &nbsp; 4.9 from 680 reviews</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Responsive primary navigation
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <a className="logo" href="#top" aria-label="Xiode Solutions home">
        <span className="brand-main">XIODE</span>
        <small>SOLUTIONS</small>
        <span className="logo-dot">●</span>
      </a>
      <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
        <a href="#about">Why us</a>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
      </button>
    </header>
  );
}

// Main page composition and interaction state
function App() {
  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    const observer = new IntersectionObserver(
      (es) =>
        es.forEach((e) => e.isIntersecting && e.target.classList.add("seen")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <div id="top" className={scrolled ? "page scrolled" : "page"}>
      <SiteOrbitField />
      <Header />
      <main>
        <section className="hero">
          <TechOrbit />
          <div className="eyebrow reveal">
            <span /> Independent web design studio · Europe / Worldwide
          </div>
          <h1 className="reveal">
            Your business
            <br />
            deserves <em>better.</em>
          </h1>
          <div className="hero-bottom reveal">
            <p>
              We turn overlooked businesses into unforgettable brands with
              websites that earn trust, spark interest, and move people to act.
            </p>
            <a className="circle-link" href="#work">
              <span>See our work</span>
              <Arrow down />
            </a>
          </div>
          <div className="hero-ribbon" aria-hidden="true">
            <span>Strategy</span>
            <Spark />
            <span>Interface design</span>
            <Spark />
            <span>React development</span>
            <Spark />
            <span>Digital growth</span>
          </div>
        </section>

        <section className="manifesto section-pad reveal" id="about">
          <div className="section-label">
            The honest truth <span>↓</span>
          </div>
          <div className="manifesto-copy">
            <p className="muted">
              Your website is often the first conversation your business has.
            </p>
            <p>
              If it feels dated, confusing, or simply doesn't exist, your best
              customers may never start the second one.
            </p>
          </div>
          <div className="proof-row">
            <div>
              <strong>
                0.05<sup>s</sup>
              </strong>
              <span>to make a first impression</span>
            </div>
            <div>
              <strong>
                75<sup>%</sup>
              </strong>
              <span>judge credibility by design</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>your best salesperson works</span>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading reveal">
            <div>
              <span className="kicker">Selected transformations</span>
              <h2>
                Built to be
                <br />
                <i>remembered.</i>
              </h2>
            </div>
            <p>
              A glimpse of what becomes possible when strategy, story, and
              meticulous design meet.
            </p>
          </div>
          <div className="project-stage reveal">
            <div className="project-info">
              <span className="project-count">{projects[current].n} / 03</span>
              <div className="project-title">
                <h3>{projects[current].title}</h3>
                <p>{projects[current].type}</p>
              </div>
              <p className="project-summary">{projects[current].summary}</p>
              <div className="project-details">
                <div>
                  <span>Scope</span>
                  <strong>{projects[current].scope}</strong>
                </div>
                <div>
                  <span>Launch</span>
                  <strong>{projects[current].year}</strong>
                </div>
              </div>
              <div className="project-results">
                <div>
                  <strong>{projects[current].stat}</strong>
                  <span>{projects[current].statLabel}</span>
                </div>
                <div>
                  <strong>{projects[current].secondStat}</strong>
                  <span>{projects[current].secondLabel}</span>
                </div>
              </div>
              <div className="project-controls">
                <button
                  onClick={() => setCurrent((current + 2) % 3)}
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrent((current + 1) % 3)}
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>
            <BrowserMockup project={projects[current]} active />
          </div>
          <div className="project-tabs reveal">
            {projects.map((p, i) => (
              <button
                key={p.title}
                className={i === current ? "active" : ""}
                onClick={() => setCurrent(i)}
              >
                <span>{p.n}</span>
                {p.title}
              </button>
            ))}
          </div>
        </section>

        <section className="contrast section-pad reveal">
          <div className="contrast-head">
            <span className="kicker">A tale of two websites</span>
            <h2>
              Same business.
              <br />
              <i>Different future.</i>
            </h2>
          </div>
          <div className="compare">
            <div className="old-site">
              <div className="compare-meta">
                <div className="compare-tag">Before · 2011</div>
                <span>Lost in the past</span>
              </div>
              <div className="old-window">
                <div className="mini-browser">
                  <i />
                  <i />
                  <i />
                  <span>kinandco-legal.com/home.html</span>
                </div>
                <div className="old-brand">
                  KIN &amp; CO. SOLICITORS <small>Est. 1987</small>
                </div>
                <div className="old-links">
                  HOME | ABOUT US | OUR SERVICES | NEWS | CONTACT US
                </div>
                <div className="old-marquee">
                  *** WELCOME TO OUR WEBSITE — QUALITY LEGAL ADVICE AT
                  AFFORDABLE RATES ***
                </div>
                <div className="old-grid">
                  <aside>
                    <b>OUR SERVICES</b>
                    <a>Commercial Law</a>
                    <a>Property</a>
                    <a>Family Law</a>
                    <a>Wills &amp; Probate</a>
                    <div className="visitor">
                      You are visitor
                      <br />
                      <strong>001842</strong>
                    </div>
                  </aside>
                  <div className="old-main">
                    <div className="broken-image">
                      <span>×</span> image_hero_final2.jpg
                    </div>
                    <h4>WELCOME TO KIN &amp; CO.</h4>
                    <p>
                      We are a leading provider of quality legal services. Our
                      experienced team can assist you with all your legal needs.
                    </p>
                    <button>CLICK HERE TO READ MORE &gt;&gt;</button>
                  </div>
                </div>
                <div className="old-footer">
                  Copyright © 2011 Kin &amp; Co. | Best viewed in Internet
                  Explorer 8
                </div>
              </div>
              <div className="compare-verdict">
                <strong>Confusing</strong>
                <strong>Generic</strong>
                <strong>Easy to leave</strong>
              </div>
            </div>
            <div className="turn-arrow">
              <Arrow />
            </div>
            <div className="new-site">
              <div className="compare-meta">
                <div className="compare-tag">After · 2026</div>
                <span>Built for what’s next</span>
              </div>
              <div className="new-window">
                <div className="mini-browser">
                  <i />
                  <i />
                  <i />
                  <span>kinandco.com</span>
                  <b>Secure</b>
                </div>
                <div className="nw-nav">
                  <div className="nw-logo">
                    KIN<span>/</span>CO
                  </div>
                  <span>
                    Expertise &nbsp;&nbsp; Our team &nbsp;&nbsp; Insights
                  </span>
                  <button>Start a conversation ↗</button>
                </div>
                <div className="nw-hero">
                  <div className="nw-copy">
                    <small>Independent legal counsel · Berlin</small>
                    <h3>
                      Complex matters.
                      <br />
                      <i>Clear direction.</i>
                    </h3>
                    <p>
                      Commercial clarity for ambitious businesses and the people
                      behind them.
                    </p>
                    <button>
                      Explore our expertise <Arrow />
                    </button>
                  </div>
                  <div className="nw-art">
                    <div className="digital-grid" />
                    <div className="orb" />
                    <span className="case-pill">
                      98%<small>client retention</small>
                    </span>
                  </div>
                </div>
                <div className="nw-trust">
                  <span>Trusted by founders across Europe</span>
                  <b>HELIOS</b>
                  <b>NORTH/01</b>
                  <b>ATLAS®</b>
                </div>
                <div className="nw-cards">
                  <div>
                    <span>01</span>
                    <b>Corporate advisory</b>
                    <i>↗</i>
                  </div>
                  <div>
                    <span>02</span>
                    <b>Digital &amp; IP</b>
                    <i>↗</i>
                  </div>
                  <div>
                    <span>03</span>
                    <b>Dispute resolution</b>
                    <i>↗</i>
                  </div>
                </div>
              </div>
              <div className="compare-verdict">
                <strong>Clear</strong>
                <strong>Credible</strong>
                <strong>Ready to convert</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading reveal">
            <div>
              <span className="kicker">What we do</span>
              <h2>
                From first thought
                <br />
                to <i>first click.</i>
              </h2>
            </div>
            <p>
              One focused team, every discipline your digital presence needs.
            </p>
          </div>
          <div className="service-list">
            {[
              {
                n: "01",
                title: "Strategy & direction",
                summary:
                  "We find the clearest position for your business and turn it into a focused digital plan built around the people you want to reach.",
                items: [
                  "Discovery workshop",
                  "Customer journeys",
                  "Messaging & sitemap",
                ],
                outcome: "Clarity before pixels",
              },
              {
                n: "02",
                title: "Brand-led design",
                summary:
                  "We create a distinctive visual system and intuitive experience that makes your business feel credible, current, and unmistakably yours.",
                items: [
                  "Creative direction",
                  "Responsive UI/UX",
                  "Interactive prototype",
                ],
                outcome: "Recognition at every touchpoint",
              },
              {
                n: "03",
                title: "Modern development",
                summary:
                  "We build your approved design as a fast, accessible React experience that feels polished on every screen and is ready to grow.",
                items: [
                  "Responsive React build",
                  "SEO foundations",
                  "Analytics ready",
                ],
                outcome: "Performance without compromise",
              },
              {
                n: "04",
                title: "Launch & momentum",
                summary:
                  "We test every detail, prepare you to manage the site confidently, and stay close after launch while the first real visitors arrive.",
                items: [
                  "Cross-device QA",
                  "Team handover",
                  "30-day launch care",
                ],
                outcome: "A launch that keeps moving",
              },
            ].map((s, i) => (
              <div className="service reveal" key={s.n}>
                <span>{s.n}</span>
                <div className="service-content">
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <div className="service-tags">
                    {s.items.map((item) => (
                      <small key={item}>{item}</small>
                    ))}
                  </div>
                  <strong className="service-outcome">{s.outcome}</strong>
                </div>
                <i>{i === 3 ? "↗" : "+"}</i>
              </div>
            ))}
          </div>
        </section>

        <section className="process section-pad" id="process">
          <div className="process-intro reveal">
            <span className="kicker">How it works</span>
            <h2>
              No mystery.
              <br />
              No runaround.
              <br />
              <i>Just momentum.</i>
            </h2>
            <p>
              A clear, collaborative process that keeps you close to the work
              without taking you away from yours.
            </p>
          </div>
          <div className="process-steps">
            {[
              [
                "01",
                "Discover",
                "We listen, learn, and find the sharpest angle for your business.",
              ],
              [
                "02",
                "Define",
                "We turn insight into a clear strategy, story, and structure.",
              ],
              [
                "03",
                "Create",
                "Your new digital identity takes shape—thoughtfully and collaboratively.",
              ],
              [
                "04",
                "Launch",
                "We refine every detail, go live, and make sure you feel ready.",
              ],
            ].map((x, i) => (
              <div className="step reveal" key={x[0]}>
                <span>{x[0]}</span>
                <div className="step-icon">{["◎", "◇", "✦", "↗"][i]}</div>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonial section-pad reveal">
          <div className="quote-mark">“</div>
          <blockquote>
            They didn't just give us a prettier website. They made our business
            feel like the business we knew it could be.
          </blockquote>
          <div className="person">
            <div>AM</div>
            <p>
              <strong>Amina Malik</strong>
              <span>Founder, Northline Advisory</span>
            </p>
          </div>
        </section>

        <section className="team section-pad" id="team">
          <div className="team-heading reveal">
            <div>
              <span className="kicker">The people behind the work</span>
              <h2>
                Small team.
                <br />
                <i>Serious craft.</i>
              </h2>
            </div>
            <p>
              You work directly with the people shaping your strategy, designing
              your experience, and building your website.
            </p>
          </div>
          <div className="team-grid">
            {[
              {
                name: "Your Name",
                role: "Founder · Creative direction",
                bio: "Sets the vision, leads client strategy, and makes sure every project feels unmistakably yours.",
                image: "/team-placeholder-1.svg",
                code: "01",
              },
              {
                name: "Team Member",
                role: "Design · User experience",
                bio: "Turns complex ideas into clear, distinctive digital experiences people understand and enjoy.",
                image: "/team-placeholder-2.svg",
                code: "02",
              },
              {
                name: "Team Member",
                role: "Development · Technology",
                bio: "Builds fast, responsive React experiences with thoughtful interactions and meticulous details.",
                image: "/team-placeholder-3.svg",
                code: "03",
              },
            ].map((member) => (
              <article className="team-card reveal" key={member.code}>
                <div className="team-photo">
                  <img
                    src={member.image}
                    alt={`Portrait placeholder for ${member.name}`}
                  />
                  <span>{member.code} / 03</span>
                  <button aria-label={`Open ${member.name} profile`}>↗</button>
                </div>
                <div className="team-card-copy">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="team-note reveal">
            <span>Built around collaboration</span>
            <p>
              Lean by design, connected by craft. When a project calls for
              specialist photography, writing, or motion, we bring trusted
              collaborators into the team.
            </p>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-heading reveal">
            <div>
              <span className="kicker">Contact us · New project enquiries</span>
              <h2>
                Ready when
                <br />
                <i>you are.</i>
              </h2>
            </div>
            <div className="contact-intro">
              <span>01 / Start a conversation</span>
              <p>
                Tell us where your business is today and where you want it to
                go. We’ll reply within two working days with a clear, useful
                next step.
              </p>
            </div>
          </div>
          <div className="contact-facts reveal">
            <div>
              <span>Typical timeline</span>
              <strong>4–8 weeks</strong>
            </div>
            <div>
              <span>First response</span>
              <strong>Within 2 days</strong>
            </div>
            <div>
              <span>Working style</span>
              <strong>Berlin · Worldwide</strong>
            </div>
            <div>
              <span>First step</span>
              <strong>30-minute discovery call</strong>
            </div>
          </div>
          <div className="contact-layout">
            <div className="contact-aside reveal">
              <div className="availability">
                <i /> Currently taking on projects for Q4 2026
              </div>
              <div className="contact-method">
                <span>Email</span>
                <a href="mailto:hello@enostudio.co">hello@enostudio.co ↗</a>
              </div>
              <div className="contact-method">
                <span>Based in</span>
                <strong>Berlin · Working worldwide</strong>
              </div>
              <div className="contact-method">
                <span>Good to know</span>
                <strong>
                  No website yet? That’s completely fine. We’ll help you start
                  in the right place.
                </strong>
              </div>
              <div className="contact-promise">
                <Spark />
                <p>
                  No pressure and no generic sales deck. Just an honest
                  conversation about what would make the biggest difference to
                  your business.
                </p>
              </div>
            </div>
            <form
              className="contact-form reveal"
              action="mailto:hello@enostudio.co"
              method="post"
              encType="text/plain"
            >
              <div className="form-heading">
                <div>
                  <span>Project brief</span>
                  <strong>A few details to get us started.</strong>
                </div>
                <b>01 / 03</b>
              </div>
              <div className="field-row">
                <label>
                  <span>Your name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    required
                  />
                </label>
                <label>
                  <span>Business name</span>
                  <input
                    name="business"
                    type="text"
                    placeholder="Your company"
                    required
                  />
                </label>
              </div>
              <label>
                <span>Email address</span>
                <input
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                />
              </label>
              <label>
                <span>What do you need?</span>
                <select name="project" defaultValue="">
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option>My business needs its first website</option>
                  <option>My current website needs a redesign</option>
                  <option>I need a brand and a website</option>
                  <option>I’m not sure yet</option>
                </select>
              </label>
              <div className="field-row">
                <label>
                  <span>Ideal investment</span>
                  <select name="budget" defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option>€2,500–€5,000</option>
                    <option>€5,000–€10,000</option>
                    <option>€10,000+</option>
                    <option>I need guidance</option>
                  </select>
                </label>
                <label>
                  <span>Ideal launch</span>
                  <select name="timeline" defaultValue="">
                    <option value="" disabled>
                      Select timing
                    </option>
                    <option>As soon as practical</option>
                    <option>Within 2–3 months</option>
                    <option>Within 3–6 months</option>
                    <option>No fixed date</option>
                  </select>
                </label>
              </div>
              <label>
                <span>Tell us a little about the project</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="What does your business do, and what would you like the new website to achieve?"
                  required
                />
              </label>
              <div className="form-end">
                <small>
                  Submitting opens your email app. No data is stored on this
                  website.
                </small>
                <button type="submit">
                  Send enquiry <Arrow />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <a className="logo inverse" href="#top">
          <span className="brand-main">XIODE</span>
          <small>SOLUTIONS</small>
          <span className="logo-dot">●</span>
        </a>
        <p>Distinctive websites for ambitious businesses.</p>
        <div>
          <a href="mailto:hello@enostudio.co">hello@enostudio.co</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <small>© 2026 Xiode Solutions. Made with care.</small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
