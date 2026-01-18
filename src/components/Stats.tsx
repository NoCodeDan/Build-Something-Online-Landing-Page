"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
} from "recharts";

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload as { name: string; value: number };
    return (
      <div style={{
        backgroundColor: '#FAFAF8',
        border: '1px solid #E8E3D8',
        borderRadius: '8px',
        padding: '8px 12px',
        fontSize: '14px'
      }}>
        <p style={{ color: '#1A1A1A', fontWeight: 'bold', marginBottom: '4px' }}>
          {dataPoint.name}
        </p>
        <p style={{ color: '#DB6B3F', margin: 0 }}>
          {dataPoint.value}%
        </p>
      </div>
    );
  }
  return null;
};

const data = [
  { name: "Exploring", value: 10 },
  { name: "Learning", value: 25 },
  { name: "Applying", value: 50 },
  { name: "Building", value: 80 },
  { name: "AI-First", value: 100 },
];

const stats = [
  { value: "20+", label: "Tools Introduced" },
  { value: "28", label: "Days of Content" },
  { value: "6", label: "Real Projects Built" },
  { value: "100%", label: "AI-First Approach" },
];

export const Stats = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-warmWhite">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4 max-w-4xl">
          Become the person who knows how to build with AI.{" "}
          <span className="text-charcoal/60 font-medium">
            In 28 days, you'll go from experimenting with tools to confidently shipping work using AI-first systems you can reuse anywhere.
          </span>
        </h3>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-warmOrange-600">{stat.value}</p>
              <p className="text-charcoal/60 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Area Chart - Skills Growth */}
      <div className="w-full h-48 md:h-64 mt-12">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DB6B3F" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#DB6B3F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              hide={true}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#DB6B3F"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorOrange)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-4">
        <p className="text-sm text-charcoal/50 text-center md:text-left">
          Your progression from exploring to AI-First
        </p>
      </div>
    </section>
  );
};
