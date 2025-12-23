import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import quotes from '../data/quotes';

export default function RandomQuote() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);

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
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <p className="text-4xl md:text-5xl leading-tight mb-6 break-words">
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
