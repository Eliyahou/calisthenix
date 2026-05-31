// Calistenix — content data (Hebrew primary) · קורס של משה

window.SKILL_TREE = [
  {
    cat: "PUSH", he: "דחיפה", en: "PUSH",
    skills: [
      { lvl: "L1", he: "שכיבות סמיכה", en: "Push-up", state: "done" },
      { lvl: "L2", he: "סמיכה יהלום", en: "Diamond push-up", state: "done" },
      { lvl: "L3", he: "סמיכה קשת", en: "Archer push-up", state: "mid" },
      { lvl: "L4", he: "פסאודו-פלאנש", en: "Pseudo planche", state: "mid" },
      { lvl: "L5", he: "פלאנש לין", en: "Planche lean", state: "" },
      { lvl: "L6", he: "טאק פלאנש", en: "Tuck planche", state: "" },
      { lvl: "L7", he: "סטרדל פלאנש", en: "Straddle planche", state: "" },
      { lvl: "L8", he: "פלאנש מלא", en: "Full planche", state: "" },
    ],
  },
  {
    cat: "PULL", he: "משיכה", en: "PULL",
    skills: [
      { lvl: "L1", he: "פול-אפ", en: "Pull-up", state: "done" },
      { lvl: "L2", he: "פול-אפ L-סיט", en: "L-sit pull-up", state: "done" },
      { lvl: "L3", he: "מאסל-אפ", en: "Muscle-up", state: "mid" },
      { lvl: "L4", he: "פרונט לבר טאק", en: "Front lever tuck", state: "mid" },
      { lvl: "L5", he: "אדוונס טאק", en: "Adv. tuck FL", state: "" },
      { lvl: "L6", he: "סטרדל פרונט לבר", en: "Straddle FL", state: "" },
      { lvl: "L7", he: "פרונט לבר מלא", en: "Full front lever", state: "" },
      { lvl: "L8", he: "פרונט לבר פול", en: "FL pull-up", state: "" },
    ],
  },
  {
    cat: "LEGS", he: "רגליים", en: "LEGS",
    skills: [
      { lvl: "L1", he: "סקוואט", en: "Air squat", state: "done" },
      { lvl: "L2", he: "ספליט בולגרי", en: "Bulgarian split", state: "done" },
      { lvl: "L3", he: "סקוואט שרימפ", en: "Shrimp squat", state: "done" },
      { lvl: "L4", he: "סקוואט פיסטול", en: "Pistol squat", state: "mid" },
      { lvl: "L5", he: "פיסטול עומס", en: "Weighted pistol", state: "" },
      { lvl: "L6", he: "דרגון פיסטול", en: "Dragon pistol", state: "" },
      { lvl: "L7", he: "נורדית", en: "Nordic curl", state: "" },
      { lvl: "L8", he: "סיסי סקוואט", en: "Sissy squat", state: "" },
    ],
  },
  {
    cat: "CORE", he: "ליבה", en: "CORE",
    skills: [
      { lvl: "L1", he: "פלאנק", en: "Plank", state: "done" },
      { lvl: "L2", he: "הולו בודי", en: "Hollow hold", state: "done" },
      { lvl: "L3", he: "L-סיט", en: "L-sit", state: "mid" },
      { lvl: "L4", he: "V-סיט", en: "V-sit", state: "mid" },
      { lvl: "L5", he: "דרגון פלאג", en: "Dragon flag", state: "" },
      { lvl: "L6", he: "מאנה לין", en: "Manna lean", state: "" },
      { lvl: "L7", he: "מאנה", en: "Manna", state: "" },
      { lvl: "L8", he: "וויקטוריאן", en: "Victorian", state: "" },
    ],
  },
  {
    cat: "HSTND", he: "עמידת ידיים", en: "HANDSTAND",
    skills: [
      { lvl: "L1", he: "כפיפת קיר", en: "Wall HS hold", state: "done" },
      { lvl: "L2", he: "עמידה בקיר", en: "Chest-to-wall", state: "done" },
      { lvl: "L3", he: "פרי-עמידה", en: "Freestanding HS", state: "mid" },
      { lvl: "L4", he: "פייק פוש", en: "Pike push-up", state: "mid" },
      { lvl: "L5", he: "HSPU בקיר", en: "Wall HSPU", state: "" },
      { lvl: "L6", he: "HSPU חופשי", en: "Free HSPU", state: "" },
      { lvl: "L7", he: "טייגר בנד", en: "Tiger bend", state: "" },
      { lvl: "L8", he: "עמידת יד אחת", en: "One-arm HS", state: "" },
    ],
  },
];

// מבנה הקורס — 8 מפגשים על פני חודש, שעה כל מפגש
window.COURSE = [
  { num: "01", he: "אבחון ויסודות", en: "Assessment & Basics",
    desc: "בדיקת רמה אישית, נשימה, יציבה וחימום נכון. מגדירים יעד אישי לחודש." },
  { num: "02", he: "דחיפה", en: "Push",
    desc: "שכיבות סמיכה וריאציות, יציבות כתף ובסיס לכיוון פלאנש." },
  { num: "03", he: "משיכה", en: "Pull",
    desc: "פול-אפ נקי, טכניקת מנף ובניית כוח גב ואחיזה." },
  { num: "04", he: "ליבה", en: "Core",
    desc: "Hollow body, L-sit ושליטה בבטן — הבסיס לכל תרגיל מתקדם." },
  { num: "05", he: "רגליים", en: "Legs",
    desc: "סקוואט, ספליט בולגרי ופרוגרסיה לעבר פיסטול." },
  { num: "06", he: "עמידת ידיים", en: "Handstand",
    desc: "עבודת קיר, איזון ראשוני ושליטה בשיווי משקל הפוך." },
  { num: "07", he: "שילובים", en: "Combos",
    desc: "מאסל-אפ, פלאנש לין וחיבור של היכולות לתנועה אחת." },
  { num: "08", he: "מבחן ותוכנית המשך", en: "Test & Next Plan",
    desc: "מבחן יכולת אישי וקבלת תוכנית אימון להמשך הדרך לבד." },
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
  { he: "הרשמה מוקדמת",  en: "Early bird",   note: "מוגבל ל-3 ראשונים", price: "₪590",   per: "₪74/מפגש", hi: true  },
  { he: "קורס מלא",       en: "Full course",  note: "8 מפגשים · חודש",   price: "₪690",   per: "₪86/מפגש", hi: false },
  { he: "הרשמה בזוג",     en: "Pair",         note: "מחיר לשניים",        price: "₪1,180", per: "₪590 כ\"א", hi: false },
  { he: "מפגש ניסיון",    en: "Trial",        note: "חד פעמי · ללא התחייבות", price: "₪90", per: "מפגש בודד", hi: false },
];

window.MARQUEE = [
  "כוח", "שליטה", "תנועה", "8 מפגשים", "PLANCHE", "FRONT LEVER", "HANDSTAND",
  "MUSCLE-UP", "פיסטול", "קורס קליסטניקס",
];
