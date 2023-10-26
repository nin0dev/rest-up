'use client';
import Form from '@/components/form';
import QuestionOne from '@/components/questionOne';
import QuestionTwo from '@/components/questionTwo';
import QuestionThree from '@/components/questionThree';

import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main
      className={`text-white ${sora.className} h-screen grid grid-rows-3 grid-cols-3`}
    >
      <Form>
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
      </Form>
    </main>
  );
}
