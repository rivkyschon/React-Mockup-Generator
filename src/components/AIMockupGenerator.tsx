import React, { useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

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
  const  API_URL = 'https://react-mockup-generator-api.onrender.com';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {

      const response = await axios.post(`${API_URL}/generate-code`, {
        description: input
      },
      {headers: {
        'Content-Type': 'application/json'
      }
    });
        const res = response.data.code;
        console.log("response  "+res)
        // const clean = DOMPurify.sanitize(response.data.code);
        // console.log("clean   "+clean)
        setComponentCode(res);
    } catch (error) {
      console.error('Error fetching the component code:', error);
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">AI Mockup Generator</h1>
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <label htmlFor="input" className="block text-lg font-medium text-gray-700 mb-2">Enter Text</label>
        <input
          id="input"
          type="text"
          placeholder="Type here..."
          value={input}
          onChange={handleInputChange}
          className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button 
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generate Mockup
        </button>
        {isError && <p className="text-red-500 text-sm mt-2">There was an error generating the component.</p>}
      </div>
      <div dangerouslySetInnerHTML={{ __html:componentCode}} />
    </div>
  );
};

export default AIMockupGenerator;
