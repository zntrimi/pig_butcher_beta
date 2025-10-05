'use client';

import { Message, lineMessages } from '@/lib/story-data';

interface LineAppProps {
  onClose: () => void;
  currentMessageIndex: number;
  onMessageClick: (messageId: string) => void;
}

export default function LineApp({ onClose, currentMessageIndex, onMessageClick }: LineAppProps) {
  const displayedMessages = lineMessages.slice(0, currentMessageIndex + 1);

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* ヘッダー */}
      <div className="bg-green-500 text-white p-4 flex items-center gap-3">
        <button onClick={onClose} className="text-2xl">←</button>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl">
          👤
        </div>
        <div className="flex-1">
          <h2 className="font-semibold">David Chen</h2>
          <p className="text-xs opacity-90">オンライン</p>
        </div>
      </div>

      {/* メッセージリスト */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {displayedMessages.map((message, index) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.sender === 'grandma' ? 'justify-end' : 'justify-start'}`}
            onClick={() => {
              // 特定のメッセージをクリックすると警告が表示される
              if (
                message.id === '8' || // 恋愛感情を示すメッセージ
                message.id === '12' || // 怪しい投資リンク
                message.id === '20' || // 感情的操作
                message.id === '24' // 出金を渋る
              ) {
                onMessageClick(message.id);
              }
            }}
          >
            <div className={`max-w-[70%] ${message.sender === 'grandma' ? 'bg-green-500 text-white' : 'bg-white'} rounded-2xl p-3 shadow`}>
              <p className="text-sm break-words whitespace-pre-wrap">{message.text}</p>
              {message.image && (
                <div className="mt-2 bg-gray-200 rounded-lg p-2 text-center">
                  <div className="text-xs text-gray-600">📊 利益画像</div>
                  <div className="text-sm font-bold mt-1">
                    {message.id === '13' && '¥120,000'}
                    {message.id === '17' && '¥1,000,000'}
                    {message.id === '22' && '¥4,000,000'}
                  </div>
                </div>
              )}
              <p className="text-xs mt-1 opacity-60">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 入力欄（無効化） */}
      <div className="border-t p-4 bg-white">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="メッセージを入力"
            disabled
            className="flex-1 bg-transparent outline-none text-gray-400"
          />
          <button disabled className="text-gray-400">📎</button>
        </div>
      </div>
    </div>
  );
}
