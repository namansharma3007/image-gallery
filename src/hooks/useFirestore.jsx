import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let unsubscribe = null;
  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(
          collection(db, collectionName),
          orderBy("createdAt", "desc")
        );
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const createdAt = doc.data().createdAt.toDate();
            const userEmail = doc.data().userEmail;
            images.push({ imageUrl, createdAt, userEmail });
          });
          setDocs(images);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getData();

    return () => unsubscribe && unsubscribe();
  }, [collectionName]);

  return {
    docs,
    isLoading,
  };
};
