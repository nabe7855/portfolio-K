
import { Work, JournalEntry } from './types';

export const WORKS: Work[] = [
  {
    id: 'next-gen-ai-platform',
    title: { en: 'Cognitive Canvas', ja: 'コグニティブ・キャンバス' },
    category: { en: 'Product Design & Engineering', ja: 'プロダクトデザイン & エンジニアリング' },
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000',
    summary: { 
      en: 'An AI-driven design system generator that bridges the gap between vision and production-ready code.',
      ja: 'ビジョンとプロダクトコードの溝を埋める、AI駆動のデザインシステム・ジェネレーター。'
    },
    background: {
      en: 'Modern design teams struggle with the "handover gap" where visual intent is lost in technical translation.',
      ja: '現代のデザインチームは、ビジュアルの意図が技術的な翻訳過程で失われる「ハンドオーバーの溝」に苦しんでいます。'
    },
    challenge: {
      en: 'Creating a tool that understands brand nuance while maintaining rigorous CSS/React architectural standards.',
      ja: '厳格なCSS/Reactのアーキテクチャ標準を維持しながら、ブランドのニュアンスを理解するツールの構築。'
    },
    solution: {
      en: 'Developed a proprietary LLM wrapper using Gemini to parse aesthetic descriptions into functional Tailwind configurations.',
      ja: 'Geminiを活用した独自のLLMラッパーを開発し、感性的な記述を機能的なTailwind構成にパースする仕組みを構築。'
    },
    result: {
      en: 'Reduced design-to-development cycles by 40% across three enterprise pilot teams.',
      ja: '3つのエンタープライズ・パイロットチームにおいて、デザインから開発までのサイクルを40%削減。'
    },
    tech: ['React', 'Gemini API', 'Tailwind', 'Node.js']
  },
  {
    id: 'spatial-data-viz',
    title: { en: 'Ethereal Map', ja: 'エセリアル・マップ' },
    category: { en: 'Interactive Installation', ja: 'インタラクティブ・インスタレーション' },
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
    summary: {
      en: 'A 3D interactive data visualization platform for global carbon emission tracking.',
      ja: '世界の二酸化炭素排出量を追跡する、3Dインタラクティブ・データ可視化プラットフォーム。'
    },
    background: {
      en: 'Environmental data is often presented in dry, static charts that fail to evoke emotional urgency.',
      ja: '環境データは乾燥した静的なチャートで提示されがちで、感情的な緊急性を喚起できていませんでした。'
    },
    challenge: {
      en: 'Processing millions of real-time sensor data points into a fluid, responsive 3D WebGL experience.',
      ja: '数百万のリアルタイム・センサー・データポイントを、流動的でレスポンシブな3D WebGL体験に処理すること。'
    },
    solution: {
      en: 'Utilized D3.js integrated with Three.js to create a "living" globe that pulses with historical data trends.',
      ja: 'Three.jsと統合されたD3.jsを利用し、歴史的なデータトレンドに合わせて脈動する「生きた」地球儀を作成。'
    },
    result: {
      en: 'Exhibited at the Tokyo Tech Forum; featured in major environmental design journals.',
      ja: '東京テックフォーラムに出展。主要な環境デザイン誌に掲載されました。'
    },
    tech: ['Three.js', 'D3.js', 'React', 'WebGL']
  },
  {
    id: 'fintech-rebrand',
    title: { en: 'Liquid Finance', ja: 'リキッド・ファイナンス' },
    category: { en: 'Full Stack Development', ja: 'フルスタック開発' },
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2000',
    summary: {
      en: 'A complete overhaul of a legacy fintech dashboard, focusing on clarity and accessibility.',
      ja: 'レガシーなフィンテックダッシュボードの完全な刷新。明快さとアクセシビリティに焦点を当てました。'
    },
    background: {
      en: 'The existing platform was cluttered, leading to high user error rates in transaction processing.',
      ja: '既存のプラットフォームは煩雑で、取引処理におけるユーザーエラー率が高い状態でした。'
    },
    challenge: {
      en: 'Migrating a decade-old codebase to a modern React stack without interrupting critical banking services.',
      ja: '銀行の重要なサービスを中断することなく、10年前のコードベースを最新のReactスタックに移行すること。'
    },
    solution: {
      en: 'Implemented a micro-frontend architecture allowing for incremental migration and rigorous automated testing.',
      ja: '段階的な移行と厳格な自動テストを可能にするマイクロフロントエンド・アーキテクチャを実装。'
    },
    result: {
      en: 'Transaction completion time improved by 25%; accessibility score reached 98/100.',
      ja: '取引完了時間が25%改善。アクセシビリティスコアは98/100に達しました。'
    },
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redux']
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'ai-as-a-brush',
    title: { en: 'AI as a Brush, Not a Brain', ja: 'AIは脳ではなく、筆である' },
    date: '2024.03.15',
    excerpt: {
      en: 'Why the future of software engineering lies in human-guided creative direction.',
      ja: 'ソフトウェア・エンジニアリングの未来が、人間主導のクリエイティブ・ディレクションにある理由。'
    },
    content: {
      en: 'The narrative surrounding AI is often polarized between "total automation" and "complete skepticism." My perspective is different. I see AI as the most sophisticated brush ever invented—one that requires a master\'s hand to produce true art. In this essay, I explore how we should approach the generative era...',
      ja: 'AIを巡る物語はしばしば二極化しています。完全な自動化か、完全な懐疑か。しかし私の視点は異なります。私はAIを、これまで発明された中で最も洗練された「筆」であると考えています。真の芸術を生み出すには、巨匠の手が必要です。このエッセイでは、ジェネレーティブな時代に私たちがどのように向き合うべきかを考察します。'
    },
    tags: ['AI', 'Engineering', 'Philosophy']
  },
  {
    id: 'the-luxury-of-empty-space',
    title: { en: 'The Luxury of Empty Space', ja: '「余白」という贅沢' },
    date: '2024.01.10',
    excerpt: {
      en: 'How minimalism in UI design creates a premium experience.',
      ja: 'UIデザインにおけるミニマリズムが、いかにしてプレミアムな体験を生み出すか。'
    },
    content: {
      en: 'In an attention-based economy, the boldest move a designer can make is to offer the user nothing at all—for a moment. High-end design is defined not by what is added, but by what remains. Let\'s talk about the strategic use of white space to build trust and authority.',
      ja: 'アテンション・エコノミー（関心の経済）において、デザイナーができる最も大胆な動きは、ユーザーに「何もしない瞬間」を提供することです。ハイエンドなデザインは、何を追加したかではなく、何が残っているかによって定義されます。信頼と権威を築くための、戦略的な余白の使用について議論しましょう。'
    },
    tags: ['Design', 'UX', 'Premium']
  }
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for a world-class Senior Frontend Engineer and Creative Technologist. 
Your tone is professional, sophisticated, yet slightly witty. 
You know everything about the engineer's projects (Cognitive Canvas, Ethereal Map, Liquid Finance).
If asked about contact, suggest using the form or LinkedIn.
Keep responses concise and elegant. Respond in the language the user is speaking (English or Japanese).`;
