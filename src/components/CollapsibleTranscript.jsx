import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiCopy, FiDownload, FiFileText } from 'react-icons/fi';

const CollapsibleTranscript = ({ title, content, pageTitle, wordCount = 500 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.fromTo(contentRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(contentRef.current,
          { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" }
        );
      }
    }
  }, [isOpen]);

  const toggleTranscript = () => {
    setIsOpen(!isOpen);
  };

  const generateTextFile = () => {
    const textContent = `${pageTitle} - Full Transcript\n\n${content}\n\nWord Count: ${wordCount} words\n\nGenerated from Early Childhood Curriculum Website`;
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${pageTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_transcript.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden my-8">
      <button
        onClick={toggleTranscript}
        className="w-full p-6 bg-gradient-to-r from-primary-50 to-primary-100 border-none cursor-pointer text-left flex items-center justify-between font-heading text-lg font-semibold text-primary-800 transition-all duration-150 hover:from-primary-100 hover:to-primary-200"
      >
        <div className="flex items-center gap-3">
          <FiFileText />
          {title || 'Page Transcript'} ({wordCount} words)
        </div>
        <FiChevronDown
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <div ref={contentRef} className="overflow-hidden bg-gray-50">
        <div className="p-8 text-sm leading-relaxed text-gray-700">
          <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
            Full Transcript: {wordCount} words
          </div>
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="px-8 py-4 bg-white border-t border-gray-200 flex gap-3">
          <button
            onClick={generateTextFile}
            className="flex items-center gap-2 px-4 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium cursor-pointer transition-all duration-150 hover:bg-secondary-700 hover:-translate-y-0.5"
          >
            <FiDownload />
            Download as TXT
          </button>
          <button
            onClick={copyToClipboard}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-150 ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-gray-600 text-white hover:bg-gray-700 hover:-translate-y-0.5'
            }`}
          >
            <FiCopy />
            {copied ? 'Copied!' : 'Copy Text'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleTranscript;
