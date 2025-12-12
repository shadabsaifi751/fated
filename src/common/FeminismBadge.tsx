// app/components/FeminismBadge.tsx (or anywhere in your project)

type BadgeProps = {
    value?: number;
    label?: string;
    className?:string
  };
  
  export default function FeminismBadge({
    value = 80,
    label = "Feminism",
    className
  }: BadgeProps) {
    const percent = Math.min(Math.max(value, 0), 100);
  
    return (
      <div className={`inline-flex items-center rounded-full bg-[#4B164C] px-3 py-1.5 shadow-md border-2 border-[#DD88CF] ${className}`}>
        {/* Circular progress */}
        <div className="relative mr-3 h-10 w-10 sm:block hidden">
          {/* outer conic gradient */}
          <div
            className="h-full w-full rounded-full"
            style={{
              background: `conic-gradient(#f8a4e5 0% ${percent}%, #5a1b6f ${percent}% 100%)`,
            }}
          />
          {/* inner circle */}
          <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-[#3b0d4e] text-[10px] font-semibold text-white">
            {percent}%
          </div>
        </div>
  
        {/* Label */}
        <span className="text-sm font-medium text-white">{label}</span>
      </div>
    );
  }
  