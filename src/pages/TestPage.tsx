import React, { useState } from 'react';
import RMGButton from '../components/RMGButton';
import RMGHeader from '../components/RMGHeader';
import RMGInput from '../components/RMGInput';
import RMGText from '../components/RMGText';
import RMGImage from '../components/RMGImage';

const TestPage: React.FC = () => {

  return (
<div className="w-full">
  <div className="mb-5 p-4 border border-gray-200 rounded">
    <h3 className="text-lg font-semibold mb-2">Header Component</h3>
    <RMGHeader text="Test Header" />
  </div>
  <div className="mb-5 p-4 border border-gray-200 rounded">
    <h3 className="text-lg font-semibold mb-2">Text Component</h3>
    <RMGText content="This is a test text component" />
  </div>
  <div className="mb-5 p-4 border border-gray-200 rounded">
    <h3 className="text-lg font-semibold mb-2">Input Component</h3>
    <RMGInput placeholder="Enter some text" type="text" />
  </div>
  <div className="mb-5 p-4 border border-gray-200 rounded">
    <h3 className="text-lg font-semibold mb-2">Button Component</h3>
    <RMGButton title="Click Me" onClick={() => alert('Button clicked!')} />
  </div>
  <div className="mb-5 p-4 border border-gray-200 rounded">
    <h3 className="text-lg font-semibold mb-2">Image Component</h3>
    <RMGImage src="https://via.placeholder.com/150" alt="Placeholder Image" />
  </div>
</div>

  );
};

export default TestPage;
