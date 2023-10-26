'use client';
import * as React from 'react';
import { useState } from 'react';

import NextButton from './nextButton';
import PrevButton from './prevButton';
import SubmitButton from '@/components/submitButton';
import Submit from '@/components/submit';

export default function Form({ children }: { children: any }) {
  children = [...children];
  const [step, setStep] = useState(0);
  const nextStep = () => {
    if (step < children.length) {
      setStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };
  return (
    <>
      {children[step]}
      {step < children.length && step > 0 && (
        <PrevButton onClick={prevStep}></PrevButton>
      )}
      {step < children.length - 1 && (
        <NextButton onClick={nextStep}></NextButton>
      )}
    </>
  );
}
