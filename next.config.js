const withImages = require('next-images');
const withFonts = require('next-fonts');
module.exports = withImages(
  withFonts({
    env: {
      API_URL: 'https://possue-postgres.herokuapp.com',
    },
  })
);
