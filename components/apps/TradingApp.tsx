'use client';

interface TradingAppProps {
  onClose: () => void;
  onSuspiciousAction: () => void;
}

export default function TradingApp({ onClose, onSuspiciousAction }: TradingAppProps) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 flex flex-col text-white">
      {/* ヘッダー */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onClose} className="text-2xl">←</button>
        <h1 className="text-xl font-semibold">Crypto Invest Pro</h1>
        <div className="w-6"></div>
      </div>

      {/* 残高表示 */}
      <div className="p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <div className="text-sm opacity-75 mb-2">総資産</div>
          <div className="text-4xl font-bold mb-4">¥4,000,000</div>
          <div className="flex gap-4 text-sm">
            <div>
              <div className="opacity-75">入金額</div>
              <div className="font-semibold text-green-400">¥360,000</div>
            </div>
            <div>
              <div className="opacity-75">利益</div>
              <div className="font-semibold text-green-400">+¥3,640,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* チャート（偽物） */}
      <div className="px-6 py-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
          <div className="text-sm mb-2">BTC/USD</div>
          <div className="flex items-end h-32 gap-2">
            {[60, 70, 65, 75, 80, 85, 90, 95, 100, 105, 110, 115].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* 取引ボタン */}
      <div className="px-6 py-4 space-y-3">
        <button
          onClick={onSuspiciousAction}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-xl"
        >
          💰 出金する
        </button>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl">
          💵 入金する
        </button>
      </div>

      {/* 注意事項 */}
      <div className="px-6 py-4 mt-auto">
        <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-3">
          <p className="text-xs text-yellow-200">
            ⚠️ このアプリは金融庁に未登録の業者です。<br />
            実際の投資は行われておらず、画面上の数字は偽装されています。
          </p>
        </div>
      </div>
    </div>
  );
}
