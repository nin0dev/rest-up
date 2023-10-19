import QuestionOne from '@/components/questionOne';
import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div
      className={`text-white ${sora.className} h-screen grid grid-rows-3 grid-cols-3`}
    >
      <QuestionOne />
    </div>
  );
}
