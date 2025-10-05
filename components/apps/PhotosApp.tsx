'use client';

import { useState } from 'react';

interface PhotosAppProps {
  onClose: () => void;
  onPhotoInspect: () => void;
}

interface Photo {
  id: string;
  type: 'profit' | 'normal';
  amount?: string;
  date: string;
}

const photos: Photo[] = [
  { id: '1', type: 'profit', amount: '¥4,000,000', date: '2024-01-30' },
  { id: '2', type: 'profit', amount: '¥1,000,000', date: '2024-01-25' },
  { id: '3', type: 'profit', amount: '¥120,000', date: '2024-01-20' },
  { id: '4', type: 'normal', date: '2024-01-15' },
  { id: '5', type: 'normal', date: '2024-01-10' },
];

export default function PhotosApp({ onClose, onPhotoInspect }: PhotosAppProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* ヘッダー */}
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={onClose} className="text-2xl">←</button>
        <h1 className="text-xl font-semibold">写真</h1>
        <div className="w-6"></div>
      </div>

      {selectedPhoto ? (
        /* 写真詳細表示 */
        <div className="flex-1 bg-black flex flex-col">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600">{selectedPhoto.date}</div>
                <div className="text-xl font-bold mt-2">投資利益</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-500 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">
                    {selectedPhoto.amount}
                  </div>
                  <div className="text-sm text-green-600">利益確定</div>
                  <div className="text-xs text-gray-500 mt-4">
                    Crypto Invest Pro
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  onPhotoInspect();
                }}
                className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg"
              >
                🔍 この画像を詳しく調べる
              </button>
            </div>
          </div>
          <button
            onClick={() => setSelectedPhoto(null)}
            className="bg-gray-800 text-white py-4"
          >
            閉じる
          </button>
        </div>
      ) : (
        /* 写真グリッド */
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">最近の項目</h2>
            <div className="grid grid-cols-3 gap-1">
              {photos.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden"
                >
                  {photo.type === 'profit' ? (
                    <div className="text-center p-2">
                      <div className="text-xs font-bold text-green-700">
                        {photo.amount}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">📊</div>
                    </div>
                  ) : (
                    <span className="text-3xl">
                      {photo.id === '4' ? '🌸' : '🍜'}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
