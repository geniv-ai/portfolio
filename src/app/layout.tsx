import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boo Hyeong-Seok - 프론트엔드 개발자 포트폴리오',
  description: '프론트엔드 개발자 Boo Hyeong-Seok의 포트폴리오 사이트입니다. React, Next.js, TypeScript를 활용한 프로젝트들을 확인해보세요.',
  keywords: ['프론트엔드', '개발자', '포트폴리오', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Boo Hyeong-Seok' }],
  openGraph: {
    title: 'Boo Hyeong-Seok - 프론트엔드 개발자 포트폴리오',
    description: '프론트엔드 개발자 Boo Hyeong-Seok의 포트폴리오 사이트입니다.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
