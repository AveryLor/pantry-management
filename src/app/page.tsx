// src/app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';
import styles from '../styles/Home.module.css';

interface PantryItem {
  id: string;
  name: string;
  quantity: number;
}

export default function Home() {
  const [pantryItems, setPantryItems] = useState<PantryItem[]>([]);

  useEffect(() => {
    const fetchPantryItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'pantry'));
      const items: PantryItem[] = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as PantryItem);
      });
      setPantryItems(items);
    };

    fetchPantryItems();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Pantry Items</h1>
      <ul>
        {pantryItems.map((item) => (
          <li key={item.id}>
            {item.name}: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
