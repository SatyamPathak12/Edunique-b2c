import Image from 'next/image'
import React from 'react'

type AuthLayoutProps = {
  children: React.ReactNode
  leftPanelTitle: string
  leftPanelDescription: string
}

const COLORS = {
  primaryBlue: '#3366FF',
  primaryPink: '#f41e85',
  lightPink: '#FFDAE5',
  yellowAccent: '#f8bd00',
}

export default function AuthLayout({ children, leftPanelTitle, leftPanelDescription }: AuthLayoutProps) {
  return (
    // Main container with full screen height and custom blue patterned background
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        backgroundColor: COLORS.primaryBlue,
        backgroundImage: 'url(/images/background.jpg)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}>
      {/* Central content card with large rounded corners and shadow */}
      <div className="bg-white rounded-4xl  font-main shadow-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl h-auto md:h-[80vh] md:min-h-[500px] md:max-h-[650px]">
        
        <div
          className="w-full md:w-1/2 relative text-white p-8 lg:p-12 flex flex-col justify-between min-h-[400px] md:min-h-0"
          style={{ backgroundColor: COLORS.primaryPink }}>
          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(/images/grid.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '100%',
            }}></div>

          {/* Text Content */}
          <div className="relative z-10">
            <h1 className="text-2xl font-semibold mb-3">{leftPanelTitle}</h1>
            <p className="text-xs max-w-[45ch] leading-relaxed">{leftPanelDescription}</p>
          </div>

          {/* Yellow Curve and Image Container */}
          <div className="absolute bottom-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <div
              className="absolute rounded-full scale-74"
              style={{
                backgroundColor: COLORS.yellowAccent,
                width: '125%',
                height: '150%',
                bottom: '-82%',
                left: '-11%',
              }}></div>
            <Image
              src="/images/teacher-student-main.png"
              alt="Teacher helping student"
              width={764}
              height={505}
              priority
              className="w-full max-w-[34rem] h-auto object-contain drop-shadow-xl absolute bottom-0 -translate-x-1/2 left-1/2"
            />
          </div>
        </div>

        {/* ====================================================================== */}
        {/* Right Section - Content Area                                        */}
        {/* ====================================================================== */}
        <div
          className="w-full md:w-1/2 p-8 lg:py-12 lg:px-20 flex flex-col justify-start"
          style={{ backgroundColor: COLORS.lightPink }}>
          <div className="w-full max-w-md mx-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}