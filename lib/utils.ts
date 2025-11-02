import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// gabung className + resolve konflik util Tailwind, tanpa 'any' norak
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
