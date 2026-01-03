globalThis.process ??= {}; globalThis.process.env ??= {};
const DB_ERRORS = {
  MISSING_BINDING: "DATABASE_BINDING_MISSING",
  QUERY_FAILED: "DB_QUERY_FAILED"
};
async function captureLead(db, lead) {
  if (!db) throw new Error(DB_ERRORS.MISSING_BINDING);
  const { name, email, phone, service_type, message, source, client_ip, priority_score, oracle_insight } = lead;
  try {
    const result = await db.prepare(`
            INSERT INTO leads (name, email, phone, service_type, message, source, client_ip, priority_score, oracle_insight)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
      name,
      email,
      phone || null,
      service_type || null,
      message || null,
      source || "direct",
      client_ip || null,
      priority_score || 0,
      oracle_insight || null
    ).run();
    return { success: true, id: result.meta.last_row_id };
  } catch (error) {
    console.error("DB Error capturing lead:", error);
    throw new Error(DB_ERRORS.QUERY_FAILED);
  }
}
async function logEvent(db, event, level = "info", message = "", ip = "") {
  if (!db) return;
  try {
    await db.prepare(`
            INSERT INTO events (event_type, level, message, client_ip)
            VALUES (?, ?, ?, ?)
        `).bind(event, level, message, ip).run();
  } catch (error) {
    console.error("DB Error logging event:", error);
  }
}
async function getAllLeads(db) {
  if (!db) return [];
  try {
    const { results } = await db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
    return results;
  } catch (error) {
    console.error("DB Error fetching leads:", error);
    return [];
  }
}
async function getBookings(db) {
  if (!db) return [];
  try {
    const { results } = await db.prepare(`
            SELECT b.*, l.name as client_name 
            FROM bookings b 
            JOIN leads l ON b.lead_id = l.id 
            ORDER BY b.session_date ASC
        `).all();
    return results;
  } catch (error) {
    console.error("DB Error fetching bookings:", error);
    return [];
  }
}
[
  {
    id: 0,
    slug: "executive-portrait-bangkok",
    title: "สถาปนาภาพลักษณ์ด้วย Executive Portrait ระดับพรีเมียม",
    description: "ทำไมผู้บริหารระดับสูงถึงต้องมีภาพ Portrait ที่สะท้อนตัวตนและวิสัยทัศน์ที่ชัดเจน",
    content: '# Executive Portrait\n\nในโลกธุรกิจยุคใหม่ ภาพลักษณ์ของคุณคือ "นามบัตรแรก" ที่คนจะเห็น...',
    author: "Bo Clubs",
    image: "/images/bo_snake_portrait_hero.jpg",
    tags: "Personal Branding, Photography",
    status: "published",
    pub_date: "2026-01-03",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: -1,
    slug: "sony-a7iii-review-2026",
    title: "รีวิว Sony A7III ในปี 2026: ยังคุ้มค่าสำหรับการเริ่มต้นธุรกิจถ่ายภาพหรือไม่?",
    description: "เจาะลึกกล้องรุ่นในตำนานที่ยังคงเป็นม้าใช้ที่ซื่อสัตย์ของช่างภาพหลายคน",
    content: "# Sony A7III Review\n\nแม้จะเป็นกล้องที่ออกมาหลายปีแล้ว แต่ Sony A7III ยังคงมีเสน่ห์...",
    author: "Bo Clubs",
    image: "/images/bo_neon_purple_portrait.png",
    tags: "Gear, Sony, Review",
    status: "published",
    pub_date: "2026-01-03",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  }
];

export { getAllLeads as a, captureLead as c, getBookings as g, logEvent as l };
