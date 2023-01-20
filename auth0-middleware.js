import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";

dotenv.config();

// Checks if the user's Access Token included in the request is valid. If the token is not valid, the user gets a 401 Authorization error when they try to access the endpoints. The middleware doesn't check if the token has the sufficient scope to access the requested resources.
export const validateAccessToken = auth({
	issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
	audience: process.env.AUTH0_AUDIENCE,
});


