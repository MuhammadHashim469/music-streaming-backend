
const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGE_KIT,               // your private key
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,  // REQUIRED! e.g. https://ik.imagekit.io/your_id
  // publicKey: process.env.IMAGEKIT_PUBLIC_KEY,   // optional for server-side
});

async function uploadfile(file) {
  try {
    const result = await imagekit.files.upload({
      file: file,                           // buffer / base64 / stream / remote URL
      fileName: `music-${Date.now()}`,      // or better: add extension
      folder: "/yt/music",                  // works with or without leading /
      // Optional but recommended:
      // useUniqueFileName: true,
      // tags: ["music", "cover"],
    });

    
    return result;  // has .url, .fileId, .name, .size, etc.
  } catch (error) {
    console.error("ImageKit upload failed:", error.message);
    if (error.response) {
      console.error("Full error response:", error.response.data);
    }
    throw error;  // so controller can catch & send 500
  }
}

module.exports = uploadfile;