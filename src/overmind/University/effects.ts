
import axios  from 'axios';
import { university } from './states'
  export const httpApi = {
    getAll: async (): Promise<university[]> => {
      return (await axios.get('http://universities.hipolabs.com/search?country=United+States')).data;
    }
}