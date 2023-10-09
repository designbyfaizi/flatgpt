import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const serviceAccount: admin.ServiceAccount = {
  type: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_TYPE!,
  project_id: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PROJECT_ID!,
  private_key_id: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PRIVATE_KEY_ID!,
  private_key: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PRIVATE_KEY!,
  client_email: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_CLIENT_EMAIL!,
  client_id: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_CLIENT_ID!,
  auth_uri: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_AUTH_URI!,
  token_uri: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_TOKEN_URI!,
  auth_provider_x509_cert_url:
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY_AUTH_CERT_URL!,
  client_x509_cert_url:
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY_CLIENT_CERT_URL!,
  universe_domain: process.env.FIREBASE_SERVICE_ACCOUNT_KEY_UNIVERSE_DOMAIN!,
};

// const serviceAccount = JSON.parse(
//   process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
// );

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
