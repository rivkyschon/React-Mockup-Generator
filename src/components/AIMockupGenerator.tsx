import React, { useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';

import RMGButton from './RMGButton';
import RMGHeader from './RMGHeader';
import RMGImage from './RMGImage';
import RMGInput from './RMGInput';
import RMGText from './RMGText';

const AIMockupGenerator = () => {
  const [input, setInput] = useState('');
  const [componentCode, setComponentCode] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {

      const response = await axios.post('http://localhost:5000/generate-code', {
        description: input
      },
      {headers: {
        'Content-Type': 'application/json'
      }
    });
        console.log("response  "+response.data.code)
        // const clean = DOMPurify.sanitize(response.data.code);
        // console.log("clean   "+clean)
        setComponentCode(response.data.Code.stringify());
    } catch (error) {
      console.error('Error fetching the component code:', error);
      setIsError(true);
    }
  };

  return (
    <div>
      <h1>AI Mockup Generator</h1>
      <input
        type="text"
        placeholder="Type here..."
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Generate Code</button>
      {isError && <p>There was an error generating the component.</p>}
      <div dangerouslySetInnerHTML={{ __html: componentCode }} />
    </div>
  );
};

export default AIMockupGenerator;
