import express from "express";
import qr from "qrcode";
import cors from "cors";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3200;;

// Create a body for URL Encoding request.
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/json
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Serve static files like HTML, CSS, JS
app.use(express.static('public'));

app.get("/generate", async (req, res) => {
    const { data } = req.query;
    if (!data) {
        return res.status(400).send("Missing data");
    }

    try {
        const qrCodeImage = await qr.toDataURL(data);
        res.send(qrCodeImage);
    } catch (err) {
        res.status(500).send("Error generating QR Code");
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})