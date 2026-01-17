import { Sparkles, Download, Share2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatedTicket } from './ui/ticket-confirmation-card';

interface SprintBadgeProps {
  name: string;
  participantNumber: number;
  onClose?: () => void;
}

export const SprintBadge = ({ name, participantNumber, onClose }: SprintBadgeProps) => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  const createScreenshotBadge = (name: string, participantNumber: number) => {
    const formattedNumber = String(participantNumber).padStart(3, '0');
    const barcodeValue = `BSO-${formattedNumber}-${Date.now().toString().slice(-6)}`;
    
    const screenshotBadge = document.createElement('div');
    screenshotBadge.style.position = 'absolute';
    screenshotBadge.style.left = '-9999px';
    screenshotBadge.style.width = '500px';
    screenshotBadge.style.padding = '0';
    screenshotBadge.style.margin = '0';
    screenshotBadge.style.backgroundColor = '#FAFAF8';
    screenshotBadge.style.borderRadius = '16px';
    screenshotBadge.style.border = '2px solid rgba(219, 107, 63, 0.2)';
    screenshotBadge.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif';
    screenshotBadge.innerHTML = `
      <div style="
        position: relative;
        width: 100%;
        background: #FAFAF8;
        border-radius: 16px;
        overflow: hidden;
      ">
        <!-- Ticket cut-outs -->
        <div style="position: absolute; left: -16px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border-radius: 50%; background: #FAFAF8; border: 2px solid rgba(219, 107, 63, 0.2);"></div>
        <div style="position: absolute; right: -16px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border-radius: 50%; background: #FAFAF8; border: 2px solid rgba(219, 107, 63, 0.2);"></div>
        
        <!-- Header -->
        <div style="padding: 32px; text-align: center; background: linear-gradient(135deg, rgba(219, 107, 63, 0.1) 0%, rgba(200, 94, 55, 0.05) 100%);">
          <div style="width: 60px; height: 60px; margin: 0 auto 16px; background: rgba(219, 107, 63, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C85E37" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1 style="font-size: 24px; font-weight: bold; color: #1A1A1A; margin: 0 0 8px 0;">Congratulations! 🎉</h1>
          <p style="font-size: 14px; color: rgba(26, 26, 26, 0.7); margin: 0;">You're registered for the sprint</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 32px;">
          <!-- Dashed line -->
          <div style="width: 100%; height: 2px; border-top: 2px dashed rgba(219, 107, 63, 0.3); margin-bottom: 24px;"></div>
          
          <!-- Participant info -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
            <div>
              <p style="font-size: 11px; color: rgba(26, 26, 26, 0.6); text-transform: uppercase; font-weight: 500; margin: 0 0 4px 0;">Participant</p>
              <p style="font-size: 18px; font-weight: 600; color: #1A1A1A; margin: 0;">${name}</p>
            </div>
            <div style="text-align: right;">
              <p style="font-size: 11px; color: rgba(26, 26, 26, 0.6); text-transform: uppercase; font-weight: 500; margin: 0 0 4px 0;">Number</p>
              <p style="font-size: 18px; font-weight: bold; color: #C85E37; margin: 0;">#${formattedNumber}</p>
            </div>
          </div>
          
          <!-- Sprint date -->
          <div style="margin-bottom: 24px;">
            <p style="font-size: 11px; color: rgba(26, 26, 26, 0.6); text-transform: uppercase; font-weight: 500; margin: 0 0 4px 0;">Sprint Start Date</p>
            <p style="font-size: 14px; font-weight: 500; color: #1A1A1A; margin: 0;">February 1st, 2026</p>
          </div>
          
          <!-- Program info -->
          <div style="background: #F8F6F3; padding: 16px; border-radius: 8px; border: 1px solid #E8E3D8; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="padding: 8px; background: rgba(219, 107, 63, 0.1); border-radius: 8px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C85E37" stroke-width="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div>
                <p style="font-size: 14px; font-weight: 600; color: #1A1A1A; margin: 0 0 2px 0;">Build Something Online</p>
                <p style="font-size: 12px; color: rgba(26, 26, 26, 0.6); margin: 0;">28 Days to AI-First</p>
              </div>
            </div>
          </div>
          
          <!-- Dashed line -->
          <div style="width: 100%; height: 2px; border-top: 2px dashed rgba(219, 107, 63, 0.3); margin-bottom: 16px;"></div>
          
          <!-- Barcode -->
          <div style="text-align: center; padding: 16px 0;">
            <svg width="250" height="70" viewBox="0 0 250 70" style="margin: 0 auto;">
              ${(() => {
                const hashCode = (s: string) => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
                const seed = hashCode(barcodeValue);
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
                const startX = (250 - totalWidth) / 2;
                let currentX = startX;
                return bars.map((bar, index) => {
                  const x = currentX;
                  currentX += bar.width + spacing;
                  return `<rect x="${x}" y="10" width="${bar.width}" height="50" fill="#1A1A1A" />`;
                }).join('');
              })()}
            </svg>
            <p style="font-size: 11px; color: rgba(26, 26, 26, 0.6); letter-spacing: 0.3em; margin: 8px 0 0 0; font-family: monospace;">${barcodeValue}</p>
          </div>
        </div>
    `;
    return screenshotBadge;
  };

  const downloadBadge = async () => {
    setIsDownloading(true);
    try {
      // Create a screenshot-optimized version of the badge
      const screenshotBadge = createScreenshotBadge(name, participantNumber);
      document.body.appendChild(screenshotBadge);
      
      // Wait for fonts and rendering
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Use html2canvas to convert the badge to an image
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(screenshotBadge.firstElementChild as HTMLElement, {
        backgroundColor: null,
        scale: 3,
        logging: false,
        useCORS: true,
        allowTaint: false,
        width: 600,
        height: 400,
      });

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (!blob) {
          document.body.removeChild(screenshotBadge);
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `sprint-badge-${name.replace(/\s+/g, '-').toLowerCase()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        document.body.removeChild(screenshotBadge);
        URL.revokeObjectURL(url);
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('Error downloading badge:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const shareBadge = async () => {
    try {
      const screenshotBadge = createScreenshotBadge(name, participantNumber);
      document.body.appendChild(screenshotBadge);
      
      // Wait for rendering
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(screenshotBadge.firstElementChild as HTMLElement, {
        backgroundColor: null,
        scale: 3,
        logging: false,
        useCORS: true,
        allowTaint: false,
        width: 600,
        height: 400,
      });

      canvas.toBlob(async (blob) => {
        if (!blob) {
          document.body.removeChild(screenshotBadge);
          return;
        }

        // Try native share API first
        if (navigator.share && navigator.canShare) {
          const file = new File([blob], 'sprint-badge.png', { type: 'image/png' });
          const shareData: ShareData = {
            title: "I'm joining the Build Something Online Sprint!",
            text: `I just signed up for the 28-day AI-first sprint! Join me: ${window.location.href}`,
          };
          
          // Check if files can be shared
          if (navigator.canShare({ files: [file] })) {
            shareData.files = [file];
          }
          
          try {
            await navigator.share(shareData);
            document.body.removeChild(screenshotBadge);
            return;
          } catch (err) {
            // User cancelled or share failed, fall through to copy link
          }
        }

        // Fallback: Copy shareable link to clipboard
        const shareText = `I just signed up for the Build Something Online Sprint! 🚀 Join me: ${window.location.href}`;
        await navigator.clipboard.writeText(shareText);
        setShareUrl('Link copied to clipboard!');
        setTimeout(() => setShareUrl(''), 3000);
        document.body.removeChild(screenshotBadge);
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('Error sharing badge:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-md">
      <div className="relative bg-warmWhite rounded-2xl shadow-2xl w-full max-w-2xl p-8 md:p-12">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-charcoal/60 hover:text-charcoal transition-colors rounded-lg hover:bg-beige-100"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Congratulations! 🎉
          </h2>
          <p className="text-lg text-charcoal/70">
            We'll see you at the sprint!
          </p>
        </div>

        {/* Ticket Badge */}
        <div className="flex justify-center mb-8">
          <div
            ref={badgeRef}
            className="relative transition-transform duration-300 ease-out"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const mouseX = e.clientX;
              const relativeX = (mouseX - centerX) / (rect.width / 2); // -1 to 1
              
              // Calculate rotation based on mouse position
              // Left side: rotate left (negative Y), right side: rotate right (positive Y)
              const rotateY = relativeX * 8; // Max 8 degrees rotation for ticket
              const rotateX = -Math.abs(relativeX) * 3; // Slight tilt
              const scale = 1.02;
              
              e.currentTarget.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
            }}
          >
            <AnimatedTicket
              participantName={name}
              participantNumber={participantNumber || 0}
              date={new Date()}
              barcodeValue={`BSO-${String(participantNumber || 0).padStart(3, '0')}-${Date.now().toString().slice(-6)}`}
              icon={<Sparkles className="w-10 h-10 text-warmOrange-600" />}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={downloadBadge}
            disabled={isDownloading}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 text-white rounded-lg font-medium hover:from-warmOrange-600 hover:to-warmOrange-700 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            <span>{isDownloading ? 'Downloading...' : 'Download Badge'}</span>
          </button>
          
          <button
            onClick={shareBadge}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-beige-100 text-charcoal rounded-lg font-medium hover:bg-beige-200 border border-beige-200 transition-all duration-200"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {shareUrl && (
          <p className="text-center mt-4 text-sm text-warmOrange-600">
            {shareUrl}
          </p>
        )}

        <p className="text-center mt-6 text-sm text-charcoal/60">
          Share your badge to let others know you're joining the sprint!
        </p>
      </div>
    </div>
  );
};
