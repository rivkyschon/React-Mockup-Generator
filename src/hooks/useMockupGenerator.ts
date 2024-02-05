import {useState} from 'react';
import {generateMockupCode} from '../services/GenerateCodeService';
import {ComponentConfig} from '../services/ComponentFactoryService';

interface UseMockupGeneratorHook {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => Promise<void>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  components: ComponentConfig[];
  isError: boolean;
  isLoading: boolean;
  isModalOpen: boolean;
}

export const useMockupGenerator = (): UseMockupGeneratorHook => {
  const [input, setInput] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [components, setComponents] = useState<ComponentConfig[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    setIsError(false); // Reset error state before attempting submission
    if (!input.trim()) return; // Prevent submitting empty input

    setInput('');
    setIsLoading(true);

    try {
      const response: ComponentConfig[] = await generateMockupCode(input);
      setComponents(response);
      setIsLoading(false);
      setIsModalOpen(true);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return {
    input,
    handleInputChange,
    handleSubmit,
    handleKeyDown,
    components,
    isError,
    isLoading,
    isModalOpen,
  };
};
