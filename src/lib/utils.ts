import { clsx } from "clsx";
import { type ClassValue } from "clsx"; // Type for class name inputs

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}