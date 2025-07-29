'use client';

import { useState } from 'react';
import { Share2, Linkedin, MessageCircle, Check, Copy } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export default function ShareButtons({ title, url, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    linkedinUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    threadsUrl: `https://threads.net/intent/post?text=${encodeURIComponent(`${title}\n\n${description || ''}\n\n${url}`)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareButtons = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: shareData.linkedinUrl,
      color: 'text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      name: 'Threads',
      icon: MessageCircle,
      url: shareData.threadsUrl,
      color: 'text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      bgColor: 'bg-gray-50 dark:bg-gray-800',
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <Share2 size={20} />
        <span className="font-medium">Share this article</span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {shareButtons.map((button) => {
          const IconComponent = button.icon;
          return (
            <a
              key={button.name}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-lg border
                border-gray-300 dark:border-gray-600 ${button.bgColor}
                ${button.color} transition-all duration-200
                text-sm font-medium
              `}
            >
              <IconComponent size={16} />
              <span>Share on {button.name}</span>
            </a>
          );
        })}
        
        <button
          onClick={copyToClipboard}
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-lg border
            border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800
            hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200
            text-sm font-medium text-gray-700 dark:text-gray-300
            hover:text-gray-900 dark:hover:text-gray-100
          `}
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
}
