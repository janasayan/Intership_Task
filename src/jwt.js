const jwt = require('jsonwebtoken');

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9jdG9yLmNsaXJuZXQuY29tIiwiYXVkIjoiaHR0cHM6XC9cL2RvY3Rvci5jbGlybmV0LmNvbSIsInVzZXJkZXRhaWwiOnsidXNlcl9tYXN0ZXJfaWQiOiI4NzkiLCJ1c2VybmFtZSI6Ijc5ODAyNDQ5MjMiLCJjbGllbnQiOiIxLDYiLCJjbGllbnRfaWRzIjoiMSw2IiwiZ3JvdXBfaWRzIjowfSwiaWF0IjoxNjU0ODUwMTA2LCJleHAiOjE2NTQ5NTgxMDZ9.AVb4-1B8_CO-G8ekwkJbNENp-Utho0f72ZUcTSA8E0s";

const decoded = jwt.decode(token)

console.log(decoded);

const iat = decoded.iat
const exp = decoded.exp

const iDate = new Date(iat * 1000);
const eDate = new Date(exp * 1000);
const curr = new Date();

if(iDate<curr && curr<eDate)
    console.log("Valid")
else
    console.log("Not Valid")
