// Calistenix — main app
const { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FFFFFF",
  "theme": "forest",
  "texture": "grain",
  "density": "airy",
  "heroVariant": "split",
  "fontPair": "heebo-archivo"
} /*EDITMODE-END*/;

// full-site background themes (sheet + ink + frame)
const THEMES = {
  bone: { label: "בז׳ (Bone)", paper: "#ECEAE2", ink: "#0E0E0C", backdrop: "#17160F", dark: false },
  white: { label: "לבן נקי (White)", paper: "#F7F5F0", ink: "#0E0E0C", backdrop: "#1A1A17", dark: false },
  sand: { label: "חול (Sand)", paper: "#E6DAC4", ink: "#1B1408", backdrop: "#1B1408", dark: false },
  concrete: { label: "בטון (Concrete)", paper: "#D8D9D4", ink: "#15160F", backdrop: "#15160F", dark: false },
  ink: { label: "דיו (Ink)", paper: "#0E0E0C", ink: "#ECEAE2", backdrop: "#000000", dark: true },
  blueprint: { label: "בלופרינט (Blueprint)", paper: "#0F1A2B", ink: "#DCE7FA", backdrop: "#060B14", dark: true },
  forest: { label: "זית (Olive)", paper: "#1A1F12", ink: "#E8EBD8", backdrop: "#0C0F08", dark: true }
};

const ACCENTS = [
"#D6FF3F", // sulfur lime
"#C6FF00", // acid green
"#FF5A1F", // hazard orange
"#FF3D6E", // alert pink
"#FF2D2D", // signal red
"#2D5BFF", // signal blue
"#00E0C7", // cyan
"#B388FF", // violet
"#FF8A00", // amber
"#FFFFFF" // paper white
];

// choose legible ink (black/white) against any accent via luminance
function inkFor(hex) {
  const h = (hex || "").replace("#", "");
  if (h.length < 6) return "#0E0E0C";
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#0E0E0C" : "#ECEAE2";
}

/* ───────── Section header ───────── */
function Strip({ num, title, en, meta }) {
  return (
    <div className="strip">
      <div className="strip-num">{num}</div>
      <div className="strip-title">
        <span>{title} <span style={{ opacity: 0.4, marginInlineStart: 8 }}>/ {en}</span></span>
      </div>
      <div className="strip-meta">{meta}</div>
    </div>);

}

/* ───────── Nav ───────── */
function Nav() {
  return (
    <nav className="nav rule-b">
      <div className="nav-left">
        <a href="#course" className="nav-link">הקורס</a>
        <a href="#skills" className="nav-link">מיומנויות</a>
        <a href="#about" className="nav-link">משה</a>
        <a href="#pricing" className="nav-link">מחיר</a>
      </div>
      <div className="nav-mark">CALISTENIX</div>
      <div className="nav-right">
        <span className="mono nav-status" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span className="live-dot" />
          הרשמה פתוחה · קורס יוני 26
        </span>
        <a href="#contact" className="btn btn--fill" style={{ padding: "10px 16px", fontSize: 12, color: "rgb(255, 255, 255)", backgroundColor: "rgb(160, 175, 82)" }} data-comment-anchor="3f17df5c02-a-65-9">
          הרשמה לקורס <span className="arrow">→</span>
        </a>
      </div>
    </nav>);

}

/* ───────── Hero ───────── */
function Hero({ variant }) {
  if (variant === "stack") {
    return (
      <section className="hero">
        <div className="eyebrow">קורס קליסטניקס · 8 מפגשים · עם משה</div>
        <h1 className="display head" style={{ marginTop: 28 }}>
          <div>תתחיל.</div>
          <div className="alt">תתמיד.</div>
          <div><span className="mark">תעוף.</span></div>
        </h1>
        <p className="sub">
          קורס קליסטניקס בן 8 מפגשים שבונה כוח אמיתי, שליטה גופנית וטכניקה —
          צעד אחר צעד, מהיסודות ועד התרגילים שכולם רוצים לעשות.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" className="btn btn--accent">הרשמה לקורס <span className="arrow">→</span></a>
          <a href="#course" className="btn">מבנה הקורס</a>
        </div>
        <HeroMeta />
      </section>);

  }
  // default "split" — type on the right, photo on the left (RTL)
  return (
    <section className="hero grid12" style={{ padding: 0 }}>
      <div style={{ gridColumn: "span 8", padding: "56px var(--pad)" }}>
        <div className="eyebrow">קורס קליסטניקס · יוני 2026 · הרשמה פתוחה</div>
        <h1 className="display head">
          <div>כוח.</div>
          <div className="alt">שליטה.</div>
          <div><span className="mark">תנועה.</span></div>
        </h1>
        <p className="sub">
          קורס קליסטניקס בן 8 מפגשים עם משה. תוכנית הדרגתית שבונה כוח אמיתי,
          שליטה גופנית וטכניקה — לא לחזור על תרגילים, להתקדם בהם.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" className="btn btn--accent">הרשמה לקורס <span className="arrow">→</span></a>
          <a href="#course" className="btn">מבנה הקורס</a>
        </div>
      </div>
      <div style={{
        gridColumn: "span 4",
        borderInlineStart: "var(--rule-w) solid var(--rule)",
        padding: "var(--pad)",
        display: "flex", flexDirection: "column", gap: "var(--pad)"
      }}>
        <div className="hero-photo">
          <img className="media-fill" src="uploads/moshe.jpeg" alt="עמידת ידיים במדבר" />
        </div>
        <div style={{ borderTop: "var(--rule-w) solid var(--rule)", paddingTop: 16 }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", opacity: 0.6, textTransform: "uppercase" }}>
            פרוטוקול / METHOD
          </div>
          <div style={{ fontFamily: "Heebo", fontWeight: 900, fontSize: 22, lineHeight: 1.1, marginTop: 8, letterSpacing: "-0.02em" }}>
            פרוגרסיה. טכניקה. עקביות.
          </div>
          <div className="mono" style={{ fontSize: 11, lineHeight: 1.6, opacity: 0.7, marginTop: 10 }}>
            08 מפגשים. 04 שבועות. שיטה אחת.
          </div>
        </div>
      </div>
      <div style={{ gridColumn: "span 12" }}>
        <HeroMeta />
      </div>
    </section>);

}
function HeroMeta() {
  return (
  <div class="hero-meta">
  <div class="item">
    <div class="k">מפגשים</div>
    <div class="v">08</div>
  </div>
  <div class="item">
    <div class="k">משך מפגש</div>
    <div class="v">60'</div>
  </div>
  
  <div class="item">
    <div class="k">פעמיים בשבוע</div>
    <div class="v">בערב</div>
  </div>
  <div class="item">
    <div class="k">גילאים</div>
    <div class="v">13 - 16</div>
  </div>
  
  <div class="item full-width">
    <div class="k">קבוצה</div>
    <div class="v">עד 10</div>
  </div>
</div>);

}

/* ───────── Marquee ───────── */
function Marquee() {
  const items = window.MARQUEE.concat(window.MARQUEE);
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>{items.map((s, i) => <span key={i}>{s}</span>)}</span>
        <span>{items.map((s, i) => <span key={"b" + i}>{s}</span>)}</span>
      </div>
    </div>);

}

/* ───────── Skill Tree ───────── */
function SkillTree() {
  return (
    <section id="skills">
      <Strip num="02" title="עץ המיומנויות" en="SKILL TREE" meta="פרוגרסיה הדרגתית · 5 מסלולים · 40 שלבים" />
      <div className="tree-grid">
        {window.SKILL_TREE.map((col) =>
        <div className="tree-col" key={col.cat}>
            <div className="tree-col-head">
              <div className="cat">{col.cat} / 08</div>
              <div className="name-he">{col.he}</div>
              <div className="name" style={{ opacity: 0.4, fontSize: 13, marginTop: 4, letterSpacing: "0.15em" }}>{col.en}</div>
            </div>
            {col.skills.map((s, i) =>
          <div className={`skill ${s.state}`} key={i}>
                <div className="lvl">{s.lvl}</div>
                <div className="nm">{s.he}<small>{s.en}</small></div>
                <div className="dot" />
              </div>
          )}
          </div>
        )}
      </div>
      <div className="rule-x" style={{
        display: "flex", justifyContent: "space-between", padding: "14px var(--pad)",
        fontFamily: "JetBrains Mono", fontSize: 11, letterSpacing: "0.12em", opacity: 0.7
      }}>
        <span>● הושלם &nbsp;&nbsp; ◐ בתהליך &nbsp;&nbsp; ○ עתיד</span>
        <span>גרסה 2026.1 · עודכן 05/2026</span>
      </div>
    </section>);

}

/* ───────── Programs ───────── */
function Programs() {
  return (
    <section id="course">
      <Strip num="03" title="מבנה הקורס" en="COURSE" meta="8 מפגשים · 4 שבועות · 60 דקʳ למפגש" />
      <div className="course-grid">
        {window.COURSE.map((s) =>
        <div className="course-cell" key={s.num}>
            <div className="ssn">מפגש {s.num}</div>
            <div className="num">{s.num}</div>
            <h4>{s.he}</h4>
            <div className="en">{s.en}</div>
            <div className="desc">{s.desc}</div>
          </div>
        )}
      </div>
      <div className="course-cta rule-b">
        <div className="lead">
          הקורס המלא — מהיסוד ועד התרגילים המתקדמים.
          <small>קבוצה קטנה · עד 6 מתאמנים · יחס אישי לכל אחד</small>
        </div>
        <a href="#contact" className="btn btn--accent">הרשמה לקורס <span className="arrow">→</span></a>
      </div>
    </section>);

}

/* ───────── About ───────── */
function About() {
  return (
    <section id="about">
      <Strip num="04" title="משה" en="THE COACH" meta="בן 17 · קליסטניקס · אתלט צעיר" />
      <div className="about">
        <div className="photo-wrap">
          <div className="photo">
            <video className="media-fill" src="uploads/moshe-video-1.mp4" autoPlay muted loop playsInline></video>
          </div>
        </div>
        <div className="body">
          <div className="eyebrow" style={{ marginBottom: 12 }}>היכרות / 04 · 01</div>
          <h2>
            בן 17.<br />
            כבר שם למעלה.
          </h2>
          <p>
            אני משה, בן 17, ומתאמן קליסטניקס כבר כמה שנים. התחלתי משכיבות סמיכה
            בפארק והגעתי עם הזמן למאסל-אפ, עמידת ידיים ושליטה מלאה בגוף — הכל בכוח עצמי, בלי חדר כושר.
          </p>
          <p>
            השיטה שלי פשוטה: טכניקה נקייה לפני כוח, ופרוגרסיה הדרגתית שמתאימה לכל אחד.
            בקורס אני לוקח אתכם מההתחלה — גם אם מעולם לא עשיתם שכיבת סמיכה אחת.
          </p>
      </div>
    </section>);

}

/* ───────── Pricing ───────── */
function Pricing() {
  return (
    <section id="pricing">
      <Strip num="05" title="מחיר הקורס" en="PRICING" meta="₪ · שקלים · כולל הכל" />
      <div className="pricing-wrap" style={{ padding: 0 }}>
        <table className="pricing-table">
          <thead>
            <tr>
              <th style={{ width: "34%" }}>מסלול / OPTION</th>
              <th>פרטים</th>
              <th>מחיר</th>
              <th>למפגש</th>
            </tr>
          </thead>
          <tbody>
            {window.PRICING_ROWS.map((r, i) =>
            <tr key={i} className={r.hi ? "hi" : ""}>
                <td>
                  <div style={{ fontWeight: 700 }}>{r.he}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", opacity: 0.55, textTransform: "uppercase", marginTop: 2 }}>{r.en}</div>
                </td>
                <td className="mono" style={{ fontSize: 12 }}>{r.note}</td>
                <td className="num">{r.price}</td>
                <td className="mono" style={{ fontSize: 12, opacity: 0.75 }}>{r.per}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pricing-note">
          * הרשמה מוקדמת מוגבלת ל-3 הראשונים · תשלום בביט / אשראי / מזומן · אפשר לפרוס לתשלומים
        </div>
      </div>
    </section>);

}

/* ───────── Contact ───────── */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact">
      <Strip num="06" title="צור קשר" en="GET IN TOUCH" meta="תגובה תוך 24 שעות" />
      <div className="contact">
        <div className="info">
          <div className="eyebrow" style={{ marginBottom: 24 }}>הרשמה לקורס / שאלות</div>
          <h2>
            דבר<br />
            עם משה.
          </h2>
          <div className="row"><div className="k">WHATSAPP</div><div className="v">050-000-0000</div></div>
          <div className="row"><div className="k">EMAIL</div><div className="v">moshe@calistenix.com</div></div>
          <div className="row"><div className="k">INSTAGRAM</div><div className="v">@moshe.calisthenics</div></div>
          <div className="row"><div className="k">מיקום</div><div className="v">פארק / מתקן שכונתי</div></div>
          <div className="row"><div className="k">מחזור הבא</div><div className="v">יוני 2026 · הרשמה פתוחה</div></div>
        </div>
        <div>
          {sent ?
          <div style={{ padding: "var(--pad)" }}>
              <div className="submitted">
                <span style={{ fontFamily: "Archivo Black", fontSize: 22 }}>✓</span>
                <div>
                  ההודעה נשלחה. אחזור אליך תוך 24 שעות.
                  <div className="mono" style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>REF-{Math.floor(Math.random() * 900000 + 100000)}</div>
                </div>
              </div>
              <button onClick={() => setSent(false)} className="btn" style={{ marginTop: 18 }}>
                שלח עוד הודעה <span className="arrow">→</span>
              </button>
            </div> :

          <form className="form" onSubmit={(e) => {e.preventDefault();setSent(true);}}>
              <div className="row">
                <div className="field"><label>שם מלא</label><input required type="text" placeholder="ישראל ישראלי" /></div>
                <div className="field"><label>גיל</label><input type="number" placeholder="28" /></div>
              </div>
              <div className="row">
                <div className="field"><label>אימייל</label><input required type="email" placeholder="you@example.com" /></div>
                <div className="field"><label>טלפון</label><input type="tel" placeholder="050-000-0000" /></div>
              </div>
              <div className="row">
                <div className="field">
                  <label>רמת ניסיון</label>
                  <select defaultValue="">
                    <option value="" disabled>בחר רמה</option>
                    <option>מתחיל לחלוטין</option>
                    <option>מתאמן בסיסי</option>
                    <option>מתקדם</option>
                    <option>ספורטאי</option>
                  </select>
                </div>
                <div className="field">
                  <label>מסלול מועדף</label>
                  <select defaultValue="">
                    <option value="" disabled>בחר מסלול</option>
                    <option>הרשמה מוקדמת — ₪590</option>
                    <option>קורס מלא — ₪690</option>
                    <option>הרשמה בזוג</option>
                    <option>מפגש ניסיון — ₪90</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>מטרה / שאלה</label>
                <textarea placeholder="ספר לי קצת עליך — מה תרצה להשיג בקורס?"></textarea>
              </div>
              <div className="form-actions">
                <span className="legal">בלחיצה אני מאשר/ת קבלת פנייה חוזרת</span>
                <button type="submit" className="btn btn--accent">שלח <span className="arrow">→</span></button>
              </div>
            </form>
          }
        </div>
      </div>
    </section>);

}

/* ───────── Footer ───────── */
function Foot() {
  return (
    <footer className="foot-wrap rule-x">
      <div className="foot">
        <div>© 2026 CALISTENIX · כל הזכויות שמורות</div>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" style={{ color: "inherit" }}>פרטיות</a>
          <a href="#" style={{ color: "inherit" }}>תנאים</a>
          <a href="#" style={{ color: "inherit" }}>FAQ</a>
        </div>
        <div style={{ textAlign: "end" }}>נבנה בתל אביב · v2026.1</div>
      </div>
      <div className="big">CALISTENIX</div>
    </footer>);

}

/* ───────── App ───────── */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply tweaks to :root
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", t.accent);
    // pick legible ink against accent (works for any custom color)
    r.style.setProperty("--accent-ink", inkFor(t.accent));
    // apply full-site background theme
    const th = THEMES[t.theme] || THEMES.bone;
    r.style.setProperty("--paper", th.paper);
    r.style.setProperty("--ink", th.ink);
    r.style.setProperty("--rule", th.ink);
    r.style.setProperty("--backdrop", th.backdrop);
    document.body.dataset.density = t.density;
    document.body.dataset.mode = th.dark ? "ink" : "paper";
    document.body.dataset.texture = t.texture;
  }, [t.accent, t.density, t.theme, t.texture]);

  // font pair switching
  const fontStyles = useMemo(() => {
    if (t.fontPair === "serif-mono") {
      return `
        body { font-family: "Frank Ruhl Libre", "Heebo", serif; }
        .display, .program h3, .about .body h2, .contact .info h2,
        .tree-col-head .name-he, .hero .head { font-family: "Frank Ruhl Libre", serif; font-weight: 900; }
        .nav-mark, .strip-num, .hero-meta .v, .about-stats .v,
        .program .num, .program .price, .foot .big { font-family: "JetBrains Mono", monospace; font-weight: 700; letter-spacing: 0; }
      `;
    }
    return "";
  }, [t.fontPair]);

  return (
    <>
      <style>{fontStyles}</style>
      <div className="shell">
        <Nav />
        <Hero variant={t.heroVariant} />
        <Marquee />
        <SkillTree />
        <Programs />
        <About />
        <Pricing />
        <Contact />
        <Foot />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent" />
        <TweakColor
          label="צבע הדגשה"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak("accent", v)} />
        
        <TweakColor
          label="צבע חופשי"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)} />
        
        <TweakSection label="Background" />
        <TweakSelect
          label="רקע האתר"
          value={t.theme}
          options={Object.keys(THEMES).map((k) => ({ value: k, label: THEMES[k].label }))}
          onChange={(v) => setTweak("theme", v)} />
        
        <TweakRadio
          label="טקסטורה"
          value={t.texture}
          options={["grid", "grain", "none"]}
          onChange={(v) => setTweak("texture", v)} />
        
        <TweakSection label="Layout" />
        <TweakRadio
          label="צפיפות"
          value={t.density}
          options={["tight", "regular", "airy"]}
          onChange={(v) => setTweak("density", v)} />
        
        <TweakRadio
          label="Hero"
          value={t.heroVariant}
          options={["split", "stack"]}
          onChange={(v) => setTweak("heroVariant", v)} />
        
        <TweakSection label="Type" />
        <TweakRadio
          label="זוג גופנים"
          value={t.fontPair}
          options={["heebo-archivo", "serif-mono"]}
          onChange={(v) => setTweak("fontPair", v)} />
        
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
