import d from "./settingsFirebase";

import { initializeApp } from "firebase/app";
import "firebase/auth";
// Initialize Firebase
const app = initializeApp(d);

const auth  = app.auth();

export {auth}