import visa from '../assets/icons/visa.png';
import master from '../assets/icons/master.png';
import discover from '../assets/icons/discover.png';
import { useEffect, useState } from 'react';

export const setCardsToStorage = (cards) => localStorage.setItem("cards", cards);

export const getCardsFromStorage = () => localStorage.getItem("cards");

export const template = (id, start, end) => id.toString().slice(start, end);

export const navigateTo = (id) => `/cards/${id}/edit`;

export const displayTemp = (id) => id && `
    ${template(id, 0, 4)}
    ${template(id, 4, 8)}
    ${template(id, 8, 12)}
    ${template(id, 12, 16)}
  `;

export const getBrand = id => {
    const firstDigit = id.toString().slice(0, 1);
    return firstDigit === "4" ? visa : firstDigit === "5" ? master : discover;
}

export const useDebouncedValue = (value, wait) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => setDebouncedValue(value), wait);
        return () => clearTimeout(id);
    }, [value]);
    
    return debouncedValue;
}
  