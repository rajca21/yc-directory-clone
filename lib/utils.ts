import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatViewsNumber(num: number) {
  return num === 0
    ? 'No views'
    : num % 10 === 1
      ? `${num} view`
      : `${num} views`;
}

export function parseServerFunctionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}
