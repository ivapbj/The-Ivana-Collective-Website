import React, { useState } from "react";
import { X, Calendar, Clock, Sparkles, CheckCircle2, Loader2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillBusinessName?: string;
  prefillWebsiteUrl?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  prefillBusinessName = "",
  prefillWebsiteUrl = ""
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState(prefillBusinessName);
  const [websiteUrl, setWebsiteUrl] = useState(prefillWebsiteUrl);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Sync prefills when they change
  React.useEffect(() => {
    if (prefillBusinessName) setBusinessName(prefillBusinessName);
    if (prefillWebsiteUrl) setWebsiteUrl(prefillWebsiteUrl);
  }, [prefillBusinessName, prefillWebsiteUrl]);

  const timeSlots = [
    "9:00 AM",
    "10:30 AM",
    "1:00 PM",
    "2:30 PM",
    "4:00 PM"
  ];

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !selectedDate || !selectedTime) {
      setError("Please fill in your name, email, date, and preferred time slot.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          businessName,
          websiteUrl,
          date: selectedDate,
          timeSlot: selectedTime,
          notes
        })
      });

      if (!response.ok) {
        throw new Error("Failed to secure scheduling slot. Please try again.");
      }

      const data = await response.json();
      setSuccessData({
        date: selectedDate,
        time: selectedTime,
        message: data.message
      });
    } catch (err: any) {
      setError(err.message || "An unexpected scheduling error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

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
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="booking-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#B8C6C1] hover:text-[#F4F5F1] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Confirmation State */}
        {successData ? (
          <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#123B35] border border-[#B9D8CE]/20 flex items-center justify-center text-[#B9D8CE] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#F4F5F1]">Strategy Session Locked</h3>
              <p className="font-mono text-xs text-[#7CA99B] uppercase tracking-wider">
                {successData.date} @ {successData.time}
              </p>
            </div>

            <p className="text-sm text-[#B8C6C1] max-w-sm mx-auto leading-relaxed">
              {successData.message} We recommend reviewing your diagnostic metrics before the call.
            </p>

            <button
              id="booking-success-close-btn"
              onClick={onClose}
              className="
                px-6 py-3 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
                bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer shadow-md
              "
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
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

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-rose-400 font-mono text-xs bg-rose-950/20 border border-rose-900/30 p-3 rounded-lg flex items-center gap-2">
                  <span>⚠</span> {error}
                </p>
              )}

              {/* Step 1: Scheduling dates and slots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Date Selection */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                    Select Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                    Preferred Slot *
                  </label>
                  <select
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] cursor-pointer"
                  >
                    <option value="">-- Choose a Slot --</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 2: Customer details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Jane Doe"
                    className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., jane@mycompany.com"
                    className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10"
                  />
                </div>

                {/* Business name */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g., Elite Pilates Collective"
                    className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10"
                  />
                </div>

                {/* Website URL */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="e.g., https://mycompany.com"
                    className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                  Session Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What is the single biggest bottleneck in your current search discoverability or website conversion flow?"
                  className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold
                  bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all duration-200 cursor-pointer disabled:opacity-50
                "
                id="booking-submit-btn"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Allocating Space...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Strategy Slot</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
