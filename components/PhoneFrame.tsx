'use client';

import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  const now = new Date();
  const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="relative w-full max-w-[375px] h-[812px] bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* ノッチ */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

        {/* ステータスバー */}
        <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-8 text-white text-sm z-40">
          <span className="font-semibold">{timeString}</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="w-6 h-3 border-2 border-white rounded-sm relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-2 bg-white"></div>
              <div className="absolute left-0.5 top-1/2 transform -translate-y-1/2 w-3 h-1.5 bg-white"></div>
            </div>
          </div>
        </div>

        {/* スクリーン */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {children}
        </div>

        {/* ホームインジケーター */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
}
