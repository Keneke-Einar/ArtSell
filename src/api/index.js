import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);

function addNewPost(postId, posTitle, postAuthor, postPrice, postPictureURL) {
  const db = getDatabase();
  const refNewPost = ref(db, "posts/" + postId);

  set(refNewPost, {
    title: posTitle,
    author: postAuthor,
    price: postPrice,
    picture: postPictureURL,
  });
}

addNewPost(
  "1",
  "Ring Of Mordor",
  "Someone",
  "400",
  "https://static.wikia.nocookie.net/lotr/images/f/fb/3ifu.jpg/revision/latest?cb=20130423140938&path-prefix=ru"
);
