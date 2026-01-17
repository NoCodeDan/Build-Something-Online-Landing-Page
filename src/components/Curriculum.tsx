import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface CurriculumDay {
  day: number;
  title: string;
  description?: string;
  subtopics?: string[];
}

interface CurriculumWeek {
  title: string;
  description: string;
  days: CurriculumDay[];
}

const curriculum: CurriculumWeek[] = [
  {
    title: 'Phase 1',
    description: 'AI Foundations & Real-World Use',
    days: [
      {
        day: 1,
        title: 'AI Chatbots',
        description: 'ChatGPT / Claude / Gemini / Perplexity'
      },
      {
        day: 2,
        title: 'Real Life Use Cases',
        description: 'Finances, goal setting & planning, fixing appliances, understanding food labels, diet alignment, and everyday decision-making'
      },
      {
        day: 3,
        title: 'Chatbots Advanced Features',
        description: 'Branching, projects, desktop apps, and persistent workflows'
      },
      {
        day: 4,
        title: 'NotebookLM',
        description: 'Synthesize research, generate slide decks, and turn information into insight'
      },
      {
        day: 5,
        title: 'Lovable / Replit / Bolt.new / v.0',
        description: 'Intro to AI-powered app and product building'
      }
    ]
  },
  {
    title: 'Phase 2',
    description: 'Vibe Coding',
    days: [
      {
        day: 6,
        title: 'Creating Your First Landing Page'
      },
      {
        day: 7,
        title: 'Speeding Up Your Workflow',
        description: 'Raycast, Stream Deck, dictation tools (WisprFlow, Monologue, SuperWhisper, etc.)'
      },
      {
        day: 8,
        title: 'Cursor / Antigravity',
        description: 'AI-assisted coding and development workflows'
      },
      {
        day: 9,
        title: 'Backend Databases',
        description: 'Supabase, Firebase, Convex'
      },
      {
        day: 10,
        title: 'Claude Code',
        description: 'Codex / Gemini CLI and codebase-level AI'
      },
      {
        day: 11,
        title: 'Planning & Multi-Agent Workflows'
      },
      {
        day: 12,
        title: 'Building a Design System for Your Project'
      },
      {
        day: 13,
        title: 'Generating a Business Dashboard'
      },
      {
        day: 14,
        title: 'Agentic Development'
      },
      {
        day: 15,
        title: 'API Services',
        description: 'How to hook them up + best tools (AI tools, Firecrawl, Google services, transcription, Whisper, OCR, etc.)'
      },
      {
        day: 16,
        title: 'Putting AI In Your Product',
        description: 'Using models from ChatGPT, Claude, and Google Gemini for advanced capabilities'
      },
      {
        day: 17,
        title: 'Building Your First SaaS Product'
      }
    ]
  },
  {
    title: 'Phase 3',
    description: 'Distribution & Automation',
    days: [
      {
        day: 18,
        title: 'Creating Graphic Assets with AI',
        description: 'Midjourney, ChatGPT, Google Gemini / Nano Banana (Possibles: Ideogram, Recraft)'
      },
      {
        day: 19,
        title: 'Using Google Stitch to Create Screen Mockups',
        description: 'Before building in AI'
      },
      {
        day: 20,
        title: 'Creating Video Assets',
        description: 'Google Gemini / Flow'
      },
      {
        day: 21,
        title: 'Creating Audio Assets',
        description: 'ElevenLabs, Suno, Udio'
      },
      {
        day: 22,
        title: 'Creating a Commercial / Music Video / Short Film',
        description: 'Scripting, storyboarding, pre-viz, image & video generation, editing'
      },
      {
        day: 23,
        title: 'Cloning Yourself & Creating AI UGC',
        description: 'Using HeyGen'
      },
      {
        day: 24,
        title: 'Build an Ad Campaign Featuring Yourself'
      },
      {
        day: 25,
        title: 'AI Native Browsers',
        description: 'Atlas, Comet, Dia'
      },
      {
        day: 26,
        title: 'Automation Services',
        description: 'Zapier, Make, n8n'
      },
      {
        day: 27,
        title: 'Build an Agent / Agent-Native App'
      }
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
        ]
      }
    ]
  }
];

export const Curriculum = () => {
  // First week (index 0) is open by default, others are closed
  const [openWeeks, setOpenWeeks] = useState<Set<number>>(new Set([0]));

  const toggleWeek = (weekIndex: number) => {
    const newOpenWeeks = new Set(openWeeks);
    if (newOpenWeeks.has(weekIndex)) {
      newOpenWeeks.delete(weekIndex);
    } else {
      newOpenWeeks.add(weekIndex);
    }
    setOpenWeeks(newOpenWeeks);
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

        <div className="space-y-10">
          {curriculum.map((week, weekIndex) => {
            const isOpen = openWeeks.has(weekIndex);
            return (
              <div key={weekIndex} className="bg-beige-50 rounded-2xl border border-beige-200 overflow-hidden">
                <button
                  onClick={() => toggleWeek(weekIndex)}
                  className="w-full bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 px-6 py-4 hover:brightness-90 transition-all"
                  aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${week.title} - ${week.description}`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold">{week.title}</h3>
                      <span className="opacity-70">•</span>
                      <p className="text-white/90 font-medium">{week.description}</p>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-beige-100 border-b border-beige-200">
                      <th className="text-left px-6 py-4 font-semibold text-charcoal text-sm w-20">Day</th>
                      <th className="text-left px-6 py-4 font-semibold text-charcoal text-sm">Topic</th>
                      <th className="text-left px-6 py-4 font-semibold text-charcoal text-sm">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {week.days.map((day, dayIndex) => (
                      <tr
                        key={dayIndex}
                        className="border-b border-beige-200 transition-colors"
                      >
                        <td className="px-6 py-5">
                          <div className="w-10 h-10 bg-gradient-to-br from-warmOrange-400 to-warmOrange-600 rounded-lg flex items-center justify-center shadow-sm">
                            <span className="text-white font-bold">{day.day}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <h4 className="font-semibold text-charcoal leading-snug">
                            {day.title}
                          </h4>
                        </td>
                        <td className="px-6 py-5">
                          {day.description && (
                            <p className="text-sm text-charcoal/70 leading-relaxed">
                              {day.description}
                            </p>
                          )}
                          {day.subtopics && (
                            <ul className="space-y-1">
                              {day.subtopics.map((subtopic, index) => (
                                <li key={index} className="text-sm text-charcoal/70 flex items-start gap-2">
                                  <span className="text-warmOrange-500 mt-1">•</span>
                                  <span>{subtopic}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                  </div>
                )}
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
