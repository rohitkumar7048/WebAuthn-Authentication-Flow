const express = require("express");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const users = {};

function generateChallenge() {
    return crypto.randomBytes(32).toString("base64");
}

app.get("/register-challenge/:username", (req, res) => {

    const username = req.params.username;

    const challenge = generateChallenge();

    users[username] = {
        challenge: challenge
    };

    res.json({
        challenge: challenge,
        rp: { name: "SecureLabApp" },
        user: {
            id: Buffer.from(username).toString("base64"),
            name: username,
            displayName: username
        }
    });

});

app.post("/register", (req, res) => {

    const { username, credential } = req.body;

    users[username].credential = credential;

    res.json({ status: "registered" });

});

app.get("/login-challenge/:username", (req, res) => {

    const username = req.params.username;

    const challenge = generateChallenge();

    users[username].challenge = challenge;

    res.json({
        challenge: challenge,
        credentialId: users[username].credential.id
    });

});

app.post("/login", (req, res) => {

    const { username } = req.body;

    if (users[username]) {
        res.json({ status: "authenticated" });
    } else {
        res.json({ status: "failed" });
    }

});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});