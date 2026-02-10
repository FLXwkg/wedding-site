function DashedBox({ children, dashLength = 20, gapLength = 15, color }: Readonly<{ 
  children: React.ReactNode;
  dashLength?: number;
  gapLength?: number;
  color?: string;
}>) {
  return (
    <div className="relative rounded-[40px] p-12 bg-white">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ borderRadius: '40px' }}
      >
        <rect
          x="3"
          y="3"
          width="calc(100% - 6px)"
          height="calc(100% - 6px)"
          rx="37"
          ry="37"
          fill="none"
          stroke={`${color}`}
          strokeWidth="6"
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default DashedBox;