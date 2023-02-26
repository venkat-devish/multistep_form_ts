import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirstStep: boolean = currentIndex === 0;
  const isLastStep: boolean = currentIndex === steps.length;

  function next(idx: number) {
    setCurrentIndex((currIdx) => {
      if (currIdx >= steps.length - 1) return currIdx;
      return currIdx + 1;
    });
  }

  function prev(idx: number) {
    setCurrentIndex((currIdx) => {
      if (currIdx <= 0) return currIdx;
      return currIdx - 1;
    });
  }

  function goTo(idx: number) {
    setCurrentIndex(idx);
  }

  return [
    currentIndex,
    steps[currentIndex],
    next,
    prev,
    goTo,
    isFirstStep,
    isLastStep,
  ];
}
