# WebAuthn Authentication Demo

This project demonstrates the implementation of **Web Authentication (WebAuthn)** using a **Node.js server and browser WebAuthn API**.  
WebAuthn enables **secure passwordless authentication** using **public-key cryptography**.

---

# Overview

WebAuthn is a modern authentication standard developed by the **FIDO Alliance and W3C**.  
It allows users to authenticate using **biometrics, security keys, or device-based passkeys** instead of traditional passwords.

In this project:

- A **Node.js server** generates authentication challenges.
- The **browser WebAuthn API** interacts with the authenticator.
- The authenticator creates a **public-private key pair**.
- The server stores only the **public key**.

This ensures **strong security and protection against phishing attacks**.

---

# Project Structure
webauthn-demo
│
├── server.js
├── package.json
├── node_modules
│
└── public
├── index.html
└── script.js


---

# Architecture

WebAuthn involves three main components:

1. **Client (Browser)**
2. **Authenticator (Security Key / Biometric Device)**
3. **Server (Relying Party)**

Authentication is performed using a **challenge–response mechanism**.



User → Browser → Server
↓
Generate Challenge
↓
Authenticator Signs Challenge
↓
Server Verifies Signature

---

# WebAuthn Authentication Flow

## Registration (Sign-Up)

1. User enters username.
2. Server generates a **random challenge**.
3. Browser calls `navigator.credentials.create()`.
4. Authenticator generates **public/private key pair**.
5. Public key is sent to server.
6. Private key is securely stored in the user device.

---

## Authentication (Login)

1. User enters username.
2. Server generates a new **challenge**.
3. Browser calls `navigator.credentials.get()`.
4. Authenticator signs the challenge using the **private key**.
5. Server verifies the signature using the **stored public key**.

---

# Installation and Setup

### 1. Clone the repository
git clone https://github.com/rohitkumar7048/WebAuthn-Authentication-Flow

cd webauthn-demo


### 2. Install dependencies
npm install

### 3. Run the server
node server.js


### 4. Open in browser
http://localhost:3000


---

# Demo Steps

1. Enter a **username**.
2. Click **Register**.
3. Browser will prompt to **create a passkey**.
4. Click **Create** to generate authentication keys.
5. Click **Login** to authenticate using the stored passkey.

---

# Symmetric vs Asymmetric Authentication Cost

| Feature | Symmetric Authentication | Asymmetric Authentication |
|------|------|------|
| Key Type | Single shared key | Public + Private key |
| Example | HMAC, JWT | WebAuthn, RSA, ECC |
| Speed | Faster | Slower |
| CPU Cost | Low | Higher |
| Security | Medium | Very High |
| Key Management | Difficult | Easier |

---

# Security Advantages of WebAuthn

- Passwordless authentication
- Phishing resistant
- No password database breaches
- Private key never leaves device
- Supports biometric authentication

---

# Technologies Used

- Node.js
- Express.js
- WebAuthn API
- JavaScript
- HTML

---

# Conclusion

This project demonstrates how **WebAuthn provides secure passwordless authentication using asymmetric cryptography**.  
Although asymmetric authentication has a slightly higher computational cost compared to symmetric authentication, it offers **significantly stronger security and better protection against modern cyber attacks**.

---
