import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Arrow = ({ down = false }) => <svg aria-hidden="true" viewBox="0 0 20 20"><path d={down ? "M10 3v13m-5-5 5 5 5-5" : "M4 10h12m-5-5 5 5-5 5"}/></svg>;
const Spark = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 1c.7 7 4.3 10.3 11 11-6.7.7-10.3 4-11 11-.7-7-4.3-10.3-11-11 6.7-.7 10.3-4 11-11Z"/></svg>;

const codeColumns = [
  ['import React from "react";','import { createRoot } from "react-dom/client";','const App = () => {','  const [ready, setReady] = useState(false);','  useEffect(() => setReady(true), []);','  return <Experience ready={ready} />;','};','createRoot(root).render(<App />);','export default App;'],
  ['function Hero({ message, action }) {','  return (','    <section className="hero">','      <Eyebrow>Independent studio</Eyebrow>','      <h1>{message}</h1>','      <Button onClick={action}>Start</Button>','    </section>','  );','}','const MemoHero = React.memo(Hero);'],
  ['const projects = useMemo(() => [','  { id: 1, title: "Arc & Form" },','  { id: 2, title: "Northline" },','  { id: 3, title: "Mysa" },',' ], []);','return projects.map(project => (','  <CaseStudy key={project.id} {...project} />',');','// component-driven by design'],
  ['const [active, setActive] = useState(0);','const next = useCallback(() => {','  setActive(index => (index + 1) % 3);','}, []);','<button onClick={next}>','  Next project <Arrow />','</button>','<BrowserMockup project={projects[active]} />','// state becomes interaction'],
  ['const ThemeContext = createContext(null);','function ThemeProvider({ children }) {','  const value = { mode: "future", signal: "#1557ff" };','  return (','    <ThemeContext.Provider value={value}>','      {children}','    </ThemeContext.Provider>','  );','}','const theme = useContext(ThemeContext);'],
  ['function useInView(ref) {','  const [visible, setVisible] = useState(false);','  useEffect(() => {','    const observer = new IntersectionObserver(','      ([entry]) => setVisible(entry.isIntersecting)','    );','    observer.observe(ref.current);','    return () => observer.disconnect();','  }, [ref]);','  return visible;','}'],
  ['const ContactForm = () => {','  const [form, setForm] = useState(initialState);','  const handleChange = event => {','    setForm({ ...form, [event.target.name]: event.target.value });','  };','  return <form onSubmit={handleSubmit}>','    <Input value={form.email} onChange={handleChange} />','    <button type="submit">Send enquiry</button>','  </form>;','};'],
  ['const Team = ({ people }) => (','  <div className="team-grid">','    {people.map(({ name, role, image }) => (','      <article key={name}>','        <img src={image} alt={name} />','        <h3>{name}</h3>','        <p>{role}</p>','      </article>','    ))}','  </div>',');'],
  ['const LazyPortfolio = lazy(() => import("./Portfolio"));','function Page() {','  return (','    <Suspense fallback={<Loader />}>','      <Navigation />','      <LazyPortfolio />','      <Process steps={steps} />','      <Team people={team} />','      <Contact />','    </Suspense>','  );','}'],
  ['const performance = {','  responsive: true,','  accessible: true,','  fast: true,','};','<Layout {...performance}>','  <Strategy />','  <Interface />','  <Development framework="React" />','</Layout>','// build something worth remembering']
];

function SectionCode({ index = 0, file = 'App.jsx' }) {
  const firstBlock = [...codeColumns[index % codeColumns.length], ...codeColumns[(index + 1) % codeColumns.length], ...codeColumns[index % codeColumns.length], ...codeColumns[(index + 2) % codeColumns.length], ...codeColumns[(index + 1) % codeColumns.length], ...codeColumns[(index + 3) % codeColumns.length]];
  const secondBlock = [...codeColumns[(index + 3) % codeColumns.length], ...codeColumns[(index + 4) % codeColumns.length], ...codeColumns[(index + 3) % codeColumns.length], ...codeColumns[(index + 5) % codeColumns.length], ...codeColumns[(index + 4) % codeColumns.length], ...codeColumns[(index + 6) % codeColumns.length]];
  const renderBlock = (lines, side) => <div className={`code-file code-file-${side}`}>
    <div className="code-file-tab"><i/> src / components / <strong>{file}</strong><span>React</span></div>
    <div className="code-file-body">{lines.map((line, lineIndex) => <div className={`code-editor-line ${lineIndex % 11 === 5 ? 'is-typing' : ''}`} key={`${side}-${lineIndex}`}><b>{String(lineIndex + 1).padStart(2,'0')}</b><code>{line}</code></div>)}</div>
  </div>;
  return <div className="section-code" aria-hidden="true">{renderBlock(firstBlock, 'left')}{renderBlock(secondBlock, 'right')}<div className="editor-scan"/></div>
}

const projects = [
  { id:'arc', n:'01', title:'Arc & Form', type:'Architecture studio', tone:'sand', line:'Space, shaped with intent.', year:'2026', scope:'Strategy · Portfolio · Development', summary:'A quiet, image-led portfolio that gives the studio’s work room to breathe and turns considered browsing into serious project enquiries.', stat:'+184%', statLabel:'project enquiries', secondStat:'3.1×', secondLabel:'longer visits' },
  { id:'northline', n:'02', title:'Northline', type:'Independent finance', tone:'blue', line:'Clarity for the road ahead.', year:'2026', scope:'Positioning · UX · Lead generation', summary:'A precise digital platform that makes complex financial guidance feel accessible, human, and immediately credible.', stat:'2.4×', statLabel:'qualified leads', secondStat:'-38%', secondLabel:'bounce rate' },
  { id:'mysa', n:'03', title:'Mysa', type:'Wellness & skincare', tone:'rose', line:'Rituals for real life.', year:'2025', scope:'E-commerce · Booking · Brand system', summary:'A tactile commerce and booking experience designed around daily rituals, expert guidance, and effortless product discovery.', stat:'+71%', statLabel:'online bookings', secondStat:'+46%', secondLabel:'cart value' },
];

function BrowserMockup({ project, active = false }) {
  return <div className={`browser ${project.tone} ${active ? 'active' : ''}`}>
    <div className="browser-bar"><i/><i/><i/><span>{project.title.toLowerCase().replaceAll(' ','')}.com</span></div>
    {project.id === 'arc' && <div className="case-screen arc-screen">
      <div className="case-nav"><b>ARC<span>+</span>FORM</b><span>Projects &nbsp;&nbsp; Studio &nbsp;&nbsp; Journal</span><button>Enquire ↗</button></div>
      <div className="arc-hero"><div className="case-copy"><small>Architecture / Urbanism / Interiors</small><h3>Space, shaped<br/>with intent.</h3><p>We design enduring spaces where material, light, and daily life find their balance.</p><button>View selected projects <Arrow/></button></div><div className="arc-visual"><div className="arc-building"><i/><i/><i/><i/></div><span>Haus 07 · Berlin</span></div></div>
      <div className="arc-projects"><span>Selected work</span><div><i>01</i><b>Atelier N</b><small>Berlin · 2025</small></div><div><i>02</i><b>Casa Lumen</b><small>Lisbon · 2024</small></div></div>
    </div>}
    {project.id === 'northline' && <div className="case-screen north-screen">
      <div className="case-nav"><b>NORTH<span>/</span>LINE</b><span>Our approach &nbsp;&nbsp; Expertise &nbsp;&nbsp; Insights</span><button>Speak to an adviser ↗</button></div>
      <div className="north-hero"><div className="case-copy"><div className="live-pill"><i/> Independent advice · Clear thinking</div><h3>Make your next move<br/><em>with confidence.</em></h3><p>Evidence-led financial planning for founders, families, and everything they are building.</p><button>Plan your first conversation <Arrow/></button><div className="north-trust"><b>£1.2B</b><span>assets advised</span><b>18 yrs</b><span>average relationship</span></div></div><div className="north-panel"><div className="panel-top"><span>Portfolio outlook</span><b>Live</b></div><strong>+12.8%</strong><small>Projected long-term growth</small><svg viewBox="0 0 300 120"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4f82ff" stopOpacity=".5"/><stop offset="1" stopColor="#4f82ff" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0 105 C40 95,40 80,75 85 S115 53,145 62 S190 25,220 41 S263 10,300 14 L300 120 L0 120Z"/><path className="chart-line" d="M0 105 C40 95,40 80,75 85 S115 53,145 62 S190 25,220 41 S263 10,300 14"/></svg><div className="allocation"><span><i/>Global equity 62%</span><span><i/>Fixed income 24%</span><span><i/>Alternatives 14%</span></div></div></div>
      <div className="north-bar"><span>Trusted thinking for complex lives.</span><b>For founders</b><b>For families</b><b>For the future</b></div>
    </div>}
    {project.id === 'mysa' && <div className="case-screen mysa-screen">
      <div className="case-nav"><b>mýsa</b><span>Shop &nbsp;&nbsp; Treatments &nbsp;&nbsp; Skin journal</span><button>Book a treatment</button></div>
      <div className="mysa-hero"><div className="case-copy"><small>Considered care · Made personal</small><h3>Rituals for<br/><em>real life.</em></h3><p>High-performance skincare and thoughtful treatments, shaped around you.</p><div><button>Shop the collection</button><a>Meet your skin ↗</a></div></div><div className="mysa-product"><div className="product-glow"/><div className="bottle"><span>mýsa</span><small>daily<br/>renewal<br/>serum</small><i>30 ml</i></div><span className="product-note">01 / Hydrate + restore</span></div></div>
      <div className="mysa-bottom"><div><span>01</span><b>Skin consultation</b><small>Start with an expert</small></div><div><span>02</span><b>Your daily ritual</b><small>Built for your skin</small></div><div className="review"><b>“My skin finally makes sense.”</b><span>★★★★★ &nbsp; 4.9 from 680 reviews</span></div></div>
    </div>}
  </div>
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap">
    <a className="logo" href="#top" aria-label="Eno Studio home">e<span>n</span>o<span className="logo-dot">●</span></a>
    <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}>
      <a href="#about">Why us</a><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#team">Team</a><a href="#contact">Contact</a>
    </nav>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu"><span/><span/></button>
  </header>
}

function App() {
  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('seen')), {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  return <div id="top" className={scrolled ? 'page scrolled' : 'page'}>
    <Header />
    <main>
      <section className="hero">
        <SectionCode index={0} file="Hero.jsx" />
        <div className="eyebrow reveal"><span/> Independent web design studio · Europe / Worldwide</div>
        <h1 className="reveal">Your business<br/>deserves <em>better.</em></h1>
        <div className="hero-bottom reveal">
          <p>We turn overlooked businesses into unforgettable brands with websites that earn trust, spark interest, and move people to act.</p>
          <a className="circle-link" href="#work"><span>See our work</span><Arrow down /></a>
        </div>
        <div className="hero-ribbon" aria-hidden="true"><span>Strategy</span><Spark/><span>Interface design</span><Spark/><span>React development</span><Spark/><span>Digital growth</span></div>
      </section>

      <section className="manifesto section-pad reveal" id="about">
        <SectionCode index={1} file="WhyUs.jsx" />
        <div className="section-label">The honest truth <span>↓</span></div>
        <div className="manifesto-copy">
          <p className="muted">Your website is often the first conversation your business has.</p>
          <p>If it feels dated, confusing, or simply doesn't exist, your best customers may never start the second one.</p>
        </div>
        <div className="proof-row">
          <div><strong>0.05<sup>s</sup></strong><span>to make a first impression</span></div>
          <div><strong>75<sup>%</sup></strong><span>judge credibility by design</span></div>
          <div><strong>24/7</strong><span>your best salesperson works</span></div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <SectionCode index={2} file="Portfolio.jsx" />
        <div className="section-heading reveal"><div><span className="kicker">Selected transformations</span><h2>Built to be<br/><i>remembered.</i></h2></div><p>A glimpse of what becomes possible when strategy, story, and meticulous design meet.</p></div>
        <div className="project-stage reveal">
          <div className="project-info">
            <span className="project-count">{projects[current].n} / 03</span>
            <div className="project-title"><h3>{projects[current].title}</h3><p>{projects[current].type}</p></div>
            <p className="project-summary">{projects[current].summary}</p>
            <div className="project-details"><div><span>Scope</span><strong>{projects[current].scope}</strong></div><div><span>Launch</span><strong>{projects[current].year}</strong></div></div>
            <div className="project-results"><div><strong>{projects[current].stat}</strong><span>{projects[current].statLabel}</span></div><div><strong>{projects[current].secondStat}</strong><span>{projects[current].secondLabel}</span></div></div>
            <div className="project-controls">
              <button onClick={() => setCurrent((current + 2) % 3)} aria-label="Previous project">←</button>
              <button onClick={() => setCurrent((current + 1) % 3)} aria-label="Next project">→</button>
            </div>
          </div>
          <BrowserMockup project={projects[current]} active />
        </div>
        <div className="project-tabs reveal">{projects.map((p,i) => <button key={p.title} className={i===current?'active':''} onClick={() => setCurrent(i)}><span>{p.n}</span>{p.title}</button>)}</div>
      </section>

      <section className="contrast section-pad reveal">
        <SectionCode index={3} file="Transformation.jsx" />
        <div className="contrast-head"><span className="kicker">A tale of two websites</span><h2>Same business.<br/><i>Different future.</i></h2></div>
        <div className="compare">
          <div className="old-site">
            <div className="compare-meta"><div className="compare-tag">Before · 2011</div><span>Lost in the past</span></div>
            <div className="old-window">
              <div className="mini-browser"><i/><i/><i/><span>kinandco-legal.com/home.html</span></div>
              <div className="old-brand">KIN &amp; CO. SOLICITORS <small>Est. 1987</small></div>
              <div className="old-links">HOME | ABOUT US | OUR SERVICES | NEWS | CONTACT US</div>
              <div className="old-marquee">*** WELCOME TO OUR WEBSITE — QUALITY LEGAL ADVICE AT AFFORDABLE RATES ***</div>
              <div className="old-grid">
                <aside><b>OUR SERVICES</b><a>Commercial Law</a><a>Property</a><a>Family Law</a><a>Wills &amp; Probate</a><div className="visitor">You are visitor<br/><strong>001842</strong></div></aside>
                <div className="old-main"><div className="broken-image"><span>×</span> image_hero_final2.jpg</div><h4>WELCOME TO KIN &amp; CO.</h4><p>We are a leading provider of quality legal services. Our experienced team can assist you with all your legal needs.</p><button>CLICK HERE TO READ MORE &gt;&gt;</button></div>
              </div>
              <div className="old-footer">Copyright © 2011 Kin &amp; Co. | Best viewed in Internet Explorer 8</div>
            </div>
            <div className="compare-verdict"><strong>Confusing</strong><strong>Generic</strong><strong>Easy to leave</strong></div>
          </div>
          <div className="turn-arrow"><Arrow /></div>
          <div className="new-site">
            <div className="compare-meta"><div className="compare-tag">After · 2026</div><span>Built for what’s next</span></div>
            <div className="new-window">
              <div className="mini-browser"><i/><i/><i/><span>kinandco.com</span><b>Secure</b></div>
              <div className="nw-nav"><div className="nw-logo">KIN<span>/</span>CO</div><span>Expertise &nbsp;&nbsp; Our team &nbsp;&nbsp; Insights</span><button>Start a conversation ↗</button></div>
              <div className="nw-hero">
                <div className="nw-copy"><small>Independent legal counsel · Berlin</small><h3>Complex matters.<br/><i>Clear direction.</i></h3><p>Commercial clarity for ambitious businesses and the people behind them.</p><button>Explore our expertise <Arrow /></button></div>
                <div className="nw-art"><div className="digital-grid"/><div className="orb"/><span className="case-pill">98%<small>client retention</small></span></div>
              </div>
              <div className="nw-trust"><span>Trusted by founders across Europe</span><b>HELIOS</b><b>NORTH/01</b><b>ATLAS®</b></div>
              <div className="nw-cards"><div><span>01</span><b>Corporate advisory</b><i>↗</i></div><div><span>02</span><b>Digital &amp; IP</b><i>↗</i></div><div><span>03</span><b>Dispute resolution</b><i>↗</i></div></div>
            </div>
            <div className="compare-verdict"><strong>Clear</strong><strong>Credible</strong><strong>Ready to convert</strong></div>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <SectionCode index={4} file="Services.jsx" />
        <div className="section-heading reveal"><div><span className="kicker">What we do</span><h2>From first thought<br/>to <i>first click.</i></h2></div><p>One focused team, every discipline your digital presence needs.</p></div>
        <div className="service-list">
          {[
            ['01','Strategy & direction','Positioning · User journeys · Content architecture'],
            ['02','Brand-led design','Visual identity · UI/UX · Art direction'],
            ['03','Modern development','React · Responsive build · Performance'],
            ['04','Launch & momentum','Testing · Training · Ongoing care']
          ].map((s,i)=><div className="service reveal" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><i>{i===3?'↗':'+'}</i></div>)}
        </div>
      </section>

      <section className="process section-pad" id="process">
        <SectionCode index={5} file="Process.jsx" />
        <div className="process-intro reveal"><span className="kicker">How it works</span><h2>No mystery.<br/>No runaround.<br/><i>Just momentum.</i></h2><p>A clear, collaborative process that keeps you close to the work without taking you away from yours.</p></div>
        <div className="process-steps">
          {[['01','Discover','We listen, learn, and find the sharpest angle for your business.'],['02','Define','We turn insight into a clear strategy, story, and structure.'],['03','Create','Your new digital identity takes shape—thoughtfully and collaboratively.'],['04','Launch','We refine every detail, go live, and make sure you feel ready.']].map((x,i)=><div className="step reveal" key={x[0]}><span>{x[0]}</span><div className="step-icon">{['◎','◇','✦','↗'][i]}</div><h3>{x[1]}</h3><p>{x[2]}</p></div>)}
        </div>
      </section>

      <section className="testimonial section-pad reveal">
        <SectionCode index={6} file="Testimonial.jsx" />
        <div className="quote-mark">“</div><blockquote>They didn't just give us a prettier website. They made our business feel like the business we knew it could be.</blockquote><div className="person"><div>AM</div><p><strong>Amina Malik</strong><span>Founder, Northline Advisory</span></p></div>
      </section>

      <section className="team section-pad" id="team">
        <SectionCode index={7} file="Team.jsx" />
        <div className="team-heading reveal"><div><span className="kicker">The people behind the work</span><h2>Small team.<br/><i>Serious craft.</i></h2></div><p>You work directly with the people shaping your strategy, designing your experience, and building your website.</p></div>
        <div className="team-grid">
          {[
            {name:'Ensar Cölkesen', role:'Founder · Creative direction', bio:'Sets the vision, leads client strategy, and makes sure every project feels unmistakably yours.', image:'/me.jpg', code:'01'},
            {name:'Imad Jarouy', role:'Design · User experience', bio:'Turns complex ideas into clear, distinctive digital experiences people understand and enjoy.', image:'/imad.jpg', code:'02'},
            {name:'Berkan Cayir', role:'Development · Technology', bio:'Builds fast, responsive React experiences with thoughtful interactions and meticulous details.', image:'/berkan.JPG', code:'03'}
          ].map(member => <article className="team-card reveal" key={member.code}>
            <div className="team-photo"><img src={member.image} alt={`Portrait placeholder for ${member.name}`}/><span>{member.code} / 03</span><button aria-label={`Open ${member.name} profile`}>↗</button></div>
            <div className="team-card-copy"><h3>{member.name}</h3><span>{member.role}</span><p>{member.bio}</p></div>
          </article>)}
        </div>
        <div className="team-note reveal"><span>Built around collaboration</span><p>Lean by design, connected by craft. When a project calls for specialist photography, writing, or motion, we bring trusted collaborators into the team.</p></div>
      </section>

      <section className="contact section-pad" id="contact">
        <SectionCode index={8} file="ContactForm.jsx" />
        <div className="contact-heading reveal"><div><span className="kicker">Contact us</span><h2>Ready when<br/><i>you are.</i></h2></div><p>Tell us where your business is today and where you want it to go. We’ll reply within two working days with a clear next step.</p></div>
        <div className="contact-layout">
          <div className="contact-aside reveal">
            <div className="availability"><i/> Currently taking on projects for Q4 2026</div>
            <div className="contact-method"><span>Email</span><a href="mailto:hello@enostudio.co">hello@enostudio.co ↗</a></div>
            <div className="contact-method"><span>Based in</span><strong>Berlin · Working worldwide</strong></div>
            <div className="contact-method"><span>Good to know</span><strong>No website yet? That’s completely fine. We’ll help you start in the right place.</strong></div>
          </div>
          <form className="contact-form reveal" action="mailto:hello@enostudio.co" method="post" encType="text/plain">
            <div className="field-row"><label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" required/></label><label><span>Business name</span><input name="business" type="text" placeholder="Your company" required/></label></div>
            <label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" required/></label>
            <label><span>What do you need?</span><select name="project" defaultValue=""><option value="" disabled>Select a project type</option><option>My business needs its first website</option><option>My current website needs a redesign</option><option>I need a brand and a website</option><option>I’m not sure yet</option></select></label>
            <label><span>Tell us a little about the project</span><textarea name="message" rows="4" placeholder="What does your business do, and what would you like the new website to achieve?" required/></label>
            <div className="form-end"><small>Submitting opens your email app. No data is stored on this website.</small><button type="submit">Send enquiry <Arrow/></button></div>
          </form>
        </div>
      </section>
    </main>
    <footer><a className="logo inverse" href="#top">e<span>n</span>o<span className="logo-dot">●</span></a><p>Distinctive websites for ambitious businesses.</p><div><a href="mailto:hello@enostudio.co">hello@enostudio.co</a><a href="#top">Back to top ↑</a></div><small>© 2026 Eno Studio. Made with care.</small></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
