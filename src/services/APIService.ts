import axios from 'axios';
import {ComponentFactoryConfig} from './ComponentFactoryService';
import {Logger} from 'html2canvas/dist/types/core/logger';
import {Console} from 'console';
const API_URL = 'http://localhost:5000';

export const generateMockupCode = async (
  input: string,
): Promise<ComponentFactoryConfig[]> => {
  try {
    const response = await axios.post<{code: ComponentFactoryConfig[]}>(
      `${API_URL}/generate-code`,
      {
        description: input,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('====================================');
    console.log(response.data.code);
    console.log('====================================');
    return response.data.code;
  } catch (error) {
    console.error('Error fetching the component code:', error);
    throw error;
  }
};
