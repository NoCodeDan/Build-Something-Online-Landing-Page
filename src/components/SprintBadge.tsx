import { Sparkles, Download, Share2, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { AnimatedTicket } from './ui/ticket-confirmation-card';

// Social media icons as simple SVG components
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.88-.73 2.082-1.168 3.59-1.314.906-.089 1.74-.05 2.486.037-.069-.627-.236-1.136-.482-1.524-.387-.612-1.003-.926-1.884-.96h-.036c-.725 0-1.636.244-2.05.963l-1.753-1.074c.734-1.267 2.058-1.932 3.828-1.932h.059c1.376.043 2.479.528 3.28 1.442.603.687.99 1.594 1.166 2.715.53.139 1.023.319 1.478.538 1.186.57 2.108 1.395 2.742 2.453.692 1.156 1.017 2.553.94 4.048-.092 1.79-.723 3.408-1.878 4.813-1.308 1.592-3.18 2.631-5.57 3.091-.753.145-1.55.219-2.383.227zM9.598 16.558c.05.627.355 1.14.883 1.481.56.362 1.313.532 2.12.487 1.06-.057 1.9-.443 2.494-1.146.466-.55.79-1.267.972-2.158-.536-.096-1.13-.15-1.782-.15-.656 0-1.353.046-2.08.14-.987.127-1.76.41-2.238.82-.388.331-.398.708-.369.526z" />
  </svg>
);

interface SprintBadgeProps {
  name: string;
  participantNumber: number;
  onClose?: () => void;
}

export const SprintBadge = ({ name, participantNumber, onClose }: SprintBadgeProps) => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [shareMessage, setShareMessage] = useState('');
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('bottom');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShareDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculate dropdown position when opening
  const toggleDropdown = () => {
    if (!isShareDropdownOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = 280; // Approximate height of dropdown
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;
      
      // If not enough space below, open above
      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        setDropdownPosition('top');
      } else {
        setDropdownPosition('bottom');
      }
    }
    setIsShareDropdownOpen(!isShareDropdownOpen);
  };

  const createScreenshotBadge = (name: string, participantNumber: number) => {
    const formattedNumber = String(participantNumber).padStart(3, '0');
    const barcodeValue = `BSO-${formattedNumber}-${Date.now().toString().slice(-6)}`;
    
    const screenshotBadge = document.createElement('div');
    screenshotBadge.style.position = 'absolute';
    screenshotBadge.style.left = '-9999px';
    screenshotBadge.style.width = '400px';
    screenshotBadge.style.padding = '0';
    screenshotBadge.style.margin = '0';
    screenshotBadge.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif';
    screenshotBadge.innerHTML = `
      <div style="
        position: relative;
        width: 100%;
        background: #FAFAF8;
        border-radius: 16px;
        overflow: hidden;
        border: 2px solid rgba(219, 107, 63, 0.2);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      ">
        
        <!-- Header -->
        <div style="padding: 32px; text-align: center; background: linear-gradient(135deg, rgba(219, 107, 63, 0.1) 0%, rgba(219, 107, 63, 0.05) 50%, transparent 100%);">
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
        <div style="padding: 0 32px 32px 32px;">
          <!-- Dashed line -->
          <div style="width: 100%; height: 0; border-top: 2px dashed rgba(219, 107, 63, 0.3); margin-bottom: 24px;"></div>
          
          <!-- Participant info -->
          <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
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
              <div style="padding: 8px; background: rgba(219, 107, 63, 0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
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
          <div style="width: 100%; height: 0; border-top: 2px dashed rgba(219, 107, 63, 0.3); margin-bottom: 16px;"></div>
          
          <!-- Barcode -->
          <div style="display: flex; flex-direction: column; align-items: center; padding: 8px 0;">
            <svg width="250" height="70" viewBox="0 0 250 70">
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
                return bars.map((bar) => {
                  const x = currentX;
                  currentX += bar.width + spacing;
                  return `<rect x="${x}" y="10" width="${bar.width}" height="50" fill="#1A1A1A" />`;
                }).join('');
              })()}
            </svg>
            <p style="font-size: 11px; color: rgba(26, 26, 26, 0.6); letter-spacing: 0.3em; margin: 8px 0 0 0; font-family: monospace;">${barcodeValue}</p>
          </div>
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
        backgroundColor: '#FAFAF8',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: false,
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

  const shareText = `I just signed up for the Build Something Online Sprint! 🚀 Join me: #BuildSomethingOnline`;
  const siteUrl = window.location.href;

  // Helper to generate image blob
  const generateImageBlob = async (): Promise<Blob | null> => {
    const screenshotBadge = createScreenshotBadge(name, participantNumber);
    document.body.appendChild(screenshotBadge);
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(screenshotBadge.firstElementChild as HTMLElement, {
      backgroundColor: '#FAFAF8',
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: false,
    });
    
    document.body.removeChild(screenshotBadge);
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png', 1.0);
    });
  };

  // Helper to copy image to clipboard
  const copyImageToClipboard = async (blob: Blob): Promise<boolean> => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      return true;
    } catch {
      return false;
    }
  };

  // Helper to download blob as file
  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Share with image - tries clipboard first, falls back to download
  const shareWithImage = async (platform: string, shareUrlFn: () => void) => {
    setIsShareDropdownOpen(false);
    setShareMessage('Preparing image...');
    
    try {
      const blob = await generateImageBlob();
      if (!blob) {
        setShareMessage('Failed to generate image');
        setTimeout(() => setShareMessage(''), 3000);
        return;
      }

      // Try to copy image to clipboard
      const copied = await copyImageToClipboard(blob);
      
      if (copied) {
        setShareMessage(`Image copied! Paste it in your ${platform} post.`);
      } else {
        // Fallback: download the image
        downloadBlob(blob, `sprint-badge-${name.replace(/\s+/g, '-').toLowerCase()}.png`);
        setShareMessage(`Image downloaded! Attach it to your ${platform} post.`);
      }
      
      // Open the share URL after a brief delay
      setTimeout(() => {
        shareUrlFn();
      }, 500);
      
      setTimeout(() => setShareMessage(''), 6000);
    } catch (error) {
      console.error('Error sharing:', error);
      setShareMessage('Something went wrong. Please try again.');
      setTimeout(() => setShareMessage(''), 3000);
    }
  };

  const shareToX = () => {
    shareWithImage('X', () => {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`;
      window.open(url, '_blank', 'width=550,height=420');
    });
  };

  const shareToLinkedIn = () => {
    shareWithImage('LinkedIn', () => {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`;
      window.open(url, '_blank', 'width=550,height=420');
    });
  };

  const shareToFacebook = () => {
    shareWithImage('Facebook', () => {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}&quote=${encodeURIComponent(shareText)}`;
      window.open(url, '_blank', 'width=550,height=420');
    });
  };

  const shareToThreads = () => {
    shareWithImage('Threads', () => {
      const url = `https://www.threads.net/intent/post?text=${encodeURIComponent(`${shareText} ${siteUrl}`)}`;
      window.open(url, '_blank', 'width=550,height=420');
    });
  };

  const shareToInstagram = async () => {
    setIsShareDropdownOpen(false);
    setShareMessage('Preparing image...');
    
    try {
      const blob = await generateImageBlob();
      if (!blob) {
        setShareMessage('Failed to generate image');
        setTimeout(() => setShareMessage(''), 3000);
        return;
      }
      
      downloadBlob(blob, `sprint-badge-${name.replace(/\s+/g, '-').toLowerCase()}.png`);
      setShareMessage('Image downloaded! Open Instagram and share from your camera roll.');
      setTimeout(() => setShareMessage(''), 6000);
    } catch (error) {
      console.error('Error:', error);
      setShareMessage('Something went wrong. Please try again.');
      setTimeout(() => setShareMessage(''), 3000);
    }
  };

  const copyLink = async () => {
    const fullShareText = `${shareText} ${siteUrl}`;
    await navigator.clipboard.writeText(fullShareText);
    setShareMessage('Link copied to clipboard!');
    setTimeout(() => setShareMessage(''), 3000);
    setIsShareDropdownOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 bg-charcoal/60 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-warmWhite rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[calc(100vw-1rem)] sm:max-w-md p-4 sm:p-6 my-2 sm:my-4">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 text-charcoal/60 hover:text-charcoal transition-colors rounded-lg hover:bg-beige-100 z-10"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Ticket Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div
            ref={badgeRef}
            className="relative transition-transform duration-300 ease-out w-full"
            onMouseMove={(e) => {
              // Only apply hover effect on non-touch devices
              if (window.matchMedia('(hover: hover)').matches) {
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const mouseX = e.clientX;
                const relativeX = (mouseX - centerX) / (rect.width / 2);
                const rotateY = relativeX * 8;
                const rotateX = -Math.abs(relativeX) * 3;
                const scale = 1.02;
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`;
              }
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
              icon={<Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-warmOrange-600" />}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
          <button
            onClick={downloadBadge}
            disabled={isDownloading}
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 text-white rounded-lg font-medium hover:from-warmOrange-600 hover:to-warmOrange-700 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? 'Downloading...' : 'Download Badge'}</span>
          </button>
          
          {/* Share dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              ref={buttonRef}
              onClick={toggleDropdown}
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-beige-100 text-charcoal rounded-lg font-medium hover:bg-beige-200 border border-beige-200 transition-all duration-200 text-sm w-full sm:w-auto"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isShareDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isShareDropdownOpen && (
              <div className={`absolute left-0 right-0 sm:left-auto sm:right-0 bg-white rounded-lg shadow-lg border border-beige-200 py-2 z-50 min-w-[180px] ${
                dropdownPosition === 'top' 
                  ? 'bottom-full mb-2' 
                  : 'top-full mt-2'
              }`}>
                <button
                  onClick={shareToX}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm text-charcoal hover:bg-beige-50 transition-colors"
                >
                  <XIcon />
                  <span>Share on X</span>
                </button>
                <button
                  onClick={shareToLinkedIn}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm text-charcoal hover:bg-beige-50 transition-colors"
                >
                  <LinkedInIcon />
                  <span>Share on LinkedIn</span>
                </button>
                <button
                  onClick={shareToFacebook}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm text-charcoal hover:bg-beige-50 transition-colors"
                >
                  <FacebookIcon />
                  <span>Share on Facebook</span>
                </button>
                <button
                  onClick={shareToThreads}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm text-charcoal hover:bg-beige-50 transition-colors"
                >
                  <ThreadsIcon />
                  <span>Share on Threads</span>
                </button>
                <button
                  onClick={shareToInstagram}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm text-charcoal hover:bg-beige-50 transition-colors"
                >
                  <InstagramIcon />
                  <span>Share on Instagram</span>
                </button>
                <div className="border-t border-beige-200 my-1"></div>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm text-charcoal hover:bg-beige-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>Copy link</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {shareMessage && (
          <p className="text-center mt-2 sm:mt-3 text-sm text-warmOrange-600">
            {shareMessage}
          </p>
        )}

        <p className="text-center mt-3 sm:mt-4 text-xs text-charcoal/60">
          Share your badge to let others know you're joining!
        </p>
      </div>
    </div>
  );
};
