'use client';

interface AccordionItemProps {
  id: number;
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  question,
  answer,
  isExpanded,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition"
      >
        <h3 className="text-lg font-semibold text-gray-900 text-left">{question}</h3>
        <span className={`text-2xl transition-transform ${isExpanded ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>

      {isExpanded && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
