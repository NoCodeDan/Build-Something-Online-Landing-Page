"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- TYPE DEFINITIONS ---
type TaskStatus = "Completed" | "In Progress" | "Upcoming";

interface CurriculumDay {
  day: number;
  title: string;
  description?: string;
  subtopics?: string[];
  status: TaskStatus;
}

interface CurriculumPhase {
  title: string;
  description: string;
  days: CurriculumDay[];
}

// --- STATUS BADGE COMPONENT ---
const StatusBadge = ({ status }: { status: TaskStatus }) => {
  const baseClasses = "px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap";
  const statusClasses = {
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-warmOrange-100 text-warmOrange-700",
    Upcoming: "bg-beige-100 text-charcoal/60",
  };
  return <span className={cn(baseClasses, statusClasses[status])}>{status}</span>;
};

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    }
  },
};

const curriculum: CurriculumPhase[] = [
  {
    title: 'Phase 1',
    description: 'AI Foundations & Real-World Use',
    days: [
      { day: 1, title: 'AI Chatbots', description: 'ChatGPT / Claude / Gemini / Perplexity', status: 'Upcoming' },
      { day: 2, title: 'Real Life Use Cases', description: 'Finances, goal setting & planning, fixing appliances, understanding food labels, diet alignment, and everyday decision-making', status: 'Upcoming' },
      { day: 3, title: 'Chatbots Advanced Features', description: 'Branching, projects, desktop apps, and persistent workflows', status: 'Upcoming' },
      { day: 4, title: 'NotebookLM', description: 'Synthesize research, generate slide decks, and turn information into insight', status: 'Upcoming' },
      { day: 5, title: 'Lovable / Replit / Bolt.new / v.0', description: 'Intro to AI-powered app and product building', status: 'Upcoming' }
    ]
  },
  {
    title: 'Phase 2',
    description: 'Vibe Coding',
    days: [
      { day: 6, title: 'Creating Your First Landing Page', status: 'Upcoming' },
      { day: 7, title: 'Speeding Up Your Workflow', description: 'Raycast, Stream Deck, dictation tools (WisprFlow, Monologue, SuperWhisper, etc.)', status: 'Upcoming' },
      { day: 8, title: 'Cursor / Antigravity', description: 'AI-assisted coding and development workflows', status: 'Upcoming' },
      { day: 9, title: 'Backend Databases', description: 'Supabase, Firebase, Convex', status: 'Upcoming' },
      { day: 10, title: 'Claude Code', description: 'Codex / Gemini CLI and codebase-level AI', status: 'Upcoming' },
      { day: 11, title: 'Planning & Multi-Agent Workflows', status: 'Upcoming' },
      { day: 12, title: 'Building a Design System for Your Project', status: 'Upcoming' },
      { day: 13, title: 'Generating a Business Dashboard', status: 'Upcoming' },
      { day: 14, title: 'Agentic Development', status: 'Upcoming' },
      { day: 15, title: 'API Services', description: 'How to hook them up + best tools (AI tools, Firecrawl, Google services, transcription, Whisper, OCR, etc.)', status: 'Upcoming' },
      { day: 16, title: 'Putting AI In Your Product', description: 'Using models from ChatGPT, Claude, and Google Gemini for advanced capabilities', status: 'Upcoming' },
      { day: 17, title: 'Building Your First SaaS Product', status: 'Upcoming' }
    ]
  },
  {
    title: 'Phase 3',
    description: 'Distribution & Automation',
    days: [
      { day: 18, title: 'Creating Graphic Assets with AI', description: 'Midjourney, ChatGPT, Google Gemini / Nano Banana (Possibles: Ideogram, Recraft)', status: 'Upcoming' },
      { day: 19, title: 'Using Google Stitch to Create Screen Mockups', description: 'Before building in AI', status: 'Upcoming' },
      { day: 20, title: 'Creating Video Assets', description: 'Google Gemini / Flow', status: 'Upcoming' },
      { day: 21, title: 'Creating Audio Assets', description: 'ElevenLabs, Suno, Udio', status: 'Upcoming' },
      { day: 22, title: 'Creating a Commercial / Music Video / Short Film', description: 'Scripting, storyboarding, pre-viz, image & video generation, editing', status: 'Upcoming' },
      { day: 23, title: 'Cloning Yourself & Creating AI UGC', description: 'Using HeyGen', status: 'Upcoming' },
      { day: 24, title: 'Build an Ad Campaign Featuring Yourself', status: 'Upcoming' },
      { day: 25, title: 'AI Native Browsers', description: 'Atlas, Comet, Dia', status: 'Upcoming' },
      { day: 26, title: 'Automation Services', description: 'Zapier, Make, n8n', status: 'Upcoming' },
      { day: 27, title: 'Build an Agent / Agent-Native App', status: 'Upcoming' }
    ]
  },
  {
    title: 'Final Project',
    description: 'Put it all together',
    days: [
      { 
        day: 28, 
        title: 'Create a Streetwear Brand', 
        subtopics: [
          'Clothing line designs',
          'Clothing mockups',
          'Pitch deck',
          'Lookbook & photography',
          '60-second commercial',
          'Website'
        ],
        status: 'Upcoming'
      }
    ]
  }
];

export const Curriculum = () => {
  const [openPhases, setOpenPhases] = useState<Set<number>>(new Set([0]));

  const togglePhase = (phaseIndex: number) => {
    const newOpenPhases = new Set(openPhases);
    if (newOpenPhases.has(phaseIndex)) {
      newOpenPhases.delete(phaseIndex);
    } else {
      newOpenPhases.add(phaseIndex);
    }
    setOpenPhases(newOpenPhases);
  };

  return (
    <section id="curriculum" className="py-24 px-6 bg-warmWhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-warmOrange-500/10 rounded-full">
            <Calendar className="w-4 h-4 text-warmOrange-500" />
            <span className="text-sm font-semibold text-warmOrange-600">Full Curriculum</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Your 28-Day Journey
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            From AI fundamentals to building complete products—here's what you'll master each day
          </p>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto mt-6"></div>
        </div>

        <div className="space-y-6">
          {curriculum.map((phase, phaseIndex) => {
            const isOpen = openPhases.has(phaseIndex);
            return (
              <div key={phaseIndex} className="rounded-2xl border border-beige-200 bg-warmWhite overflow-hidden shadow-sm">
                {/* Phase Header */}
                <button
                  onClick={() => togglePhase(phaseIndex)}
                  className="w-full bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 px-6 py-5 hover:brightness-95 transition-all"
                  aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${phase.title} - ${phase.description}`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <span className="opacity-70">•</span>
                      <p className="text-white/90 font-medium">{phase.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    </motion.div>
                  </div>
                </button>

                {/* Task List Table */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left">
                            {/* Table Header */}
                            <motion.thead
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <tr className="border-b border-beige-200">
                                <th scope="col" className="p-4 font-semibold text-charcoal/60 w-16">Day</th>
                                <th scope="col" className="p-4 font-semibold text-charcoal/60">Topic</th>
                                <th scope="col" className="p-4 font-semibold text-charcoal/60 hidden md:table-cell">Details</th>
                                <th scope="col" className="p-4 font-semibold text-charcoal/60 text-right">Status</th>
                              </tr>
                            </motion.thead>

                            {/* Table Body with Animations */}
                            <motion.tbody
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {phase.days.map((day) => (
                                <motion.tr 
                                  key={day.day} 
                                  variants={itemVariants}
                                  className="border-b border-beige-100 last:border-none hover:bg-beige-50/50 transition-colors"
                                >
                                  <td className="p-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-warmOrange-400 to-warmOrange-600 rounded-lg flex items-center justify-center shadow-sm">
                                      <span className="text-white font-bold text-sm">{day.day}</span>
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <span className="font-semibold text-charcoal">{day.title}</span>
                                    {/* Show description on mobile under title */}
                                    {day.description && (
                                      <p className="text-charcoal/60 text-xs mt-1 md:hidden">{day.description}</p>
                                    )}
                                    {day.subtopics && (
                                      <ul className="mt-1 md:hidden space-y-0.5">
                                        {day.subtopics.map((subtopic, idx) => (
                                          <li key={idx} className="text-charcoal/60 text-xs flex items-start gap-1">
                                            <span className="text-warmOrange-500">•</span>
                                            <span>{subtopic}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </td>
                                  <td className="p-4 text-charcoal/60 hidden md:table-cell">
                                    {day.description && <span>{day.description}</span>}
                                    {day.subtopics && (
                                      <ul className="space-y-0.5">
                                        {day.subtopics.map((subtopic, idx) => (
                                          <li key={idx} className="flex items-start gap-1">
                                            <span className="text-warmOrange-500">•</span>
                                            <span>{subtopic}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </td>
                                  <td className="p-4 text-right">
                                    <StatusBadge status={day.status} />
                                  </td>
                                </motion.tr>
                              ))}
                            </motion.tbody>
                          </table>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-to-br from-warmOrange-500/5 to-warmOrange-600/5 rounded-2xl border border-warmOrange-400/20">
          <p className="text-lg font-medium text-charcoal mb-2">
            By Day 28, you'll have built a complete brand from scratch
          </p>
          <p className="text-charcoal/60">
            Using only AI tools and the workflows you learned throughout the program
          </p>
        </div>
      </div>
    </section>
  );
};
