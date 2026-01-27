import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ ok: false, error: "Hiányzó mező." });
    }
    if (message.length > 2000) {
      return res.status(400).json({ ok: false, error: "Túl hosszú üzenet." });
    }

    // Transport (példa Gmail SMTP-vel — élesben inkább szolgáltató: Mailgun/SendGrid)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 't0csa91@gmail.com', // pl. bastyaidosotthon@gmail.com
        pass: 'esbs okwt vbsy owtl', // app password
      },
    });

    await transporter.sendMail({
      from: `"Weboldal kapcsolat" <${'t0csa91@gmail.com'}>`,
      to: process.env.MAIL_TO || 't0csa91@gmail.com',
      subject: `Kapcsolatfelvétel: ${lastName} ${firstName}`,
      replyTo: email,
      text: `Név: ${lastName} ${firstName}\nEmail: ${email}\nTelefon: ${phone}\n\nÜzenet:\n${message}`,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Szerver hiba." });
  }
});

export default router;
