'use client';

import { useEffect, useRef, useState } from 'react';

interface UtterancesProps {
  repo: string;
  issueMap?: 'pathname' | 'url' | 'title' | 'og:title';
  theme?: 'github-light' | 'github-dark' | 'preferred-color-scheme' | 'github-dark-orange' | 'icy-dark' | 'dark-blue' | 'photon-dark' | 'boxy-light' | 'gruvbox-dark';
  label?: string;
}

export default function Utterances({ 
  repo = 'novskidev/novskidev.cloud', 
  issueMap = 'pathname',
  theme = 'icy-dark',
  label = 'comments'
}: UtterancesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !mountedRef.current) return;

    // Clear any existing utterances content
    containerRef.current.innerHTML = '';
    setIsLoaded(false);

    // Add a small delay to ensure DOM is stable
    const timeoutId = setTimeout(() => {
      if (!containerRef.current || !mountedRef.current) return;

      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.setAttribute('repo', repo);
      script.setAttribute('issue-term', issueMap);
      script.setAttribute('theme', theme);
      script.setAttribute('label', label);

      // Add error handling for the script
      script.onerror = () => {
        console.warn('Failed to load Utterances comments');
      };

      script.onload = () => {
        if (mountedRef.current) {
          setIsLoaded(true);
        }
      };

      // Double check container exists and component is still mounted
      if (containerRef.current && mountedRef.current) {
        containerRef.current.appendChild(script);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      // Mark as unmounted immediately
      mountedRef.current = false;
      // Clear container if it still exists
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      setIsLoaded(false);
    };
  }, [repo, issueMap, theme, label]);

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Comments
      </h3>
      <div 
        ref={containerRef} 
        className="utterances-container min-h-[200px]"
        style={{ 
          opacity: isLoaded ? 1 : 0.7,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      {!isLoaded && (
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
          Loading comments...
        </div>
      )}
    </div>
  );
}
