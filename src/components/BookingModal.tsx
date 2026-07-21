import { Calendar, Sparkles, X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function getBookingUrl(): string | null {
  const configuredUrl = import.meta.env.VITE_GOOGLE_BOOKING_URL?.trim();
  if (!configuredUrl) return null;

  try {
    const parsedUrl = new URL(configuredUrl);
    return parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:"
      ? configuredUrl
      : null;
  } catch {
    return null;
  }
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null;

  const bookingUrl = getBookingUrl();

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/60 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className="
          relative w-full max-w-xl bg-[#0D2623] rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8
          animate-in zoom-in-95 duration-200 overflow-hidden text-left
        "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          id="booking-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#B8C6C1] hover:text-[#F4F5F1] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#B9D8CE]" />
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#7CA99B]">
                COLLABORATIVE SYSTEM PLANNING
              </span>
            </div>
            <h3 className="font-serif text-2xl text-[#F4F5F1]">Schedule a Strategy Call</h3>
            <p className="text-xs text-[#B8C6C1] mt-1 leading-relaxed">
              Connect directly with a boutique digital architect. Let&apos;s evaluate your map proximity, conversion pathways, and design a custom organic roadmap.
            </p>
          </div>

          <p className="text-sm text-[#B8C6C1] leading-relaxed">
            Choose an available date and time directly through our secure Google Calendar booking page.
          </p>

          {bookingUrl ? (
            <a
              id="booking-submit-btn"
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold
                bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all duration-200 cursor-pointer
              "
            >
              <Calendar className="w-4 h-4" />
              <span>View Available Times</span>
            </a>
          ) : (
            <p className="text-rose-400 font-mono text-xs bg-rose-950/20 border border-rose-900/30 p-3 rounded-lg">
              Online booking is temporarily unavailable. Please contact us directly to schedule your strategy call.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
