
import axios  from 'axios';
import { post } from './state'
  export const httpApi = {
    getAll: async (): Promise<post[]> => {
      return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
    }
}