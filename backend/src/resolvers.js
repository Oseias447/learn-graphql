const axios = require("axios");

module.exports = {
  Query: {
    users: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");

        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },
  },
};
