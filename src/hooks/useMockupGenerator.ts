import { useState } from 'react';
import { generateMockupCode } from '../services/APIService';

interface UseMockupGeneratorHook {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => Promise<void>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  componentCode: string;
  isError: boolean;
}

export const useMockupGenerator = (): UseMockupGeneratorHook => {
  const [input, setInput] = useState<string>('');
  const [componentCode, setComponentCode] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    setIsError(false); // Reset error state before attempting submission
    if (!input.trim()) return; // Prevent submitting empty input

    try {
      const code = await generateMockupCode(input);
      setComponentCode(code);
      setInput(''); // Clear the input field after submission
    } catch (error) {
      setIsError(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action to avoid submitting a form if there is one
      handleSubmit();
    }
  };

  return {
    input,
    handleInputChange,
    handleSubmit,
    handleKeyDown,
    componentCode,
    isError
  };
};
