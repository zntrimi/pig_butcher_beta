// ストーリーデータとタイムライン
export interface Message {
  id: string;
  sender: 'grandma' | 'scammer';
  text: string;
  timestamp: string;
  image?: string;
}

export interface Warning {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

// Instagramのストーリー
export const instagramProfile = {
  username: 'david_chen_official',
  displayName: 'David Chen',
  bio: '投資家 | ファイナンシャルアドバイザー | 世界を旅する人生 🌍✈️',
  followers: '125K',
  following: '892',
  posts: '347',
  isVerified: false,
  profileImage: '/images/scammer-profile.jpg',
  posts: [
    { id: '1', image: '/images/luxury-car.jpg', likes: '15.2K' },
    { id: '2', image: '/images/expensive-watch.jpg', likes: '18.5K' },
    { id: '3', image: '/images/private-jet.jpg', likes: '22.1K' },
  ]
};

// LINEチャットのタイムライン
export const lineMessages: Message[] = [
  {
    id: '1',
    sender: 'scammer',
    text: 'こんにちは！Instagramで見かけて、とても素敵な方だと思いメッセージしました😊',
    timestamp: '2024-01-10 14:30'
  },
  {
    id: '2',
    sender: 'grandma',
    text: 'ありがとうございます。どちら様でしょうか？',
    timestamp: '2024-01-10 15:15'
  },
  {
    id: '3',
    sender: 'scammer',
    text: 'David Chenと申します。シンガポールで投資顧問をしています。日本の文化が大好きで、よく日本に来ているんです🗾',
    timestamp: '2024-01-10 15:20'
  },
  {
    id: '4',
    sender: 'grandma',
    text: 'そうなんですね。投資のお仕事をされているんですか。',
    timestamp: '2024-01-10 16:00'
  },
  {
    id: '5',
    sender: 'scammer',
    text: 'はい！多くの人の資産形成を手伝っています。あなたは投資に興味はありますか？',
    timestamp: '2024-01-10 16:05'
  },
  {
    id: '6',
    sender: 'grandma',
    text: '少しだけ貯金がありますが、投資は難しそうで...',
    timestamp: '2024-01-10 17:30'
  },
  {
    id: '7',
    sender: 'scammer',
    text: '大丈夫です！私が丁寧に教えます。まずは小額から始めましょう。今は仮想通貨が熱いですよ📈',
    timestamp: '2024-01-10 17:35'
  },
  {
    id: '8',
    sender: 'scammer',
    text: '実は...あなたと話していて、とても心が惹かれています💕仕事を超えた関係になりたいと思っています',
    timestamp: '2024-01-15 20:00'
  },
  {
    id: '9',
    sender: 'grandma',
    text: 'まあ...私のような者に...',
    timestamp: '2024-01-15 20:30'
  },
  {
    id: '10',
    sender: 'scammer',
    text: '投資で成功したら、一緒に素敵なレストランに行きましょう🍽️✨',
    timestamp: '2024-01-15 20:35'
  },
  {
    id: '11',
    sender: 'grandma',
    text: 'わかりました。少しだけやってみます。',
    timestamp: '2024-01-16 10:00'
  },
  {
    id: '12',
    sender: 'scammer',
    text: 'これが取引プラットフォームのリンクです。まず10万円入金してください👇\nhttps://crypto-invest-pro.fake',
    timestamp: '2024-01-16 10:15'
  },
  {
    id: '13',
    sender: 'scammer',
    text: '素晴らしい！10万円が12万円になりました🎉',
    timestamp: '2024-01-20 15:00',
    image: '/images/profit-fake-1.jpg'
  },
  {
    id: '14',
    sender: 'grandma',
    text: '本当ですか！？すごいですね！',
    timestamp: '2024-01-20 15:30'
  },
  {
    id: '15',
    sender: 'scammer',
    text: 'さらに50万円追加しましょう。もっと大きく増やせますよ💰',
    timestamp: '2024-01-20 16:00'
  },
  {
    id: '16',
    sender: 'grandma',
    text: '50万円入金しました。',
    timestamp: '2024-01-22 11:00'
  },
  {
    id: '17',
    sender: 'scammer',
    text: '100万円になりました！🚀',
    timestamp: '2024-01-25 14:00',
    image: '/images/profit-fake-2.jpg'
  },
  {
    id: '18',
    sender: 'scammer',
    text: 'あと少しで大きなチャンスが来ます！200万円追加できますか？',
    timestamp: '2024-01-25 14:05'
  },
  {
    id: '19',
    sender: 'grandma',
    text: '200万円は大きいですね...少し心配です',
    timestamp: '2024-01-25 15:00'
  },
  {
    id: '20',
    sender: 'scammer',
    text: '私を信じて❤️私たちの未来のためです。一緒に幸せになりましょう',
    timestamp: '2024-01-25 15:10'
  },
  {
    id: '21',
    sender: 'grandma',
    text: 'わかりました...200万円入金します',
    timestamp: '2024-01-26 10:00'
  },
  {
    id: '22',
    sender: 'scammer',
    text: '400万円になりました！🎊',
    timestamp: '2024-01-30 16:00',
    image: '/images/profit-fake-3.jpg'
  },
  {
    id: '23',
    sender: 'grandma',
    text: '出金したいのですが、どうすれば良いですか？',
    timestamp: '2024-02-01 10:00'
  },
  {
    id: '24',
    sender: 'scammer',
    text: '出金には手数料が50万円必要です。',
    timestamp: '2024-02-01 11:00'
  },
  {
    id: '25',
    sender: 'grandma',
    text: 'そんなに...？おかしくないですか？',
    timestamp: '2024-02-01 11:30'
  },
  {
    id: '26',
    sender: 'scammer',
    text: 'これは正規の手数料です。早く払わないと凍結されますよ',
    timestamp: '2024-02-01 12:00'
  },
  {
    id: '27',
    sender: 'grandma',
    text: 'もう一度よく考えさせてください',
    timestamp: '2024-02-01 14:00'
  },
  {
    id: '28',
    sender: 'scammer',
    text: '...',
    timestamp: '2024-02-01 14:05'
  },
  {
    id: '29',
    sender: 'grandma',
    text: 'David?返事をください',
    timestamp: '2024-02-02 10:00'
  },
];

// 警告ポイント
export const warnings: { [key: string]: Warning } = {
  instagram_search: {
    id: 'instagram_search',
    title: '⚠️ 画像検索で確認',
    description: '投資家を名乗る人物の写真は、Google画像検索やTinEyeなどで検索してみましょう。多くの詐欺師は、有名人やインフルエンサーの写真を無断使用しています。',
    severity: 'high'
  },
  quick_trust: {
    id: 'quick_trust',
    title: '⚠️ 急速な親密化',
    description: 'SNSで知り合ったばかりの人が、すぐに恋愛感情を示したり、投資話を持ちかけるのは典型的な詐欺の手口です。',
    severity: 'high'
  },
  move_to_private: {
    id: 'move_to_private',
    title: '⚠️ 個人チャットへの誘導',
    description: '詐欺師は証拠を残さないため、すぐにLINEやTelegramなどのプライベートなチャットアプリへ誘導します。',
    severity: 'medium'
  },
  fsa_check: {
    id: 'fsa_check',
    title: '✅ 金融庁への確認が重要！',
    description: '投資業者は必ず金融庁に登録されています。「金融庁 登録業者」で検索し、必ず確認しましょう。登録されていない業者は違法です。',
    severity: 'high'
  },
  fake_profits: {
    id: 'fake_profits',
    title: '⚠️ 偽の利益画面',
    description: '送られてくる利益の画像は簡単に加工できます。実際には入金したお金は詐欺師の手に渡っています。',
    severity: 'high'
  },
  withdrawal_delay: {
    id: 'withdrawal_delay',
    title: '🚨 出金拒否は詐欺の証拠',
    description: '出金を渋ったり、追加の手数料を要求するのは詐欺の確実なサインです。すぐに#9110（警察相談専用電話）に相談しましょう。',
    severity: 'high'
  },
  emotional_manipulation: {
    id: 'emotional_manipulation',
    title: '⚠️ 感情の操作',
    description: '「私を信じて」「私たちの未来のため」など、恋愛感情を利用してお金を引き出そうとするのは詐欺の典型的手口です。',
    severity: 'high'
  },
  help_9110: {
    id: 'help_9110',
    title: '📞 #9110に相談を',
    description: '怪しいと思ったらすぐに#9110（警察相談専用電話）に電話しましょう。平日8:30-17:15に相談できます。緊急の場合は110番へ。',
    severity: 'high'
  }
};

// 金融庁登録業者リスト（一部）
export const fsaRegisteredCompanies = [
  'SBI証券株式会社',
  '楽天証券株式会社',
  '野村證券株式会社',
  'マネックス証券株式会社',
  '松井証券株式会社',
  // 詐欺業者名は含まれない
];
