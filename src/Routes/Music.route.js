const express =require("express")
const musicController =require("../AuthController/Music.controller")
const Authmiddleware=require("../middleware/auth.middleware")
const multer=require("multer")

const upload = multer({
    storage : multer.memoryStorage()
})


const router = express.Router();

router.post("/upload",Authmiddleware.authArtist,upload.single("music"),musicController.createMusic)

//music route ky andar he hm album  create kar rahe honga
router.post("/album",Authmiddleware.authArtist,musicController.createAlbum)

router.get("/almusic",Authmiddleware.authUser,musicController.getallMusic)

router.get("/albums",Authmiddleware.authUser,musicController.getAllalbum)

router.get("/albums/:albumId",Authmiddleware.authUser,musicController.getAllalbumsbyId)

module.exports=router