import React, { useState } from 'react';
import { X, Smartphone, Monitor, ExternalLink } from 'lucide-react';
import { EmailTemplate } from '../types';

interface EmailModalProps {
  template: EmailTemplate | null;
  onClose: () => void;
}

export const EmailModal: React.FC<EmailModalProps> = ({ template, onClose }) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [previewMode, setPreviewMode] = useState<'screenshot' | 'live'>('screenshot');

  if (!template) return null;

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
              <span className="text-xs text-slate-400">{template.category}</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">{template.title}</h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {template.liveUrl && (
              <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                <button
                  onClick={() => setPreviewMode('screenshot')}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${previewMode === 'screenshot' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Screenshot
                </button>
                <button
                  onClick={() => setPreviewMode('live')}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${previewMode === 'live' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Live URL
                </button>
              </div>
            )}

            {/* Device Toggle */}
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

            {template.liveUrl && (
              <a
                href={template.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                title="Open live URL in a new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950 flex justify-center">
          <div className={`min-w-0 max-w-full overflow-hidden transition-all duration-300 ${device === 'mobile' ? 'w-[min(360px,calc(100vw-2rem))] border-4 border-slate-700 rounded-3xl p-1 bg-slate-900' : 'w-full max-w-190'}`}>
            {previewMode === 'screenshot' && template.imageUrl ? (
              <img
                src={template.imageUrl}
                alt={`${template.title} screenshot preview`}
                className="block w-full h-auto rounded-xl shadow-xl"
              />
            ) : template.liveUrl ? (
              <iframe
                title={`${template.title} live preview`}
                src={template.liveUrl}
                sandbox="allow-scripts allow-same-origin"
                className={`block w-full ${device === 'mobile' ? 'h-[min(660px,calc(100vh-12rem))]' : 'h-[min(760px,calc(100vh-10rem))]'} bg-white rounded-xl border-0 shadow-xl`}
              />
            ) : (
              <div className="flex h-64 items-center justify-center rounded-xl bg-white text-slate-600">
                No live preview is available for this template.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
