import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

// --- SVG Icons ---

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// --- Helper Components ---

const DashedLine = () => (
  <div
    className="w-full border-t-2 border-dashed border-warmOrange-400/30"
    aria-hidden="true"
  />
);

const Barcode = ({ value }: { value: string }) => {
    const hashCode = (s: string) => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
    const seed = hashCode(value);
    const random = (s: number) => {
        const x = Math.sin(s) * 10000;
        return x - Math.floor(x);
    };

    const bars = Array.from({ length: 60 }).map((_, index) => {
        const rand = random(seed + index);
        const width = rand > 0.7 ? 2.5 : 1.5;
        return { width };
    });

    const spacing = 1.5;
    const totalWidth = bars.reduce((acc, bar) => acc + bar.width + spacing, 0) - spacing;
    const svgWidth = 250;
    const svgHeight = 70;
    let currentX = (svgWidth - totalWidth) / 2;

    return (
        <div className="flex flex-col items-center py-2">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgWidth}
                height={svgHeight}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                aria-label={`Barcode for value ${value}`}
                className="fill-current text-charcoal"
            >
                {bars.map((bar, index) => {
                    const x = currentX;
                    currentX += bar.width + spacing;
                    return (
                        <rect
                            key={index}
                            x={x}
                            y="10"
                            width={bar.width}
                            height="50"
                        />
                    );
                })}
            </svg>
            <p className="text-sm text-charcoal/60 tracking-[0.3em] mt-2">{value}</p>
        </div>
    );
};

const ConfettiExplosion = () => {
  const confettiCount = 100;
  const colors = ["#DB6B3F", "#E77849", "#C85E37", "#F8F6F3", "#E8E3D8", "#1A1A1A"];

  return (
    <>
      <style>
        {`
          @keyframes fall {
            0% {
                transform: translateY(-10vh) rotate(0deg);
                opacity: 1;
            }
            100% {
              transform: translateY(110vh) rotate(720deg);
              opacity: 0;
            }
          }
        `}
      </style>
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: confettiCount }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-4"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-20 + Math.random() * 10}%`,
              backgroundColor: colors[i % colors.length],
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `fall ${2.5 + Math.random() * 2.5}s ${Math.random() * 2}s linear forwards`,
            }}
          />
        ))}
      </div>
    </>
  );
};


// --- Main Ticket Component ---

export interface TicketProps extends React.HTMLAttributes<HTMLDivElement> {
  participantName: string;
  participantNumber: number;
  date: Date;
  barcodeValue: string;
  icon?: React.ReactNode;
}

const AnimatedTicket = React.forwardRef<HTMLDivElement, TicketProps>(
  (
    {
      className,
      participantName,
      participantNumber,
      date,
      barcodeValue,
      icon,
      ...props
    },
    ref
  ) => {
    const [showConfetti, setShowConfetti] = React.useState(false);

    React.useEffect(() => {
      const mountTimer = setTimeout(() => setShowConfetti(true), 100);
      const unmountTimer = setTimeout(() => setShowConfetti(false), 6000);
      return () => {
        clearTimeout(mountTimer);
        clearTimeout(unmountTimer);
      };
    }, []);

    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date).replace(',', ' •');

    const formattedParticipantNumber = participantNumber != null 
      ? String(participantNumber).padStart(3, '0') 
      : '000';

    return (
      <>
        {showConfetti && <ConfettiExplosion />}
        <div
          ref={ref}
          className={cn(
            "relative w-full max-w-sm bg-warmWhite text-charcoal rounded-2xl shadow-2xl font-sans z-10 border-2 border-warmOrange-400/20",
            "animate-in fade-in-0 zoom-in-95 duration-500",
            className
          )}
          {...props}
        >
          {/* Ticket cut-out effect */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-warmWhite border-2 border-warmOrange-400/20" />
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-warmWhite border-2 border-warmOrange-400/20" />

          <div className="p-8 flex flex-col items-center text-center bg-gradient-to-br from-warmOrange-500/10 via-warmOrange-500/5 to-transparent rounded-t-2xl">
              <div className="p-3 bg-warmOrange-500/20 rounded-full animate-in zoom-in-50 delay-300 duration-500">
                  {icon || <CheckCircleIcon className="w-10 h-10 text-warmOrange-600 animate-in zoom-in-75 delay-500 duration-500" />}
              </div>
              <h1 className="text-2xl font-bold text-charcoal mt-4">Congratulations! 🎉</h1>
              <p className="text-charcoal/70 mt-1">
                You're registered for the sprint
              </p>
          </div>

          <div className="px-8 pb-8 space-y-6">
              <DashedLine />

              <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                      <p className="text-xs text-charcoal/60 uppercase font-medium">Participant</p>
                      <p className="font-semibold text-lg text-charcoal mt-1">{participantName}</p>
                  </div>
                  <div className="text-right">
                      <p className="text-xs text-charcoal/60 uppercase font-medium">Number</p>
                      <p className="font-bold text-lg text-warmOrange-600 mt-1">#{formattedParticipantNumber}</p>
                  </div>
              </div>

              <div>
                  <p className="text-xs text-charcoal/60 uppercase font-medium">Sprint Start Date</p>
                  <p className="font-medium text-charcoal mt-1">February 1st, 2026</p>
              </div>

              <div className="bg-beige-50 p-4 rounded-lg border border-beige-200">
                  <div className="flex items-center gap-3">
                      <div className="p-2 bg-warmOrange-500/10 rounded-lg">
                          <Sparkles className="w-6 h-6 text-warmOrange-600" />
                      </div>
                      <div>
                          <p className="font-semibold text-charcoal">Build Something Online</p>
                          <p className="text-charcoal/60 text-sm">28 Days to AI-First</p>
                      </div>
                  </div>
              </div>

              <DashedLine />

              <Barcode value={barcodeValue} />
          </div>
        </div>
      </>
    );
  }
);

AnimatedTicket.displayName = "AnimatedTicket";

export { AnimatedTicket };
