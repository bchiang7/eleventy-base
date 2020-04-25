// FETCH GITHUB STARGAZERS COUNT (AND MORE) AT BUILD TIME
// https://www.11ty.dev/docs/quicktips/eliminate-js/

const fetch = require('node-fetch');

module.exports = async () =>
  // GitHub API: https://developer.github.com/v3/repos/#get
  fetch('https://api.github.com/repos/11ty/eleventy')
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json =>
      // prune the data to return only what we want
      ({
        stargazers: json.stargazers_count,
      }),
    );
