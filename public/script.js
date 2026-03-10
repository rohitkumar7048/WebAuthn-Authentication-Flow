async function register() {

const username = document.getElementById("username").value;

const res = await fetch(`/register-challenge/${username}`);
const data = await res.json();

const publicKey = {

challenge: Uint8Array.from(atob(data.challenge), c => c.charCodeAt(0)),

rp: data.rp,

user: {
    id: Uint8Array.from(atob(data.user.id), c => c.charCodeAt(0)),
    name: data.user.name,
    displayName: data.user.displayName
},

pubKeyCredParams: [
    { type: "public-key", alg: -7 }
],

timeout: 60000,

attestation: "direct"

};

const credential = await navigator.credentials.create({ publicKey });

await fetch("/register", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
username: username,
credential: credential
})
});

alert("Registration successful");

}

async function login() {

const username = document.getElementById("username").value;

const res = await fetch(`/login-challenge/${username}`);
const data = await res.json();

const publicKey = {

challenge: Uint8Array.from(atob(data.challenge), c => c.charCodeAt(0)),

allowCredentials: [{
type: "public-key",
id: Uint8Array.from(atob(data.credentialId), c => c.charCodeAt(0))
}],

timeout: 60000

};

const credential = await navigator.credentials.get({ publicKey });

await fetch("/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
username: username,
credential: credential
})
});

alert("Login successful");

}