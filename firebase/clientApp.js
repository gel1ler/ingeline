import { initializeApp } from "firebase/app"


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://ingeline-4766c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

initializeApp(firebaseConfig)

import {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    changeProduct,
    getNews,
    getNewsPiece,
    createNewsPiece,
    deleteNewsPiece,
} from './database'
import { getImages, getFolders } from './storage'

export {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    getImages,
    getFolders,
    getNews,
    getNewsPiece,
    createNewsPiece,
    deleteNewsPiece,
    changeProduct
}