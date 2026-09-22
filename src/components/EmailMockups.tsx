import React from 'react';

interface EmailMockupProps {
  type: string;
  title: string;
  className?: string;
  isDetailed?: boolean;
}

export const EmailMockup: React.FC<EmailMockupProps> = ({ type, title, className = "w-full h-full", isDetailed = false }) => {
  // Common Voya Logo Component
  const VoyaLogo = ({ size = "text-[9px]" }: { size?: string }) => (
    <div className={`font-black tracking-tight text-[#F37021] ${size} flex items-center gap-0.5`}>
      <span>voya</span>
      <span className="w-1 h-1 rounded-full bg-[#F37021] inline-block mb-1" />
    </div>
  );

  return (
    <div className={`${className} bg-white text-slate-800 rounded-lg overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between select-none relative transition-all duration-300 group-hover:shadow-md`}>
      {/* Top Email Client Bar */}
      <div className="bg-slate-100/90 px-2 py-1 border-b border-slate-200 flex items-center justify-between text-[8px] text-slate-500">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
        <div className="font-mono text-[7px] text-slate-400 truncate max-w-[130px]">
          voya.com/updates
        </div>
        <div className="text-[7px] text-emerald-600 font-medium">Responsive HTML</div>
      </div>

      {/* Main Email Container */}
      <div className="p-2.5 flex-1 flex flex-col justify-between bg-white text-left">
        {/* Brand header */}
        <div className="flex justify-between items-center mb-1.5 pb-1 border-b border-slate-100">
          <VoyaLogo size={isDetailed ? "text-sm" : "text-[10px]"} />
          <div className="text-[6px] text-slate-400 uppercase tracking-wider font-semibold">
            {type.toUpperCase()}
          </div>
        </div>

        {/* Dynamic Email Content by Template Type */}
        {type === 'financial' && (
          <div className="space-y-1.5">
            <div className="bg-[#00587C] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Financial Services</div>
                <div className="text-[6px] text-sky-100 line-clamp-2 mt-0.5">Maximize returns with customized portfolio advisory.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-sky-200/30 flex items-center justify-center shrink-0 text-[10px]">
                📊
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[6px] text-slate-600">
              <div className="bg-slate-50 p-1 rounded border border-slate-100">
                <span className="font-bold text-slate-800">Q3 Yield:</span> +8.4%
              </div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">
                <span className="font-bold text-slate-800">Risk Profile:</span> Moderate
              </div>
            </div>
          </div>
        )}

        {type === 'retirement' && (
          <div className="space-y-1.5">
            <div className="bg-[#007096] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Retirement Planning</div>
                <div className="text-[6px] text-sky-100 line-clamp-2 mt-0.5">Plan your golden years with verified certainty.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-400/30 flex items-center justify-center shrink-0 text-[10px]">
                🏖️
              </div>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#F37021] rounded-full" />
              </div>
              <div className="flex justify-between text-[6px] text-slate-500 font-mono">
                <span>Savings Goal: 75%</span>
                <span className="text-[#F37021] font-bold">On Track</span>
              </div>
            </div>
          </div>
        )}

        {type === 'investment' && (
          <div className="space-y-1.5">
            <div className="bg-[#1E293B] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Investment Update</div>
                <div className="text-[6px] text-slate-300 line-clamp-2 mt-0.5">Quarterly capital markets breakdown & asset balance.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center shrink-0 text-[10px]">
                📈
              </div>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-1 rounded text-[6px] text-slate-600">
              <span>Equities / Fixed Income</span>
              <span className="font-bold text-emerald-600">60 / 40 Split</span>
            </div>
          </div>
        )}

        {type === 'wellness' && (
          <div className="space-y-1.5">
            <div className="bg-[#2D6A4F] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Wellness Campaign</div>
                <div className="text-[6px] text-emerald-100 line-clamp-2 mt-0.5">Health savings accounts & employee wellness perks.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-300/30 flex items-center justify-center shrink-0 text-[10px]">
                🌿
              </div>
            </div>
            <div className="flex gap-1 text-[6px]">
              <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">HSA Match</span>
              <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">Wellness Days</span>
            </div>
          </div>
        )}

        {type === 'event' && (
          <div className="space-y-1.5">
            <div className="bg-[#0F172A] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Event Invitation</div>
                <div className="text-[6px] text-sky-200 line-clamp-2 mt-0.5">Global Financial Summit 2026 Live Webcast.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-sky-400/20 flex items-center justify-center shrink-0 text-[10px]">
                🎙️
              </div>
            </div>
            <div className="bg-slate-50 p-1 rounded border border-slate-100 flex justify-between items-center text-[6px]">
              <span className="text-slate-500">Oct 24, 2026 • 2:00 PM EST</span>
              <span className="text-blue-600 font-bold">RSVP Now</span>
            </div>
          </div>
        )}

        {type === 'product' && (
          <div className="space-y-1.5">
            <div className="bg-[#0B2545] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Product Announcement</div>
                <div className="text-[6px] text-slate-300 line-clamp-2 mt-0.5">New self-service digital portal for instant claims.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#F37021]/30 flex items-center justify-center shrink-0 text-[10px]">
                🚀
              </div>
            </div>
            <div className="text-[6px] text-slate-600 bg-amber-50/60 p-1 rounded border border-amber-200/60">
              ✨ Experience zero-friction account management on web & mobile.
            </div>
          </div>
        )}

        {type === 'newsletter' && (
          <div className="space-y-1.5">
            <div className="bg-[#4A3B32] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Monthly Newsletter</div>
                <div className="text-[6px] text-amber-100 line-clamp-2 mt-0.5">Curated market trends & insights from our chief economists.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-300/30 flex items-center justify-center shrink-0 text-[10px]">
                📰
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[6px] text-slate-600">
              <div className="border-l-2 border-[#F37021] pl-1">
                <div className="font-bold text-slate-800">Macro Trends</div>
                <div className="text-[5px] text-slate-500">Global inflation outlook</div>
              </div>
              <div className="border-l-2 border-[#00587C] pl-1">
                <div className="font-bold text-slate-800">Smart Tax</div>
                <div className="text-[5px] text-slate-500">Year-end deductions</div>
              </div>
            </div>
          </div>
        )}

        {type === 'promo' && (
          <div className="space-y-1.5">
            <div className="bg-[#0052CC] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Promotional Offer</div>
                <div className="text-[6px] text-blue-100 line-clamp-2 mt-0.5">Zero advisory fees for 90 days for new corporate enrollees.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 text-slate-900 text-[10px] font-bold">
                %
              </div>
            </div>
            <div className="text-center bg-blue-50 py-1 rounded border border-blue-200 text-[7px] text-[#0052CC] font-bold">
              Claim Your 90-Day Free Advisory
            </div>
          </div>
        )}

        {type === 'yearend' && (
          <div className="space-y-1.5">
            <div className="bg-[#1A365D] text-white p-2 rounded flex items-center justify-between">
              <div className="max-w-[70%]">
                <div className="text-[8px] font-bold leading-tight">Year End Campaign</div>
                <div className="text-[6px] text-sky-100 line-clamp-2 mt-0.5">Ensure your 401(k) contributions are optimized before Dec 31.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-cyan-400/30 flex items-center justify-center shrink-0 text-[10px]">
                🗓️
              </div>
            </div>
            <div className="flex justify-between items-center text-[6px] bg-slate-50 p-1 rounded border border-slate-100">
              <span className="text-slate-600 font-medium">Contribution Deadline:</span>
              <span className="text-red-600 font-bold">December 31</span>
            </div>
          </div>
        )}

        {type === 'holiday' && (
          <div className="space-y-1.5">
            <div className="bg-[#0A192F] text-amber-200 p-2 rounded flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-amber-400/20 rounded-full blur-sm" />
              <div className="max-w-[70%] relative z-10">
                <div className="text-[8px] font-bold leading-tight text-white">Holiday Greeting</div>
                <div className="text-[6px] text-amber-200/90 line-clamp-2 mt-0.5">Wishing you peace, joy and continued prosperity.</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 text-[10px] relative z-10">
                ✨
              </div>
            </div>
            <div className="text-center text-[6px] text-amber-900 bg-amber-50/80 py-1 rounded border border-amber-200/60 font-serif italic">
              "Happy Holidays from the entire Voya Financial family!"
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[6px] text-slate-400">Tested on Litmus & EoA</div>
          <span className="h-4 px-2 rounded-full bg-[#F37021] text-[6px] font-bold text-white flex items-center shadow-xs">
            Learn More
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-50 px-2 py-1 border-t border-slate-200/80 text-[6px] text-slate-400 flex justify-between items-center">
        <span>© 2026 Voya Services Company</span>
        <span className="text-slate-500 underline">Unsubscribe</span>
      </div>
    </div>
  );
};
