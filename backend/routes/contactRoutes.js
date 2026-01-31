import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const isEmail = (s = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());

const normalizePhone = (s = "") =>
  String(s).replace(/[^\d+]/g, "").trim(); // +3630... jelleghez jó

const requiredEnv = ["MAIL_USER", "MAIL_PASS", "MAIL_TO"];
for (const k of requiredEnv) {
  if (!process.env[k]) {
    console.warn(`[mail] Missing env var: ${k}`);
  }
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

router.post("/contact", async (req, res) => {
  try {
    const firstName = String(req.body.firstName ?? "").trim();
    const lastName = String(req.body.lastName ?? "").trim();
    const email = String(req.body.email ?? "").trim();
    const phoneRaw = String(req.body.phone ?? "").trim();
    const phone = normalizePhone(phoneRaw);
    const message = String(req.body.message ?? "").trim();

    if (firstName.length < 2) return res.status(400).json({ ok: false, error: "A keresztnév túl rövid." });
    if (lastName.length < 2) return res.status(400).json({ ok: false, error: "A vezetéknév túl rövid." });
    if (!isEmail(email)) return res.status(400).json({ ok: false, error: "Hibás e-mail formátum." });
    if (phone.length < 6) return res.status(400).json({ ok: false, error: "Hibás telefonszám." });
    if (message.length < 2) return res.status(400).json({ ok: false, error: "Az üzenet túl rövid." });
    if (message.length > 2000) return res.status(400).json({ ok: false, error: "Az üzenet túl hosszú (max 2000 karakter)." });

    if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_TO) {
      return res.status(500).json({ ok: false, error: "E-mail küldés nincs beállítva a szerveren." });
    }

    const fullName = `${lastName} ${firstName}`;

    const subject = `Kapcsolatfelvétel: ${fullName}`;
    const text = [
      `Név: ${fullName}`,
      `E-mail: ${email}`,
      `Telefon: ${phoneRaw}`,
      "",
      "Üzenet:",
      message,
    ].join("\n");

const html = `
  <div style="background:#f5f6f7;padding:24px 0;">
    <div style="
      max-width:600px;
      margin:0 auto;
      background:#ffffff;
      border-radius:10px;
      padding:24px 28px;
      font-family:Arial,sans-serif;
      color:#333333;
      line-height:1.6;
    ">
      <h2 style="
        margin:0 0 16px;
        font-size:20px;
        border-bottom:1px solid #e5e7eb;
        padding-bottom:8px;
      ">
        Új kapcsolatfelvétel érkezett
      </h2>

      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
        <tr>
          <td style="padding:6px 0;font-weight:bold;width:120px;">Név:</td>
          <td style="padding:6px 0;">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-weight:bold;">E-mail:</td>
          <td style="padding:6px 0;">${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-weight:bold;">Telefon:</td>
          <td style="padding:6px 0;">${escapeHtml(phoneRaw)}</td>
        </tr>
      </table>

      <div style="
        background:#f9fafb;
        border-left:4px solid #facc15;
        padding:12px 14px;
        border-radius:6px;
      ">
        <p style="margin:0 0 6px;font-weight:bold;">Üzenet:</p>
        <p style="margin:0;white-space:pre-wrap;">
          ${escapeHtml(message)}
        </p>
      </div>

      <p style="
        margin-top:20px;
        font-size:12px;
        color:#777777;
      ">
        Ez az üzenet a refbastya.hu weboldal kapcsolatfelvételi űrlapján keresztül érkezett.
      </p>
    </div>
  </div>
`;

    await transporter.sendMail({
      from: `"Kapcsolat" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject,
      replyTo: email,
      text,
      html,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("[mail] send error:", err);
    return res.status(500).json({ ok: false, error: "Szerver hiba." });
  }
});

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default router;
