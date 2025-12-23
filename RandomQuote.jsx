import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

// 独立文案库文件
const quotes = [
  "生活就像一盒巧克力，你永远不知道下一颗是什么味道",
  "简单是终极的复杂",
  "少即是多",
  "保持饥饿，保持愚蠢",
  "代码是写给人看的，顺便让机器能运行",
  "设计不是拼凑，而是创造关系",
  "最好的界面是没有界面",
  "用最简单的方式解决问题",
  "极简主义不是一无所有，而是恰到好处",
  "在简单中寻找丰富"
];

export default function RandomQuote() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);

  // 初始化时随机选择一条文案
  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setQuoteIndex(randomIndex + 1);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-4 font-mono">
      {/* 墨水屏优化：纯黑白色/高对比度 */}
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <p className="text-4xl md:text-5xl leading-tight mb-6">
            {currentQuote}
          </p>
          <div className="text-right text-sm text-gray-600">
            {quoteIndex}/{quotes.length}
          </div>
        </div>
        
        <button
          onClick={getRandomQuote}
          className="w-full bg-black text-white hover:bg-gray-800 py-3 px-4 rounded-none flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <RefreshCw size={18} />
          换一条
        </button>
      </div>
    </div>
  );
}
