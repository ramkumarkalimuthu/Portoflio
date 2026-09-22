import React, { useState } from 'react';
import { X, Smartphone, Monitor, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { EmailTemplate } from '../types';

interface EmailModalProps {
  template: EmailTemplate | null;
  onClose: () => void;
}

export const EmailModal: React.FC<EmailModalProps> = ({ template, onClose }) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  if (!template) return null;

  const sampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${template.title}</title>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f1f5f9; }
    .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; }
    .header { padding: 24px; text-align: center; border-bottom: 1px solid #e2e8f0; }
    .banner { background-color: ${template.bannerColor}; color: #ffffff; padding: 32px 24px; }
    .content { padding: 24px; color: #334155; line-height: 1.6; }
    .button { display: inline-block; background-color: ${template.accentColor}; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 9999px; font-weight: bold; margin-top: 16px; }
    .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h2 style="color: #f37021; margin: 0;">VOYA FINANCIAL</h2>
    </div>
    <div class="banner">
      <h1 style="margin: 0 0 8px 0; font-size: 24px;">${template.title}</h1>
      <p style="margin: 0; opacity: 0.9;">${template.description}</p>
    </div>
    <div class="content">
      <p>Dear Valued Client,</p>
      <p>We are pleased to provide your latest financial advisory update designed to help you prepare, protect, and prosper.</p>
      <a href="#" class="button">Access Your Portal</a>
    </div>
    <div class="footer">
      <p>&copy; 2026 Voya Services Company. All rights reserved.</p>
      <p>Tested on Litmus & Email on Acid across 40+ mail clients.</p>
    </div>
  </div>
</body>
</html>`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-900/60 text-blue-400 border border-blue-700/60">
                Template #{template.number}
              </span>
              <span className="text-xs text-slate-400">{template.client}</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">{template.title}</h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${viewMode === 'preview' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Visual Preview
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${viewMode === 'code' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                HTML Code
              </button>
            </div>

            {/* Device Toggle */}
            {viewMode === 'preview' && (
              <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                <button
                  onClick={() => setDevice('desktop')}
                  className={`p-1.5 rounded-md transition-colors ${device === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`p-1.5 rounded-md transition-colors ${device === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Email Meta Bar */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 truncate">
            <span className="text-slate-400 font-semibold">Subject:</span>
            <span className="text-slate-200 truncate">{template.subjectLine}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span>From: advisory@voya.com</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">100% Litmus Pass</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950 flex justify-center">
          {viewMode === 'code' ? (
            <div className="w-full relative">
              <button
                onClick={copyCode}
                className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-md transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied HTML!' : 'Copy Code'}
              </button>
              <pre className="w-full p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-sky-200 font-mono overflow-x-auto">
                {sampleHtml}
              </pre>
            </div>
          ) : (
            <div className={`transition-all duration-300 ${device === 'mobile' ? 'w-[360px] border-4 border-slate-700 rounded-3xl p-1 bg-slate-900' : 'w-full max-w-[620px]'}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-xl text-slate-800 text-left">
                {/* Email Header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
                  <div className="font-black text-xl text-[#F37021] tracking-tight">
                    voya<span className="w-1.5 h-1.5 rounded-full bg-[#F37021] inline-block mb-1 ml-0.5" />
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">
                    {template.category}
                  </div>
                </div>

                {/* Email Banner */}
                <div
                  style={{ backgroundColor: template.bannerColor }}
                  className="p-6 sm:p-8 text-white relative overflow-hidden"
                >
                  <div className="max-w-[85%] relative z-10">
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 text-white mb-2 uppercase tracking-wider">
                      Executive Briefing
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-2">
                      {template.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                </div>

                {/* Email Body Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Dear Valued Client,
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    At Voya Financial, we are committed to helping you optimize your asset allocation and stay ahead of key regulatory milestones. Your personalized digital dashboard is now updated with customized insights tailored to your specific portfolio profile.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="text-xs text-slate-500">Benchmark Performance</div>
                      <div className="text-lg font-bold text-slate-900">+12.4% YTD</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="text-xs text-slate-500">Portfolio Status</div>
                      <div className="text-lg font-bold text-emerald-600">Optimized</div>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <a
                      href="#contact"
                      onClick={onClose}
                      style={{ backgroundColor: template.accentColor }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-4 h-4" /> View Full Account Report
                    </a>
                  </div>
                </div>

                {/* Email Footer */}
                <div className="p-6 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-400 space-y-2">
                  <p>© 2026 Voya Services Company. 5788 New Albany Rd, Columbus, OH.</p>
                  <p className="text-[11px] text-slate-400">
                    Template developed and QA-tested by Ram Kumar using Litmus & Email on Acid for bulletproof Outlook, Gmail, and iOS Mail rendering.
                  </p>
                  <div className="flex justify-center gap-4 text-[11px] text-slate-500 pt-1">
                    <span className="underline cursor-pointer">Privacy Policy</span>
                    <span>•</span>
                    <span className="underline cursor-pointer">Manage Preferences</span>
                    <span>•</span>
                    <span className="underline cursor-pointer">Unsubscribe</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
