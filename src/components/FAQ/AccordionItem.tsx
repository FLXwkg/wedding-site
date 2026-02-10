'use client';
import { useMemo } from 'react';
import DashedBox from '../DashedBox';

interface AccordionItemProps {
  id: number;
  question: string;
  answer: string;
}

const BORDER_COLORS = [
  '#88bfff', // palette-1: blue
  '#f8bf0b', // palette-2: yellow
  '#f867c8', // palette-3: pink
  '#5aba32', // palette-4: green
  '#96d0ee', // palette-5: blue-pastel
];

export default function AccordionItem({
  id,
  question,
  answer,
}: Readonly<AccordionItemProps>) {
  const borderColor = useMemo(() => {
    return BORDER_COLORS[id % BORDER_COLORS.length];
  }, [id]);

  return (
    <DashedBox dashLength={25} gapLength={20} color={borderColor}>
      <h3 className="text-lg font-semibold text-gray-900 text-left mb-3">{question}</h3>
      <p className="text-gray-700 leading-relaxed">{answer}</p>
    </DashedBox>
  );
}
