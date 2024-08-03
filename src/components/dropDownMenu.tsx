"use client";

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig'; // Adjust path if needed

interface PantryItem {
  id: string;
  name: string;
}

const DropDownMenu: React.FC = () => {
  const [items, setItems] = useState<PantryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>('');

  useEffect(() => {
    const fetchPantryItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'pantryItems'));
        const itemsArray: PantryItem[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name as string,
        }));
        setItems(itemsArray);
      } catch (error) {
        console.error('Error fetching pantry items: ', error);
      }
    };

    fetchPantryItems();
  }, []);

  return (
    <div className="relative">
      <select
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
        className="bg-white border border-gray-300 rounded-lg p-2"
      >
        <option value="" disabled>
          Select a pantry item
        </option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownMenu;
