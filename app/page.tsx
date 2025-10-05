'use client';

import { useState } from 'react';
import PhoneFrame from '@/components/PhoneFrame';
import HomeScreen from '@/components/HomeScreen';
import InstagramApp from '@/components/apps/InstagramApp';
import LineApp from '@/components/apps/LineApp';
import BrowserApp from '@/components/apps/BrowserApp';
import PhotosApp from '@/components/apps/PhotosApp';
import PhoneApp from '@/components/apps/PhoneApp';
import TradingApp from '@/components/apps/TradingApp';
import WarningModal from '@/components/WarningModal';
import { warnings } from '@/lib/story-data';

type AppType = 'home' | 'instagram' | 'line' | 'browser' | 'photos' | 'phone' | 'trading';

export default function Home() {
  const [currentApp, setCurrentApp] = useState<AppType>('home');
  const [currentWarning, setCurrentWarning] = useState<string | null>(null);
  const [discoveredWarnings, setDiscoveredWarnings] = useState<Set<string>>(new Set());
  const [currentMessageIndex, setCurrentMessageIndex] = useState(28); // すべてのメッセージを表示
  const [gameStarted, setGameStarted] = useState(false);

  const showWarning = (warningId: string) => {
    if (!discoveredWarnings.has(warningId)) {
      setCurrentWarning(warningId);
      setDiscoveredWarnings(new Set([...discoveredWarnings, warningId]));
    }
  };

  const handleAppOpen = (app: string) => {
    setCurrentApp(app as AppType);
  };

  const handleMessageClick = (messageId: string) => {
    if (messageId === '8') {
      showWarning('emotional_manipulation');
    } else if (messageId === '12') {
      showWarning('move_to_private');
    } else if (messageId === '20') {
      showWarning('emotional_manipulation');
    } else if (messageId === '24') {
      showWarning('withdrawal_delay');
    }
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
            ロマンス詐欺防止教材
          </h1>
          <div className="mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-3">⚠️ これは教育目的の教材です</h2>
              <p className="text-gray-700 leading-relaxed">
                この教材では、おばあちゃんのスマートフォンを通じて、ロマンス詐欺（Pig Butchering）の手口を学びます。
                どこで気づけたか、どう防げたかを理解することで、実際の被害を防ぐ知識を身につけることができます。
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-bold text-gray-800">スマホを探索</h3>
                  <p className="text-sm text-gray-600">各アプリを開いて、詐欺の痕跡を探しましょう</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h3 className="font-bold text-gray-800">警告サインを発見</h3>
                  <p className="text-sm text-gray-600">怪しい箇所をクリックすると解説が表示されます</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-bold text-gray-800">相談窓口を学ぶ</h3>
                  <p className="text-sm text-gray-600">#9110で警察に相談できることを覚えましょう</p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setGameStarted(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            教材を始める
          </button>
        </div>
      </div>
    );
  }

  return (
    <main>
      <PhoneFrame>
        {currentApp === 'home' && (
          <HomeScreen
            onAppOpen={handleAppOpen}
            unreadMessages={5}
          />
        )}
        {currentApp === 'instagram' && (
          <InstagramApp
            onClose={() => setCurrentApp('home')}
            onImageSearch={() => showWarning('instagram_search')}
          />
        )}
        {currentApp === 'line' && (
          <LineApp
            onClose={() => setCurrentApp('home')}
            currentMessageIndex={currentMessageIndex}
            onMessageClick={handleMessageClick}
          />
        )}
        {currentApp === 'browser' && (
          <BrowserApp
            onClose={() => setCurrentApp('home')}
            onFsaSearch={() => showWarning('fsa_check')}
          />
        )}
        {currentApp === 'photos' && (
          <PhotosApp
            onClose={() => setCurrentApp('home')}
            onPhotoInspect={() => showWarning('fake_profits')}
          />
        )}
        {currentApp === 'phone' && (
          <PhoneApp
            onClose={() => setCurrentApp('home')}
            onCall9110={() => showWarning('help_9110')}
          />
        )}
        {currentApp === 'trading' && (
          <TradingApp
            onClose={() => setCurrentApp('home')}
            onSuspiciousAction={() => showWarning('withdrawal_delay')}
          />
        )}
      </PhoneFrame>

      {currentWarning && (
        <WarningModal
          warning={warnings[currentWarning]}
          onClose={() => setCurrentWarning(null)}
        />
      )}

      {/* 進捗インジケーター */}
      <div className="fixed bottom-4 left-4 bg-white rounded-full shadow-lg px-4 py-2 text-sm">
        <span className="font-semibold">発見した警告:</span> {discoveredWarnings.size} / {Object.keys(warnings).length}
      </div>
    </main>
  );
}
