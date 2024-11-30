import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/itinerary", async (req, res) => {
  const { startDate, endDate, tourType, city } = req.body;

  try {
    // Make a request to the Gemini API
    const geminiResponse = await fetch("https://api.gemini.com/v1/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GEMINI_API}`
      },
      body: JSON.stringify({
        startDate,
        endDate,
        tourType,
        city,
      })
    });

    if (!geminiResponse.ok) {
      return res.status(500).send("Failed to generate itinerary PDF.");
    }

    const pdfBuffer = await geminiResponse.buffer();

    // Send PDF as a response
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="itinerary.pdf"',
    });
    res.send(pdfBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating itinerary.");
  }
});

export default router;
