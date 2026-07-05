import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* 
Merged tailwind safetly
Ignores(false, null, undefined 0)
Supports array and objects
Prevents tailwind conflicts
Cleaner conditional classes
*/
export function cn(...input: ClassValue[]){
    return twMerge(clsx(...input));
}

export function formatTime(dateInput : string | Date){
    const now = new Date();
    const past = new Date(dateInput);
    const diffInSeconds = Math.floor((+now - +past) / 1000); // The + prefix coerces the Date object into a number timestamp

    if(diffInSeconds < 60) return 'now';

    const minutes = Math.floor(diffInSeconds / 60);
    if(minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);
    if(minutes < 60) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    if(days < 7) return `${days}d ago`;

    const weeks = Math.floor(days / 7);
    if(weeks < 4) return `${weeks}w ago`

    const months = Math.floor(days / 30);
    if(months < 12) return `${months}m ago`;

    const years = Math.floor(days / 365);
    return `${years}y ago`;
}