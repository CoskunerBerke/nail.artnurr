const fs = require('fs');
const path = require('path');
const https = require('https');

const shortcodes = [
  "DYWuOHYI1mm",
  "DYVPS6nRSdV",
  "DVp_hl2iE9f",
  "DVD8e6nCI90",
  "DVlAIVICDkU",
  "DUkoYMiCLen",
  "DUYR0xOiDYV",
  "DT5XqmCiHmY",
  "DSqPBmiiOva",
  "DSaQTUwCKaN"
];

const targetDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(shortcode) {
  return new Promise((resolve, reject) => {
    const url = `https://www.instagram.com/p/${shortcode}/media/?size=l`;
    const dest = path.join(targetDir, `${shortcode}.jpg`);
    
    // Pass a realistic User-Agent to ensure the request is allowed
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    https.get(url, options, (res) => {
      // Follow redirect if present
      if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectUrl = res.headers.location;
        https.get(redirectUrl, options, (res2) => {
          if (res2.statusCode !== 200) {
            reject(new Error(`Failed to download ${shortcode}: status ${res2.statusCode}`));
            return;
          }
          const file = fs.createWriteStream(dest);
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Successfully downloaded ${shortcode}`);
            resolve();
          });
        }).on('error', (err) => {
          fs.unlink(dest, () => {});
          reject(err);
        });
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${shortcode}: status ${res.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded ${shortcode}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log("Starting image downloads from Instagram...");
  for (const code of shortcodes) {
    try {
      await downloadImage(code);
    } catch (err) {
      console.error(`Error downloading ${code}:`, err.message);
    }
  }
  console.log("Downloads finished.");
}

downloadAll();
