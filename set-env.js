const fs = require('fs');

const envConfigFile = `export const environment = {
  facebookUrl: '${process.env.FACEBOOK_URL || "#"}',
  twitterUrl: '${process.env.TWITTER_URL || "#"}',
  instagramUrl: '${process.env.INSTAGRAM_URL || "#"}',
  linkedinUrl: '${process.env.LINKEDIN_URL || "#"}'
};
`;

const dir = './src/environments';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync('./src/environments/environment.ts', envConfigFile);
console.log('Angular environment.ts file generated.');
