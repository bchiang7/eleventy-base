// FETCH GITHUB STARGAZERS COUNT (AND MORE) AT BUILD TIME
// https://www.11ty.dev/docs/quicktips/eliminate-js/

const axios = require('axios');

module.exports = async () => {
  // GitHub API: https://developer.github.com/v3/repos/#get
  const result = await axios.get('https://api.github.com/repos/11ty/eleventy');

  return {
    stargazers: result.data.stargazers_count,
  };
};
