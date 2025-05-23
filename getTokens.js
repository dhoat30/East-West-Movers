require('dotenv').config();

const { google } = require('googleapis');
// Load credentials from the Cloud Console
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
 process.env.GOOGLE_CLIENT_SECRET, // Client Secret
  "http://localhost:3000" // Redirect URI
);

// Replace this with the actual authorization code
const code = decodeURIComponent("4/0AQSTgQHgtIsYrGIqt0GFN5k_8lxtuCFvrS6KdY8TXjrFnzVx373TAi2XCB4k2LbPcayzNA");

async function getTokens() {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Tokens:', tokens);
    // Save the refresh token securely for future use
  } catch (error) {
    console.error('Error retrieving tokens:', error);
  }
}

getTokens();

console.log("google client id", process.env.GOOGLE_CLIENT_ID)