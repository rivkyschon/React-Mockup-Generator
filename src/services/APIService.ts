import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const generateMockupCode = async (input: string): Promise<string> => {
  try {
    const response = await axios.post<{code: string}>(`${API_URL}/generate-code`, {
      description: input
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data.code;
  } catch (error) {
    console.error('Error fetching the component code:', error);
    throw error;
  }
};
