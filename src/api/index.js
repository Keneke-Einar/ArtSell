import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const db = getDatabase(app);

function addNewPost(postId, posTitle, postAuthor, postPrice, postPictureURL) {
  const refNewPost = ref(db, "posts/" + postId);

  set(refNewPost, {
    title: posTitle,
    author: postAuthor,
    price: postPrice,
    picture: postPictureURL,
  });
}

function readPostData(postId) {
  const postRef = ref(db, "posts/" + postId);

  onValue(postRef, (snapshot) => {
    const postData = snapshot.val();
    const { title, author, price, picture } = postData;
    const post = { title, author, price, picture };
    console.log(post);
  });
}
export { addNewPost, readPostData };