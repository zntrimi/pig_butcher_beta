'use client';

import { instagramProfile } from '@/lib/story-data';

interface InstagramAppProps {
  onClose: () => void;
  onImageSearch: () => void;
}

export default function InstagramApp({ onClose, onImageSearch }: InstagramAppProps) {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* ヘッダー */}
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={onClose} className="text-2xl">←</button>
        <h1 className="text-xl font-semibold">Instagram</h1>
        <div className="w-6"></div>
      </div>

      {/* プロフィール部分 */}
      <div className="flex-1 overflow-y-auto">
        {/* プロフィール画像とステータス */}
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
              👤
            </div>
            <div className="flex-1 flex justify-around text-center">
              <div>
                <div className="font-bold text-lg">{instagramProfile.posts.length}</div>
                <div className="text-gray-600 text-sm">投稿</div>
              </div>
              <div>
                <div className="font-bold text-lg">{instagramProfile.followers}</div>
                <div className="text-gray-600 text-sm">フォロワー</div>
              </div>
              <div>
                <div className="font-bold text-lg">{instagramProfile.following}</div>
                <div className="text-gray-600 text-sm">フォロー中</div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="font-bold text-base">{instagramProfile.displayName}</h2>
            <p className="text-sm text-gray-600 mt-1">{instagramProfile.bio}</p>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-gray-200 text-black font-semibold py-2 rounded-lg">
              フォロー中
            </button>
            <button className="flex-1 bg-gray-200 text-black font-semibold py-2 rounded-lg">
              メッセージ
            </button>
          </div>

          {/* 画像検索ボタン（教材用） */}
          <button
            onClick={onImageSearch}
            className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
          >
            🔍 この人物について調べる
          </button>
        </div>

        {/* 投稿グリッド */}
        <div className="border-t pt-2">
          <div className="grid grid-cols-3 gap-1">
            {instagramProfile.posts.map((post) => (
              <div key={post.id} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                <span className="text-4xl">
                  {post.id === '1' ? '🚗' : post.id === '2' ? '⌚' : '✈️'}
                </span>
                <div className="absolute bottom-1 right-1 text-xs text-white drop-shadow-md">
                  ❤️ {post.likes}
                </div>
              </div>
            ))}
            <div className="aspect-square bg-gray-200 flex items-center justify-center text-4xl">💎</div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center text-4xl">🏖️</div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center text-4xl">🍾</div>
          </div>
        </div>
      </div>
    </div>
  );
}
