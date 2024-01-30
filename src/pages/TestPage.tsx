import React, { useState } from 'react';
import RMGButton from '../components/RMGButton';
import RMGHeader from '../components/RMGHeader';
import RMGInput from '../components/RMGInput';
import RMGText from '../components/RMGText';
import RMGImage from '../components/RMGImage';

const TestPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      <RMGHeader text="Test Header" />
      <RMGText content="This is a test text component" />
      <RMGInput placeholder="Enter some text" value={inputValue} onChange={handleInputChange} />
      <RMGButton title="Click Me" onClick={() => alert('Button clicked!')} />
      <RMGImage src="https://via.placeholder.com/150" alt="Placeholder Image" />
      </div>
    </div>
  );
};

export default TestPage;
