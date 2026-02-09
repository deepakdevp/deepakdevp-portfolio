'use client';

import { useEffect, useState } from 'react';
import { Flex, Text, Heading } from '@once-ui-system/core';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (hasVisited) {
      setIsFirstVisit(false);
      setIsVisible(false);
      return;
    }

    // Mark as visited
    localStorage.setItem('hasVisitedBefore', 'true');

    // Animate progress
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(newProgress));
      
      if (newProgress < 100) {
        requestAnimationFrame(animateProgress);
      } else {
        // Fade out after complete
        setTimeout(() => {
          setIsVisible(false);
        }, 300);
      }
    };
    
    requestAnimationFrame(animateProgress);
  }, []);

  if (!isFirstVisit || !isVisible) {
    return null;
  }

  return (
    <Flex
      position="fixed"
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'var(--page-background)',
        transition: 'opacity 0.5s ease-out',
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? 'none' : 'auto',
      }}
      direction="column"
      horizontal="center"
      vertical="center"
      gap="l"
    >
      <Heading variant="display-strong-m">
        Deepak Dev
      </Heading>
      
      <Text variant="body-default-m" onBackground="neutral-weak">
        Full Stack Engineer
      </Text>

      {/* Progress bar container */}
      <Flex
        style={{
          width: '200px',
          height: '4px',
          backgroundColor: 'var(--neutral-alpha-weak)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        {/* Progress bar fill */}
        <Flex
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: 'var(--brand-solid-strong)',
            transition: 'width 0.1s ease-out',
            borderRadius: '2px',
          }}
        />
      </Flex>

      <Text
        variant="label-default-s"
        onBackground="neutral-weak"
        style={{ fontFamily: 'var(--font-code)' }}
      >
        {progress}%
      </Text>
    </Flex>
  );
}
