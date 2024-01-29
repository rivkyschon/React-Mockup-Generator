import React, { useState } from 'react';
import RMGButton from './components/RMGButton';
import RMGHeader from './components/RMGHeader';
import RMGInput from './components/RMGInput';
import RMGText from './components/RMGText';
import RMGImage from './components/RMGImage';

const TestPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (

<div>
  <div>
    <RMGText content="First Name" />
    <RMGInput type="text" placeholder="Enter your first name" />
  </div>
  <div>
    <RMGText content="Last Name" />
    <RMGInput type="text" placeholder="Enter your last name" />
  </div>
  <div>
    <RMGText content="Email" />
    <RMGInput type="email" placeholder="Enter your email" />
  </div>
  <div>
    <RMGText content="Password" />
    <RMGInput type="password" placeholder="Enter your password" />
  </div>
  <div>
    <RMGButton title="Submit" />
  </div>
</div>

    // <div>
    //   <RMGHeader text="Test Header" />
    //   <RMGText content="This is a test text component" />
    //   <RMGInput placeholder="Enter some text" value={inputValue} onChange={handleInputChange} />
    //   <RMGButton title="Click Me" onClick={() => alert('Button clicked!')} />
    //   <RMGImage src="https://via.placeholder.com/150" alt="Placeholder Image" />
    // </div>
  );
};

export default TestPage;
