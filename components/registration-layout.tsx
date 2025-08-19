import Image from 'next/image';
import React from 'react';

type RegistrationLayoutProps = {
  children: React.ReactNode;
};

export default function RegistrationLayout({ children }: RegistrationLayoutProps) {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundColor: '#3366FF',
        backgroundImage: 'url(/images/background.jpg)', // Reusing the blue pattern
        backgroundRepeat: 'repeat',
      }}
    >
      <main className="w-full max-w-7xl h-auto md:h-[90vh] md:max-h-[800px] flex flex-col md:flex-row bg-white/50 rounded-4xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white/20">
        
        {/* Left Side: Form Content */}
        <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col p-6 sm:p-8 lg:p-12 overflow-y-auto">
          {children}
        </div>

        {/* Right Side: Image Panel */}
        <div className="hidden md:flex md:w-1/2 lg:w-[55%] relative overflow-hidden rounded-l-4xl border-l-4 border-yellow-300">
          {/* Patterned Background */}
          <div
            className="absolute inset-0 bg-gray-100"
            style={{
              backgroundImage: 'url(/images/registar_pattern.svg)',
              backgroundSize: '300px',
              opacity: 0.8,
            }}
          ></div>
          
          {/* Girl Image */}
          <Image
            src="/images/Girl_writing.png"
            alt="Student writing"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-10"
            priority
          />
        </div>
      </main>
    </div>
  );
}