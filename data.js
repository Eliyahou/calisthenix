// Calistenix — content data (Hebrew primary) · קורס של משה

window.SKILL_TREE = [
  {
    cat: "FOUND", he: "יסודות", en: "FOUNDATION",
    skills: [
      { lvl: "L1", he: "הכנת מפרקים", en: "Joint prep", state: "done" },
      { lvl: "L2", he: "פלאנק", en: "Plank", state: "done" },
      { lvl: "L3", he: "הולו בודי", en: "Hollow body", state: "done" },
      { lvl: "L4", he: "שליטת שכמות", en: "Scapular control", state: "mid" },
      { lvl: "L5", he: "הולו רוקס", en: "Hollow rocks", state: "mid" },
      { lvl: "L6", he: "L-סיט", en: "L-sit", state: "" },
      { lvl: "L7", he: "V-סיט", en: "V-sit", state: "" },
      { lvl: "L8", he: "דרגון פלאג", en: "Dragon flag", state: "" },
    ],
  },
  {
    cat: "HSTND", he: "עמידת ידיים", en: "HANDSTAND",
    skills: [
      { lvl: "L1", he: "חימום פרקי יד", en: "Wrist prep", state: "done" },
      { lvl: "L2", he: "פייק הולד", en: "Pike hold", state: "done" },
      { lvl: "L3", he: "חזה לקיר", en: "Chest-to-wall", state: "mid" },
      { lvl: "L4", he: "בעיטה לקיר", en: "Kick-up", state: "mid" },
      { lvl: "L5", he: "איזון ראשוני", en: "Balance taps", state: "" },
      { lvl: "L6", he: "עמידה חופשית", en: "Freestanding HS", state: "" },
      { lvl: "L7", he: "עמידה ממושכת", en: "Long hold", state: "" },
      { lvl: "L8", he: "כניסות חופשיות", en: "Free entries", state: "" },
    ],
  },
  {
    cat: "FLEV", he: "פרונט לבר", en: "FRONT LEVER",
    skills: [
      { lvl: "L1", he: "אקטיב האנג", en: "Active hang", state: "done" },
      { lvl: "L2", he: "משיכת שכמות", en: "Scapular pulls", state: "done" },
      { lvl: "L3", he: "טאק פרונט לבר", en: "Tuck FL", state: "mid" },
      { lvl: "L4", he: "אדוונס טאק", en: "Advanced tuck", state: "" },
      { lvl: "L5", he: "רגל אחת", en: "One-leg FL", state: "" },
      { lvl: "L6", he: "סטרדל", en: "Straddle FL", state: "" },
      { lvl: "L7", he: "פרונט לבר מלא", en: "Full front lever", state: "" },
      { lvl: "L8", he: "פרונט לבר פול", en: "FL pull-up", state: "" },
    ],
  },
  {
    cat: "PLNCH", he: "פלאנץ'", en: "PLANCHE",
    skills: [
      { lvl: "L1", he: "עמדת קראו", en: "Crow pose", state: "done" },
      { lvl: "L2", he: "פלאנש לין", en: "Planche lean", state: "mid" },
      { lvl: "L3", he: "פסאודו פלאנש", en: "Pseudo planche", state: "mid" },
      { lvl: "L4", he: "טאק פלאנש", en: "Tuck planche", state: "" },
      { lvl: "L5", he: "אדוונס טאק", en: "Advanced tuck", state: "" },
      { lvl: "L6", he: "סטרדל פלאנש", en: "Straddle planche", state: "" },
      { lvl: "L7", he: "רגל אחת", en: "One-arm planche", state: "" },
      { lvl: "L8", he: "פלאנש מלא", en: "Full planche", state: "" },
    ],
  },
];

// מבנה הקורס — 8 מפגשים על פני חודש, שעה כל מפגש
window.COURSE = [
  { num: "01", he: "יסודות כוח הגוף", en: "Core & Scapula",
    desc: "ליבה, שליטת שכמות והכנת מפרקים — הבסיס הבטוח לכל מיומנות מתקדמת." },
  { num: "02", he: "עמידת ידיים · א׳", en: "Handstand I",
    desc: "בטיחות ויציאות נפילה, בעיטה לקיר ותחושת איזון ראשונית." },
  { num: "03", he: "יסודות המשיכה", en: "Pull & FL Prep",
    desc: "טכניקת משיכה, אקטיב האנג ושליטת שכמות לקראת פרונט לבר." },
  { num: "04", he: "פרונט לבר", en: "Tuck Front Lever",
    desc: "צלילה עמוקה לטאק פרונט לבר — כוח גב, ליבה ושליטה בזווית הגוף." },
  { num: "05", he: "יסודות הדחיפה", en: "Push & Planche Prep",
    desc: "דחיפה אופקית, פלאנש לין ופסאודו פלאנש — בסיס הכוח לפלאנץ'." },
  { num: "06", he: "פלאנץ' וקראו", en: "Tuck Planche & Crow",
    desc: "צלילה עמוקה — עמדת קראו וטאק פלאנש, נטייה קדמית וכוח כתפיים." },
  { num: "07", he: "עמידת ידיים · ב׳", en: "Handstand II",
    desc: "עבודה חופשית, שליטה באיזון ושילוב כוח בין כל המיומנויות." },
  { num: "08", he: "סיכום ותוכנית", en: "Test & Plan",
    desc: "מפגש מסכם — מבחן תוצאה אישי ובניית תוכנית המשך מותאמת." },
];

window.COURSE_INFO = {
  sessions: "8",
  weeks: "4",
  duration: "60 דק׳",
  freq: "2 בשבוע",
  group: "עד 10 מתאמנים",
  location: "פארק / מתקן שכונתי",
};

window.PRICING_ROWS = [
  { he: "קורס מלא",       en: "Full course",  note: "8 מפגשים · חודש · כולל הכל",   special: "הנחה לנרשמים עד ראש חודש תמוז 16/06 👏", hi: true },
];

window.PAYMENT = {
  amount: 720,
  amountLabel: "₪720",
  payeeName: "משה לוי",
  payeePhone: "050-316-1126",
  // ★ תשלום אוטומטי מלא ★
  // הדביקו כאן קישור לעמוד תשלום מאובטח (Grow/משולם, Tranzila, PayPlus, Sumit וכו').
  // ברגע שיש קישור — לחיצה על "תשלום מאובטח" תוביל ישירות לדף התשלום,
  // הלקוח משלם בביט/אשראי, הכסף נכנס אוטומטית לחשבון של משה וקבלה מופקת לבד.
  checkoutLink: "",
  // לחלופין: קישור התשלום האישי של משה מאפליקציית ביט (חצי-אוטומטי)
  bitLink: "",
};

window.MARQUEE = [
  "כוח", "שליטה", "תנועה", "8 מפגשים", "PLANCHE", "FRONT LEVER", "HANDSTAND",
  "CROW", "פרונט לבר", "קורס קליסטניקס",
];
