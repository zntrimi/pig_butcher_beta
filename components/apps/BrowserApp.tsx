'use client';

import { useState } from 'react';
import { fsaRegisteredCompanies } from '@/lib/story-data';

interface BrowserAppProps {
  onClose: () => void;
  onFsaSearch: () => void;
}

export default function BrowserApp({ onClose, onFsaSearch }: BrowserAppProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchQuery.includes('金融庁') || searchQuery.includes('登録業者') || searchQuery.includes('Crypto Invest Pro')) {
      setShowResults(true);
      onFsaSearch();
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* ヘッダー */}
      <div className="bg-gray-100 p-4 border-b">
        <div className="flex items-center gap-2 mb-2">
          <button onClick={onClose} className="text-blue-600 text-lg font-semibold">← ホーム</button>
          <div className="flex-1"></div>
          <button className="text-2xl text-gray-400">↻</button>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border">
          <span>🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="検索または Web サイト名を入力"
            className="flex-1 outline-none"
          />
        </div>
      </div>

      {/* コンテンツ */}
      <div className="flex-1 overflow-y-auto p-4">
        {!showResults ? (
          <div>
            <h2 className="text-xl font-bold mb-4">おすすめの検索</h2>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setSearchQuery('金融庁 登録業者');
                  setShowResults(true);
                  onFsaSearch();
                }}
                className="w-full text-left p-4 bg-blue-50 rounded-lg hover:bg-blue-100"
              >
                <div className="font-semibold text-blue-700">💡 金融庁 登録業者</div>
                <div className="text-sm text-gray-600 mt-1">投資業者が正規かどうか確認しましょう</div>
              </button>
              <button
                onClick={() => {
                  setSearchQuery('David Chen インフルエンサー');
                }}
                className="w-full text-left p-4 bg-gray-50 rounded-lg"
              >
                <div className="font-semibold">🔍 この人物について調べる</div>
                <div className="text-sm text-gray-600 mt-1">画像検索で確認しましょう</div>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">金融庁 登録業者一覧</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-blue-800 mb-2">⚠️ 重要な確認事項</h3>
              <p className="text-sm text-blue-700">
                投資業者は必ず金融庁に登録されています。登録されていない業者との取引は違法です。
              </p>
            </div>
            <div className="space-y-2">
              {fsaRegisteredCompanies.map((company, index) => (
                <div key={index} className="p-3 bg-white border rounded-lg">
                  <div className="font-semibold">{company}</div>
                  <div className="text-xs text-green-600 mt-1">✓ 登録済み</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">🚨 検索結果</h3>
              <p className="text-sm text-red-700">
                「Crypto Invest Pro」という業者は金融庁の登録業者一覧に見つかりませんでした。
              </p>
              <p className="text-sm text-red-700 mt-2 font-semibold">
                この業者は無登録の違法業者の可能性があります。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
