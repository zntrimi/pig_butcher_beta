'use client';

interface AppIconProps {
  name: string;
  icon: string;
  color: string;
  onClick: () => void;
  notification?: number;
}

function AppIcon({ name, icon, color, onClick, notification }: AppIconProps) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 w-16 relative">
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg relative`}>
        {icon}
        {notification && notification > 0 && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {notification > 9 ? '9+' : notification}
          </div>
        )}
      </div>
      <span className="text-xs text-white drop-shadow-md">{name}</span>
    </button>
  );
}

interface HomeScreenProps {
  onAppOpen: (app: string) => void;
  unreadMessages: number;
}

export default function HomeScreen({ onAppOpen, unreadMessages }: HomeScreenProps) {
  const now = new Date();
  const dateString = now.toLocaleDateString('ja-JP', {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative">
      {/* 壁紙の背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* 日付と時刻 */}
      <div className="pt-16 px-6 pb-8">
        <div className="text-white text-6xl font-bold drop-shadow-lg">
          {now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }).replace(':', ':')}
        </div>
        <div className="text-white text-lg mt-2 drop-shadow-md">
          {dateString}
        </div>
      </div>

      {/* アプリアイコン */}
      <div className="px-6 grid grid-cols-4 gap-6 mt-8">
        <AppIcon
          name="LINE"
          icon="💬"
          color="bg-green-500"
          onClick={() => onAppOpen('line')}
          notification={unreadMessages}
        />
        <AppIcon
          name="Instagram"
          icon="📷"
          color="bg-gradient-to-br from-purple-500 to-pink-500"
          onClick={() => onAppOpen('instagram')}
        />
        <AppIcon
          name="Safari"
          icon="🧭"
          color="bg-blue-500"
          onClick={() => onAppOpen('browser')}
        />
        <AppIcon
          name="写真"
          icon="🖼️"
          color="bg-gradient-to-br from-yellow-400 to-pink-500"
          onClick={() => onAppOpen('photos')}
        />
        <AppIcon
          name="電話"
          icon="📞"
          color="bg-green-600"
          onClick={() => onAppOpen('phone')}
        />
        <AppIcon
          name="投資アプリ"
          icon="📈"
          color="bg-indigo-600"
          onClick={() => onAppOpen('trading')}
        />
      </div>

      {/* ドック */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="bg-white/30 backdrop-blur-lg rounded-3xl px-6 py-3 flex gap-6">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl">
            📱
          </div>
          <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center text-white text-3xl">
            ⚙️
          </div>
        </div>
      </div>
    </div>
  );
}
