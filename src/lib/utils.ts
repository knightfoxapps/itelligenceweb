import { clsx, type ClassValue } from "clsx";

/** Merge Tailwind classes with conflict resolution */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
