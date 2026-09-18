import axios from "axios";

export const locationService = {
  getAll: async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/location");
    return res.data;
  },

  getDetail: async (id) => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/location/${id}`,
    );
    return res.data;
  },
};
