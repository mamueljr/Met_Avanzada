import { useEffect, useState } from 'react';

interface UseTypingEffectProps {
  text: string;
  speed?: number;
  startDelay?: number;
}

export const useTypingEffect = ({ text, speed = 100, startDelay = 0 }: UseTypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;

    const startTyping = () => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return interval;
    };

    timeout = setTimeout(() => {
      const interval = startTyping();
      return () => clearInterval(interval);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
};
