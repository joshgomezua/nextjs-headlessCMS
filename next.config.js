const withImages = require('next-images');
const withFonts = require('next-fonts');
module.exports = withImages(
  withFonts({
    env: {
      API_URL: 'https://possue-postgres.herokuapp.com',
    },
  })
);

// "http://localhost:1337/"
// API_URL: 'https://possue-postgres.herokuapp.com',
