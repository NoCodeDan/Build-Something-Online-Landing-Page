import { Sparkles } from 'lucide-react';
import profilePic from '@/images/NCDProfilePic.jpg';

export const AboutInstructor = () => {
  return (
    <section id="about" className="py-24 px-6 bg-warmWhite">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            About the Instructor
          </h2>
          <div className="w-16 h-1 bg-warmOrange-500 mx-auto mt-6"></div>
        </div>

        <div className="bg-beige-50 rounded-2xl border border-beige-200 p-8 md:p-12 relative">
          {/* Profile Picture - Top Right Corner */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-warmOrange-400/30 shadow-lg">
            <img
              src={profilePic}
              alt="No-Code Dan"
              className="w-full h-full object-cover"
              style={{ 
                transform: 'scale(1.5) translate(0%, 12%)',
                objectPosition: 'center top'
              }}
            />
          </div>
          
          <div className="mb-8 pr-32 md:pr-40">
            <h3 className="text-3xl font-bold text-charcoal mb-4">No-Code Dan</h3>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-warmOrange-400/20 via-warmOrange-500/20 to-warmOrange-600/20 rounded-full border border-warmOrange-400/30">
              <Sparkles className="w-4 h-4 text-warmOrange-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-warmOrange-600 to-warmOrange-500 bg-clip-text text-transparent">
                Builder • Designer • Educator
              </span>
            </div>
          </div>

          <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
            <p>
              I'm Dan — a builder, designer, and educator who's spent the last several years working hands-on with modern AI tools across product, design, code, and creative work.
            </p>

            <p>
              I've taught hundreds of students and worked with brands such as <span className="font-semibold text-charcoal">Treehouse</span>, <span className="font-semibold text-charcoal">Adalo</span>, and <span className="font-semibold text-charcoal">Coda</span>, helping people learn how to build real products using modern tools.
            </p>

            <p>
              I use AI daily to build real things: landing pages, apps, internal tools, automations, videos, music, and full creative projects. Not as experiments but part of how I work.
            </p>

            <div className="pt-4 border-t border-beige-200">
              <p className="text-xl font-semibold text-charcoal mb-2">
                This program is the clearest, most practical version of what I wish existed when I was getting started.
              </p>
              <p className="text-charcoal/70 italic">
                The goal isn't to know every AI tool. It's to know how to build with whatever comes next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
