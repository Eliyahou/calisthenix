// Calistenix — main app
const {useState, useEffect, useMemo} = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
    accent: "#F2A07B",
    theme: "sky",
    texture: "grain",
    density: "airy",
    heroVariant: "split",
    fontPair: "heebo-archivo",
}; /*EDITMODE-END*/

// full-site background themes (sheet + ink + frame) — warm pastels
const THEMES = {
    sky: {label: "תכלת (Sky)", paper: "#EFF4FC", ink: "#2F3C4F", backdrop: "#D2E0F1", dark: false},
    mist: {label: "ערפל כחול (Mist)", paper: "#F1F5F9", ink: "#33414F", backdrop: "#DAE4EC", dark: false},
    peach: {label: "אפרסק (Peach)", paper: "#FCF1E7", ink: "#4A3528", backdrop: "#E9D3BD", dark: false},
    blush: {label: "ורוד עדין (Blush)", paper: "#FBEDE8", ink: "#4A322D", backdrop: "#ECD2C9", dark: false},
    cream: {label: "שמנת (Cream)", paper: "#FBF4E9", ink: "#463829", backdrop: "#EBDCC4", dark: false},
    apricot: {label: "משמש (Apricot)", paper: "#FDEFDC", ink: "#4B3722", backdrop: "#EED4B2", dark: false},
    sand: {label: "חול חם (Warm Sand)", paper: "#F4E5D1", ink: "#3E2D1D", backdrop: "#E1CBAD", dark: false},
    rose: {label: "ורד מעושן (Dusty Rose)", paper: "#F8E7E2", ink: "#4A2E2A", backdrop: "#E8CCC5", dark: false},
    cocoa: {label: "קקאו (Warm Dark)", paper: "#2E241C", ink: "#F4E7D7", backdrop: "#1B130D", dark: true},
};

const ACCENTS = [
    "#F2A07B", // peach coral
    "#F6B8A0", // blush peach
    "#EBB179", // apricot
    "#F1BFBF", // rose pastel
    "#E7C79C", // warm sand
    "#D9A085", // clay
    "#F0CB9E", // light apricot
    "#E4AEB3", // dusty rose
    "#EFD7A2", // butter
    "#FBF4E9", // warm white
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
function Strip({num, title, en, meta}) {
    return (
        <div className="strip">
            <div className="strip-num">{num}</div>
            <div className="strip-title">
                <span>
                    {title} <span style={{opacity: 0.4, marginInlineStart: 8}}>/ {en}</span>
                </span>
            </div>
            <div className="strip-meta">{meta}</div>
        </div>
    );
}

/* ───────── Nav ───────── */
function Nav() {
    return (
        <nav className="nav rule-b">
            <div className="nav-left">
                <a href="#course" className="nav-link">
                    הקורס
                </a>
                <a href="#about" className="nav-link">
                    משה
                </a>
                <a href="#pricing" className="nav-link">
                    מחיר
                </a>
            </div>
            <div className="nav-mark">CALISTENIX</div>
            <div className="nav-right">
                <span className="mono nav-status" style={{display: "inline-flex", alignItems: "center", gap: 8}}>
                    <span className="live-dot" />
                    הרשמה פתוחה · קורס יוני 26
                </span>
                <a
                    href="#contact"
                    className="btn btn--accent"
                    style={{padding: "10px 16px", fontSize: 12}}
                    data-comment-anchor="3f17df5c02-a-65-9"
                >
                    הרשמה לקורס <span className="arrow">→</span>
                </a>
            </div>
        </nav>
    );
}

/* ───────── Hero ───────── */
function Hero({variant}) {
    if (variant === "stack") {
        return (
            <section className="hero">
                <div className="eyebrow">קורס קליסטניקס · 8 מפגשים · עם משה</div>
                <h1 className="display head" style={{marginTop: 28}}>
                    <div>תתחיל.</div>
                    <div className="alt">תתמיד.</div>
                    <div>
                        <span className="mark">תעוף.</span>
                    </div>
                </h1>
                <p className="sub">
                    קורס קליסטניקס בן 8 מפגשים שבונה כוח אמיתי, שליטה גופנית וטכניקה — צעד אחר צעד, מהיסודות ועד
                    התרגילים שכולם רוצים לעשות.
                </p>
                <div style={{display: "flex", gap: 12, flexWrap: "wrap"}}>
                    <a href="#contact" className="btn btn--accent">
                        הרשמה לקורס <span className="arrow">→</span>
                    </a>
                    <a href="#course" className="btn">
                        מבנה הקורס
                    </a>
                </div>
                <HeroMeta />
            </section>
        );
    }
    // default "split" — type on the right, photo on the left (RTL)
    return (
        <section className="hero grid12" style={{padding: 0}}>
            <div style={{gridColumn: "span 8", padding: "56px var(--pad)"}}>
                <div className="eyebrow">קורס קליסטניקס · יוני 2026 · הרשמה פתוחה</div>
                <h1 className="display head">
                    <div>כוח.</div>
                    <div className="alt">שליטה.</div>
                    <div>
                        <span className="mark">תנועה.</span>
                    </div>
                </h1>
                <p className="sub">
                    קורס קליסטניקס בן 8 מפגשים עם משה. תוכנית הדרגתית שבונה כוח אמיתי, שליטה גופנית וטכניקה — לא לחזור
                    על תרגילים, להתקדם בהם.
                </p>
                <div style={{display: "flex", gap: 12, flexWrap: "wrap"}}>
                    <a href="#contact" className="btn btn--accent">
                        הרשמה לקורס <span className="arrow">→</span>
                    </a>
                    <a href="#course" className="btn">
                        מבנה הקורס
                    </a>
                </div>
            </div>
            <div
                style={{
                    gridColumn: "span 4",
                    borderInlineStart: "var(--rule-w) solid var(--rule)",
                    padding: "var(--pad)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--pad)",
                }}
            >
                <div className="hero-photo">
                    <img className="media-fill" src="moshe.jpeg" alt="עמידת ידיים במדבר" />
                </div>
                <div style={{borderTop: "var(--rule-w) solid var(--rule)", paddingTop: 16}}>
                    <div
                        className="mono"
                        style={{fontSize: 10, letterSpacing: "0.2em", opacity: 0.6, textTransform: "uppercase"}}
                    >
                        פרוטוקול / METHOD
                    </div>
                    <div
                        style={{
                            fontFamily: "Heebo",
                            fontWeight: 900,
                            fontSize: 22,
                            lineHeight: 1.1,
                            marginTop: 8,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        פרוגרסיה. טכניקה. עקביות.
                    </div>
                    <div className="mono" style={{fontSize: 11, lineHeight: 1.6, opacity: 0.7, marginTop: 10}}>
                        08 מפגשים. 04 שבועות. שיטה אחת.
                    </div>
                </div>
            </div>
            <div style={{gridColumn: "span 12"}}>
                <HeroMeta />
            </div>
        </section>
    );
}
function HeroMeta() {
    return (
        <div className="hero-meta">
            <div className="item">
                <div className="k">מפגשים</div>
                <div className="v">08</div>
            </div>
            <div className="item">
                <div className="k">משך מפגש</div>
                <div className="v">60'</div>
            </div>

            <div className="item">
                <div className="k">פעמיים בשבוע</div>
                <div className="v">בערב</div>
            </div>
            <div className="item">
                <div className="k">גילאים</div>
                <div className="v">13 - 16</div>
            </div>

            <div className="item full-width">
                <div className="k">קבוצה</div>
                <div className="v">עד 10</div>
            </div>
        </div>
    );
}

/* ───────── Marquee ───────── */
function Marquee() {
    const items = window.MARQUEE.concat(window.MARQUEE);
    return (
        <div className="marquee">
            <div className="marquee-track">
                <span>
                    {items.map((s, i) => (
                        <span key={i}>{s}</span>
                    ))}
                </span>
                <span>
                    {items.map((s, i) => (
                        <span key={"b" + i}>{s}</span>
                    ))}
                </span>
            </div>
        </div>
    );
}

/* ───────── Skill Tree ───────── */
function SkillTree() {
    return (
        <section id="skills">
            <Strip num="02" title="עץ המיומנויות" en="SKILL TREE" meta="פרוגרסיה הדרגתית · 4 מסלולים · 32 שלבים" />
            <div className="tree-grid">
                {window.SKILL_TREE.map((col) => (
                    <div className="tree-col" key={col.cat}>
                        <div className="tree-col-head">
                            <div className="cat">{col.cat} / 08</div>
                            <div className="name-he">{col.he}</div>
                            <div
                                className="name"
                                style={{opacity: 0.4, fontSize: 13, marginTop: 4, letterSpacing: "0.15em"}}
                            >
                                {col.en}
                            </div>
                        </div>
                        {col.skills.map((s, i) => (
                            <div className={`skill ${s.state}`} key={i}>
                                <div className="lvl">{s.lvl}</div>
                                <div className="nm">
                                    {s.he}
                                    <small>{s.en}</small>
                                </div>
                                <div className="dot" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div
                className="rule-x"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px var(--pad)",
                    fontFamily: "JetBrains Mono",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    opacity: 0.7,
                }}
            >
                <span>● הושלם &nbsp;&nbsp; ◐ בתהליך &nbsp;&nbsp; ○ עתיד</span>
                <span>גרסה 2026.1 · עודכן 05/2026</span>
            </div>
        </section>
    );
}

/* ───────── Programs ───────── */
function Programs() {
    return (
        <section id="course">
            <Strip num="02" title="מבנה הקורס" en="COURSE" meta="8 מפגשים · 4 שבועות · 60 דקʳ למפגש" />
            <div className="course-grid">
                {window.COURSE.map((s) => (
                    <div className="course-cell" key={s.num}>
                        <div className="ssn">מפגש {s.num}</div>
                        <div className="num">{s.num}</div>
                        <h4>{s.he}</h4>
                        <div className="en">{s.en}</div>
                        <div className="desc">{s.desc}</div>
                    </div>
                ))}
            </div>
            <div className="course-cta rule-b">
                <div className="lead">
                    הקורס המלא — מהיסוד ועד התרגילים המתקדמים.
                    <small>קבוצה קטנה · עד 6 מתאמנים · יחס אישי לכל אחד</small>
                </div>
                <a href="#contact" className="btn btn--accent">
                    הרשמה לקורס <span className="arrow">→</span>
                </a>
            </div>
        </section>
    );
}

/* ───────── About ───────── */
function About() {
    const vidRef = React.useRef(null);
    const [needsTap, setNeedsTap] = useState(false);
    React.useEffect(() => {
        const v = vidRef.current;
        if (!v) return;
        // iOS only inline-autoplays a video it considers muted at load — React's
        // `muted` prop doesn't reliably set the HTML attribute, so force it here,
        // plus the webkit inline flag, then attempt play on load and on canplay.
        v.muted = true;
        v.defaultMuted = true;
        v.setAttribute("muted", "");
        v.setAttribute("playsinline", "");
        v.setAttribute("webkit-playsinline", "");
        const tryPlay = () => {
            const p = v.play();
            if (p && p.then) p.then(() => setNeedsTap(false)).catch(() => setNeedsTap(true));
        };
        tryPlay();
        v.addEventListener("canplay", tryPlay, {once: true});
        v.addEventListener("loadeddata", tryPlay, {once: true});
        // some phones (Low Power / data-saver) silently refuse muted autoplay —
        // if still paused after a beat, surface a tap-to-play button
        const t = setTimeout(() => {
            if (v.paused) setNeedsTap(true);
        }, 1400);
        const unmute = () => {
            if (v.paused) v.play().catch(() => {});
            v.muted = false;
            v.volume = 1;
            cleanup();
        };
        function cleanup() {
            window.removeEventListener("pointerdown", unmute);
            window.removeEventListener("touchstart", unmute);
            window.removeEventListener("keydown", unmute);
        }
        window.addEventListener("pointerdown", unmute);
        window.addEventListener("touchstart", unmute);
        window.addEventListener("keydown", unmute);
        return () => {
            clearTimeout(t);
            cleanup();
        };
    }, []);
    const handleTapPlay = () => {
        const v = vidRef.current;
        if (!v) return;
        v.muted = false;
        v.volume = 1;
        v.play()
        .then(() => setNeedsTap(false))
        .catch(() => {
            v.muted = true;
            v.play()
            .then(() => setNeedsTap(false))
            .catch(() => {});
        });
    };
    return (
        <section id="about">
            <Strip num="03" title="משה" en="THE COACH" meta="בן 17 · קליסטניקס · אתלט צעיר" />
            <div className="about">
                <div className="photo-wrap">
                    <div className="photo">
                        <video
                            ref={vidRef}
                            className="media-fill"
                            poster="moshe.jpeg"
                            autoPlay
                            muted={true} // <--- שינוי כאן
                            defaultMuted // <--- תוספת לביטחון עבור כרום
                            loop
                            playsInline
                            webkit-playsinline="true"
                            preload="auto"
                        >
                            <source src="moshe-video-1.mp4" type="video/mp4" />
                        </video>
                        {needsTap && (
                            <button className="play-ov" onClick={handleTapPlay} aria-label="הפעל סרטון">
                                <span className="play-ic">▶</span>
                                <span className="play-tx">הפעל סרטון</span>
                            </button>
                        )}
                    </div>
                </div>
                <div className="body">
                    <div className="eyebrow" style={{marginBottom: 12}}>
                        היכרות / 03 · 01
                    </div>
                    <h2>
                        בן 17.
                        <br />
                        כבר שם למעלה.
                    </h2>
                    <p>
                        אני משה, בן 17, ומתאמן קליסטניקס כבר כמה שנים. התחלתי משכיבות סמיכה בפארק והגעתי עם הזמן
                        למאסל-אפ, עמידת ידיים ושליטה מלאה בגוף — הכל בכוח עצמי, בלי חדר כושר.
                    </p>
                    <p>
                        השיטה שלי פשוטה: טכניקה נקייה לפני כוח, ופרוגרסיה הדרגתית שמתאימה לכל אחד. בקורס אני לוקח אתכם
                        מההתחלה — גם אם מעולם לא עשיתם שכיבת סמיכה אחת.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ───────── Bit payment modal ───────── */
function BitPay({onClose}) {
    const P = window.PAYMENT;
    const [copied, setCopied] = useState(null);

    const copy = (text, key) => {
        const done = () => {
            setCopied(key);
            setTimeout(() => setCopied(null), 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done).catch(done);
        } else {
            done();
        }
    };

    const openBit = () => {
        // אם משה סיפק קישור בקשת תשלום רשמי מביט - זה יעבוד מושלם
        if (P.bitLink) {
            window.open(P.bitLink, "_blank", "noopener");
            return;
        }

        // גיבוי: אם אין קישור אישי, פותחים את האפליקציה (או החנות) והמשתמש יעתיק ידנית
        const ua = navigator.userAgent || "";
        const isIOS = /iPad|iPhone|iPod/.test(ua);

        // בנייד, ננסה לפתוח קודם כל את האפליקציה עצמה בצורה נקייה
        if (/Android|iPhone|iPad|iPod/i.test(ua)) {
            window.location.href = "bitpay://"; // פותח את האפליקציה עצמה

            // אם אחרי 2 שניות היא לא נפתחה, כנראה היא לא מותקנת - נעביר לחנות
            setTimeout(() => {
                if (document.hidden || document.webkitHidden) return;
                const fallbackUrl = isIOS
                    ? "https://apps.apple.com/il/app/bit/id1206843063"
                    : "https://play.google.com/store/apps/details?id=com.bnhp.payments.paymentsapp";
                window.open(fallbackUrl, "_blank", "noopener");
            }, 2000);
        } else {
            // אם המשתמש במחשב, נשלח אותו ישירות לאתר ביט / הסבר
            window.open("https://www.bitpay.co.il/", "_blank", "noopener");
        }
    };

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div className="paywrap" onClick={onClose}>
            <div className="paycard" dir="rtl" onClick={(e) => e.stopPropagation()}>
                <div className="pc-hd">
                    <span className="t">תשלום בביט · BIT</span>
                    <button className="pc-x" aria-label="סגור" onClick={onClose}>
                        ✕
                    </button>
                </div>
                <div className="pc-amt">
                    <div className="n">{P.amountLabel}</div>
                    <div className="c">קורס קליסטניקס מלא · 8 מפגשים</div>
                </div>
                <div className="pc-row">
                    <div>
                        <div className="k">סכום לתשלום</div>
                        <div className="v">{P.amountLabel}</div>
                    </div>
                    <button className="pc-copy" onClick={() => copy(String(P.amount), "amt")}>
                        {copied === "amt" ? "הועתק ✓" : "העתק סכום"}
                    </button>
                </div>
                <div className="pc-row">
                    <div>
                        <div className="k">מקבל התשלום</div>
                        <div className="v">
                            {P.payeeName} · {P.payeePhone}
                        </div>
                    </div>
                    <button className="pc-copy" onClick={() => copy(P.payeePhone, "phone")}>
                        {copied === "phone" ? "הועתק ✓" : "העתק מספר"}
                    </button>
                </div>
                <div className="pc-actions">
                    <button className="btn btn--accent" onClick={openBit}>
                        {P.bitLink ? "המשך לאישור בביט" : "פתח את אפליקציית ביט"} <span className="arrow">→</span>
                    </button>
                </div>
                <div className="pc-note">
                    {P.bitLink
                        ? `אפליקציית ביט תפתח כעת. הסכום (${P.amountLabel}) והנמען כבר מעודכנים, כל שנותר הוא לאשר את הפעולה.`
                        : `לחצו על הכפתור לפתיחת ביט. באפליקציה בחרו ב"העברת כסף", והשתמשו בכפתורי ההעתקה למעלה כדי להזין בקלות את המספר והסכום.`}
                </div>
            </div>
        </div>
    );
}
/* ───────── Pricing ───────── */
function Pricing() {
    const [payOpen, setPayOpen] = useState(false);
    const startPay = () => {
        const P = window.PAYMENT;
        // automatic hosted checkout when available, else the bit instructions modal
        if (P.checkoutLink) {
            window.open(P.checkoutLink, "_blank", "noopener");
            return;
        }
        setPayOpen(true);
    };
    return (
        <section id="pricing">
            <Strip num="04" title="מחיר הקורס" en="PRICING" meta="₪ · שקלים · תשלום אחד" />
            <div className="pricing-wrap" style={{padding: 0}}>
                <table className="pricing-table">
                    <thead>
                        <tr>
                            <th style={{width: "34%"}}>מסלול / OPTION</th>
                            <th>פרטים</th>
                            <th>מחיר</th>
                            <th>למפגש</th>
                        </tr>
                    </thead>
                    <tbody>
                        {window.PRICING_ROWS.map((r, i) => (
                            <tr key={i} className={r.hi ? "hi" : ""}>
                                <td>
                                    <div style={{fontWeight: 700}}>{r.he}</div>
                                    <div
                                        className="mono"
                                        style={{
                                            fontSize: 10,
                                            letterSpacing: "0.16em",
                                            opacity: 0.55,
                                            textTransform: "uppercase",
                                            marginTop: 2,
                                        }}
                                    >
                                        {r.en}
                                    </div>
                                </td>
                                <td className="mono" style={{fontSize: 12}}>
                                    {r.note}
                                </td>
                                <td className="num">{r.price}</td>
                                <td className="mono" style={{fontSize: 12, opacity: 0.75}}>
                                    {r.per}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pay-cta rule-b">
                <div className="lead">
                    מוכנים להתחיל?
                    <small>תשלום מאובטח · ביט / אשראי · קבלה אוטומטית</small>
                </div>
                <button className="btn btn--accent" onClick={startPay}>
                    תשלום מאובטח · {window.PAYMENT.amountLabel} <span className="arrow">→</span>
                </button>
            </div>
            {payOpen && <BitPay onClose={() => setPayOpen(false)} />}
        </section>
    );
}

/* ───────── Contact ───────── */
function Contact() {
    const [sent, setSent] = useState(false);
    return (
        <section id="contact">
            <Strip num="05" title="צור קשר" en="GET IN TOUCH" meta="תגובה תוך 24 שעות" />
            <div className="contact">
                <div className="info">
                    <div className="eyebrow" style={{marginBottom: 24}}>
                        הרשמה לקורס / שאלות
                    </div>
                    <h2>
                        דבר
                        <br />
                        עם משה.
                    </h2>
                    <div className="row">
                        <div className="k">WHATSAPP</div>
                        <div className="v">050-316-1126</div>
                    </div>
                    <div className="row">
                        <div className="k">EMAIL</div>
                        <div className="v">moshelevy1129@gmail.com</div>
                    </div>
                    <div className="row">
                        <div className="k">מיקום</div>
                        <div className="v">פארק / מתקן שכונתי</div>
                    </div>
                    <div className="row">
                        <div className="k">מחזור הבא</div>
                        <div className="v">יוני 2026 · הרשמה פתוחה</div>
                    </div>
                </div>
                <div>
                    {sent ? (
                        <div style={{padding: "var(--pad)"}}>
                            <div className="submitted">
                                <span style={{fontFamily: "Archivo Black", fontSize: 22}}>✓</span>
                                <div>
                                    כמעט סיימת — פתחנו לך את תוכנת המייל עם כל הפרטים. רק ללחוץ "שלח" והפנייה תגיע
                                    ישירות למשה.
                                    <div className="mono" style={{fontSize: 11, opacity: 0.7, marginTop: 4}}>
                                        REF-{Math.floor(Math.random() * 900000 + 100000)}
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setSent(false)} className="btn" style={{marginTop: 18}}>
                                שלח עוד הודעה <span className="arrow">→</span>
                            </button>
                        </div>
                    ) : (
                        <form
                            className="form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                                const f = new FormData(e.target);
                                const subject = `הרשמה לקורס קליסטניקס - ${f.get("name") || ""}`;
                                const body = [
                                    `שם: ${f.get("name") || ""}`,
                                    `גיל: ${f.get("age") || ""}`,
                                    `אימייל: ${f.get("email") || ""}`,
                                    `טלפון: ${f.get("phone") || ""}`,
                                    `רמת ניסיון: ${f.get("level") || ""}`,
                                    `,`,
                                    `:מטרה / שאלה`,
                                    `${f.get("goal") || ""}`,
                                ].join("\n");
                                if (isMobile) {
                                    // קוד מיוחד לניידים - פותח ישירות את אפליקציית Gmail בנייד
                                    window.location.href = `googlegmail:///co?to=moshelevy1129@gmail.com&subject=${encodeURIComponent(
                                        subject
                                    )}&body=${encodeURIComponent(body)}`;

                                    // גיבוי: אם אפליקציית ג'ימייל לא מותקנת (למשל באייפון), נשתמש ב-mailto הרגיל אחרי חצי שנייה
                                    setTimeout(() => {
                                        window.location.href = `mailto:moshelevy1129@gmail.com?subject=${encodeURIComponent(
                                            subject
                                        )}&body=${encodeURIComponent(body)}`;
                                    }, 500);
                                } else {
                                    // קוד למחשבים - פותח את ג'ימייל בדפדפן בטאב חדש
                                    window.open(
                                        `https://mail.google.com/mail/?view=cm&fs=1&to=moshelevy1129@gmail.com&su=${encodeURIComponent(
                                            subject
                                        )}&body=${encodeURIComponent(body)}`,
                                        "_blank"
                                    );
                                }

                                setSent(true);
                            }}
                        >
                            <div className="row">
                                <div className="field">
                                    <label>שם מלא</label>
                                    <input name="name" required type="text" placeholder="ישראל ישראלי" />
                                </div>
                                <div className="field">
                                    <label>גיל</label>
                                    <input name="age" type="number" placeholder="14" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="field">
                                    <label>אימייל</label>
                                    <input name="email" required type="email" placeholder="you@example.com" />
                                </div>
                                <div className="field">
                                    <label>טלפון</label>
                                    <input name="phone" type="tel" placeholder="050-000-0000" />
                                </div>
                            </div>
                            <div className="field">
                                <label>רמת ניסיון</label>
                                <select name="level" defaultValue="">
                                    <option value="" disabled>
                                        בחר רמה
                                    </option>
                                    <option>מתחיל לחלוטין</option>
                                    <option>מתאמן בסיסי</option>
                                    <option>מתקדם</option>
                                    <option>ספורטאי</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>מטרה / שאלה</label>
                                <textarea name="goal" placeholder="ספר לי קצת עליך — מה תרצה להשיג בקורס?"></textarea>
                            </div>
                            <div className="form-actions">
                                <span className="legal">בלחיצה אני מאשר/ת קבלת פנייה חוזרת</span>
                                <button type="submit" className="btn btn--accent">
                                    שלח <span className="arrow">→</span>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

/* ───────── Footer ───────── */
function Foot() {
    return (
        <footer className="foot-wrap rule-x">
            <div className="foot">
                <div>© 2026 CALISTENIX · כל הזכויות שמורות</div>
                <div style={{display: "flex", gap: 16}}>
                    <a href="#" style={{color: "inherit"}}>
                        פרטיות
                    </a>
                    <a href="#" style={{color: "inherit"}}>
                        תנאים
                    </a>
                    <a href="#" style={{color: "inherit"}}>
                        FAQ
                    </a>
                </div>
                <div style={{textAlign: "end"}}>נבנה בתל אביב · v2026.1</div>
            </div>
            <div className="big">CALISTENIX</div>
        </footer>
    );
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
                    onChange={(v) => setTweak("accent", v)}
                />

                <TweakColor label="צבע חופשי" value={t.accent} onChange={(v) => setTweak("accent", v)} />

                <TweakSection label="Background" />
                <TweakSelect
                    label="רקע האתר"
                    value={t.theme}
                    options={Object.keys(THEMES).map((k) => ({value: k, label: THEMES[k].label}))}
                    onChange={(v) => setTweak("theme", v)}
                />

                <TweakRadio
                    label="טקסטורה"
                    value={t.texture}
                    options={["grid", "grain", "none"]}
                    onChange={(v) => setTweak("texture", v)}
                />

                <TweakSection label="Layout" />
                <TweakRadio
                    label="צפיפות"
                    value={t.density}
                    options={["tight", "regular", "airy"]}
                    onChange={(v) => setTweak("density", v)}
                />

                <TweakRadio
                    label="Hero"
                    value={t.heroVariant}
                    options={["split", "stack"]}
                    onChange={(v) => setTweak("heroVariant", v)}
                />

                <TweakSection label="Type" />
                <TweakRadio
                    label="זוג גופנים"
                    value={t.fontPair}
                    options={["heebo-archivo", "serif-mono"]}
                    onChange={(v) => setTweak("fontPair", v)}
                />
            </TweaksPanel>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
