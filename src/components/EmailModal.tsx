import React, { useState } from 'react';
import { X, Smartphone, Monitor, Copy, Check } from 'lucide-react';
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

  const sampleHtml = template.htmlCode ?? '';

  const previewHtml = (() => {
    try {
      const assetBaseUrl = new URL('.', template.liveUrl ?? template.client).toString();
      const previewStyles = '<style>html,body{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none;width:0;height:0}</style>';
      return sampleHtml.replace(/<head(\s[^>]*)?>/i, (headTag) => `${headTag}<base href="${assetBaseUrl}">${previewStyles}`);
    } catch {
      return sampleHtml;
    }
  })();

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
            <span>From: no-reply@ram.com</span>
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
            <div className={`min-w-0 max-w-full overflow-hidden transition-all duration-300 ${device === 'mobile' ? 'w-[min(360px,calc(100vw-2rem))] border-4 border-slate-700 rounded-3xl p-1 bg-slate-900' : 'w-full max-w-190'}`}>
              <iframe
                title={`${template.title} HTML preview`}
                srcDoc={previewHtml}
                sandbox="allow-scripts allow-same-origin"
                className={`block w-full ${device === 'mobile' ? 'h-[min(660px,calc(100vh-12rem))]' : 'h-[min(760px,calc(100vh-10rem))]'} bg-white rounded-xl border-0 shadow-xl`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
