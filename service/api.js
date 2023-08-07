import axios from 'axios';

export const mainContentApi = {
  getMainContent: async () => {
    try {
      const { data: response } = await axios.get('/api/mainContent/mainContent');
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getMainProduct: async (productType) => {
    try {
      const { data: response } = await axios.get(`/api/product/${productType}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
