
import { defineConfig } from 'cypress'
require('dotenv').config()

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  env: {
    auth0_email: process.env.AUTH0_EMAIL,
    auth0_password: process.env.AUTH0_PASSWORD,
    auth0_domain: process.env.AUTH0_DOMAIN,
    auth0_audience: process.env.AUTH0_AUDIENCE,
    // auth0_scope: process.env.REACT_APP_AUTH0_SCOPE,
    auth0_client_id: process.env.AUTH0_CLIENT_ID,
    auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
  },
})