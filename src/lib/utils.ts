import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const changeSlideIndex = (
  direction: "decrease" | "increase",
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  listLength: number,
  currentIndex: number
) => {
  if (direction === "decrease") {
    if (currentIndex === 0) {
      setIndex(listLength - 1);
    } else {
      setIndex(currentIndex - 1);
    }
  } else {
    if (currentIndex === listLength - 1) {
      setIndex(0);
    } else {
      setIndex(currentIndex + 1);
    }
  }
};
