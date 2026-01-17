"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Day 1", value: 10 },
  { name: "Day 7", value: 25 },
  { name: "Day 14", value: 50 },
  { name: "Day 21", value: 80 },
  { name: "Day 28", value: 100 },
];

const stats = [
  { value: "500+", label: "Builders Enrolled" },
  { value: "28", label: "Days of Content" },
  { value: "6", label: "Real Projects Built" },
  { value: "100%", label: "AI-First Approach" },
];

export const Stats = () => {
  return (
    <section className="w-full pt-20 md:pt-28 pb-0 bg-warmWhite relative">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4 max-w-4xl">
          Transform how you build.{" "}
          <span className="text-charcoal/60 font-medium">
            Join hundreds of creators learning to ship faster with AI-first workflows and modern tools.
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

      {/* Area Chart - Skills Growth with gradient transition */}
      <div className="relative mt-12">
        {/* Chart container */}
        <div className="w-full h-48 md:h-64 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                {/* Gradient that fades into the next section's background color */}
                <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DB6B3F" stopOpacity={0.35} />
                  <stop offset="60%" stopColor="#DB6B3F" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#F8F6F3" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FAFAF8', 
                  border: '1px solid #E8E3D8',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
                labelStyle={{ color: '#1A1A1A' }}
              />
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
        
        {/* Smooth gradient transition overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 md:h-48 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #F8F6F3 100%)'
          }}
        />
      </div>
      
      {/* Caption positioned over the gradient */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 -mt-8 pb-8">
        <p className="text-sm text-charcoal/50 text-center md:text-left">
          Your skill progression over the 28-day sprint
        </p>
      </div>
    </section>
  );
};
