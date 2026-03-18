import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

import ProcessSection from '@/components/ProcessSection';

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center bg-transparent" />,
  ssr: true,
});

const Technologies = dynamic(() => import('@/components/Technologies'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center bg-transparent" />,
  ssr: true,
});


export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Hero />
      <ProcessSection />
      <Portfolio />
      <Technologies />
    </main>
  );
}