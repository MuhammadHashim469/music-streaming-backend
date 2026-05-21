const musicModel = require("../models/music.model");
const uploadfile = require("../services/storage.services");
const albumModel = require("../models/album.model");

// Create Music
async function createMusic(req, res) {
  try {
    const { title } = req.body;

    // check file
    if (!req.file) {
      return res.status(400).json({
        message: "Music file is required",
      });
    }

    // upload file to ImageKit
    const result = await uploadfile(
      req.file.buffer.toString("base64")
    );

    // save music in DB
    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: req.user.id,
    });

    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Create Album
async function createAlbum(req, res) {
  try {
    const { title, musicId } = req.body;

    const album = await albumModel.create({
      title,
      artist: req.user.id,
      music: [musicId],
    });

    res.status(201).json({
      message: "Album created successfully",
      album: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        music: album.music,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Get All Music
async function getallMusic(req, res) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 10;

    const skip = (page - 1) * limit;

    const music = await musicModel
      .find()
      .skip(skip)
      .limit(limit)
      .populate("artist", "username email");

    res.status(200).json({
      message: "Music fetched successfully",
      music,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Get All Albums
async function getAllalbum(req, res) {
  try {
    const album = await albumModel
      .find()
      .select("title artist")
      .populate("artist", "username email");

    res.status(200).json({
      message: "Albums fetched successfully",
      album,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Get Album By ID
async function getAllalbumsbyId(req, res) {
  try {
    const albumId = req.params.albumId;

    const album = await albumModel
      .findById(albumId)
      .select("title artist music")
      .populate("artist", "username email")
      .populate("music");

    if (!album) {
      return res.status(404).json({
        message: "Album not found",
      });
    }

    res.status(200).json({
      message: "Album fetched successfully",
      album,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  createMusic,
  createAlbum,
  getallMusic,
  getAllalbum,
  getAllalbumsbyId,
};