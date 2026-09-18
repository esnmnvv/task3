import axios from "axios";

export const characterService = {
  getAll: async () => {
    const res = await axios.get(
      "https://rickandmortyapi.com/api/character?page=1",
    );
    return res.data;
  },

  getDetail: async (id) => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    return res.data;
  },
};
