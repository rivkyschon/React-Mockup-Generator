import {useState} from 'react';
import {generateMockupCode} from '../services/APIService';
import {ComponentFactoryConfig} from '../services/ComponentFactoryService';

interface UseMockupGeneratorHook {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => Promise<void>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  componentsConfig: ComponentFactoryConfig[];
  isError: boolean;
}

export const useMockupGenerator = (): UseMockupGeneratorHook => {
  const [input, setInput] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [componentsConfig, setComponentsConfig] = useState<
    ComponentFactoryConfig[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    setIsError(false); // Reset error state before attempting submission
    if (!input.trim()) return; // Prevent submitting empty input

    try {
      const response: ComponentFactoryConfig[] = await generateMockupCode(
        input,
      );
      setComponentsConfig(response);
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
    componentsConfig,
    isError,
  };
};
