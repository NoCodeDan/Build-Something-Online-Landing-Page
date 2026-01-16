import { useState } from 'react';
import { X, Mail, User, Sparkles } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // For now, simulate success - will be replaced with Convex mutation after running npx convex dev
      console.log('✅ Signup submitted:', { name: name.trim(), email: email.trim() });
      console.info('ℹ️ Demo mode: Run "npx convex dev" to save signups to database.');
      
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setEmail('');
        onClose();
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      {/* Blurred and tinted background overlay */}
      <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-md"></div>

      {/* Modal */}
      <div className="relative bg-warmWhite rounded-2xl shadow-2xl w-full max-w-md p-8 z-10 transform transition-all">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-charcoal/60 hover:text-charcoal transition-colors rounded-lg hover:bg-beige-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success state */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-warmOrange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-warmOrange-500" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">You're in! 🎉</h3>
            <p className="text-charcoal/70">
              Check your email for daily lessons starting soon.
            </p>
          </div>
        ) : (
          /* Form */
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-warmOrange-400/20 via-warmOrange-500/20 to-warmOrange-600/20 rounded-full border border-warmOrange-400/30">
                <Sparkles className="w-4 h-4 text-warmOrange-500" />
                <span className="text-sm font-semibold bg-gradient-to-r from-warmOrange-600 to-warmOrange-500 bg-clip-text text-transparent">
                  Join the Workshop
                </span>
              </div>
              <h2 className="text-3xl font-bold text-charcoal mb-2">
                Start Your 28-Day Journey
              </h2>
              <p className="text-charcoal/70">
                Get daily emails with lessons, exercises, and guidance
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-beige-50 border border-beige-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange-500 focus:border-transparent text-charcoal placeholder:text-charcoal/40 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-beige-50 border border-beige-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange-500 focus:border-transparent text-charcoal placeholder:text-charcoal/40 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 text-white rounded-lg font-medium hover:from-warmOrange-600 hover:to-warmOrange-700 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Join the Workshop</span>
                  </>
                )}
              </button>

              <p className="text-xs text-center text-charcoal/50">
                We'll send you daily lessons and never spam you.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
