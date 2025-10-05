'use client';

import { useState } from 'react';

interface PhoneAppProps {
  onClose: () => void;
  onCall9110: () => void;
}

export default function PhoneApp({ onClose, onCall9110 }: PhoneAppProps) {
  const [dialNumber, setDialNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);

  const handleNumberClick = (num: string) => {
    if (dialNumber.length < 15) {
      setDialNumber(dialNumber + num);
    }
  };

  const handleDelete = () => {
    setDialNumber(dialNumber.slice(0, -1));
  };

  const handleCall = () => {
    if (dialNumber === '#9110' || dialNumber === '9110') {
      setIsCalling(true);
      onCall9110();
    }
  };

  if (isCalling) {
    return (
      <div className="w-full h-full bg-green-600 flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-5xl">👮</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">#9110</h2>
          <p className="text-lg">警察相談専用電話</p>
          <p className="text-sm mt-4 opacity-90">発信中...</p>
        </div>
        <div className="mt-12 bg-white/20 rounded-2xl p-6 mx-6 max-w-sm">
          <h3 className="font-bold mb-2">📞 相談できる内容</h3>
          <ul className="text-sm space-y-1 opacity-90">
            <li>• 投資詐欺の相談</li>
            <li>• ロマンス詐欺の被害</li>
            <li>• 不審な金銭要求</li>
            <li>• その他の犯罪相談</li>
          </ul>
          <p className="text-xs mt-4 opacity-75">
            受付時間：平日 8:30-17:15<br />
            緊急の場合は110番へ
          </p>
        </div>
        <button
          onClick={() => {
            setIsCalling(false);
            setDialNumber('');
          }}
          className="mt-12 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-3xl"
        >
          📞
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* ヘッダー */}
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={onClose} className="text-2xl">←</button>
        <h1 className="text-xl font-semibold">電話</h1>
        <div className="w-6"></div>
      </div>

      {/* ディスプレイ */}
      <div className="p-8">
        <div className="text-center">
          <div className="text-3xl font-light h-12 flex items-center justify-center">
            {dialNumber || '番号を入力'}
          </div>
          {dialNumber === '#9110' && (
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                ⚠️ 警察相談専用電話<br />
                詐欺被害の相談ができます
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ダイヤルパッド */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 max-w-xs w-full px-8">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="aspect-square bg-gray-100 rounded-full flex items-center justify-center text-2xl font-light hover:bg-gray-200 active:bg-gray-300"
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* アクションボタン */}
      <div className="p-8 flex justify-center gap-8">
        <button
          onClick={handleDelete}
          disabled={!dialNumber}
          className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl disabled:opacity-30"
        >
          ⌫
        </button>
        <button
          onClick={handleCall}
          disabled={!dialNumber}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl disabled:opacity-30"
        >
          📞
        </button>
      </div>

      {/* 推奨ダイヤル */}
      <div className="p-4 bg-yellow-50 border-t border-yellow-200">
        <button
          onClick={() => setDialNumber('#9110')}
          className="w-full text-left p-3 bg-white rounded-lg border border-yellow-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
              👮
            </div>
            <div className="flex-1">
              <div className="font-semibold text-blue-800">#9110</div>
              <div className="text-xs text-gray-600">警察相談専用電話 - 詐欺被害の相談</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
