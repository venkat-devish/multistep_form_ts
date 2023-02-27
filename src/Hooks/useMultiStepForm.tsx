import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirstStep: boolean = currentIndex === 0;
  const isLastStep: boolean = currentIndex === steps.length - 1;

  function next() {
    setCurrentIndex((currIdx) => {
      if (currIdx >= steps.length - 1) return currIdx;
      return currIdx + 1;
    });
  }

  function prev() {
    setCurrentIndex((currIdx) => {
      if (currIdx <= 0) return currIdx;
      return currIdx - 1;
    });
  }

  function goTo(idx: number) {
    setCurrentIndex(idx);
  }

  return {
    currentIndex,
    step: steps[currentIndex],
    steps,
    next,
    prev,
    goTo,
    isFirstStep,
    isLastStep,
  };
}
