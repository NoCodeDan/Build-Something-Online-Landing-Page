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
    <section className="w-full py-20 md:py-28 bg-warmWhite">
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
      
      <div className="max-w-6xl mx-auto px-6 mt-4">
        <p className="text-sm text-charcoal/50 text-center md:text-left">
          Your skill progression over the 28-day sprint
        </p>
      </div>
    </section>
  );
};
