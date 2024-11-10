
const express = require('express');
const { getHerodata, postHerodata, updateHerodata, deleteHerodata } = require('../controllers/hero.controller');
const { getAboutData, postAboutData, updateAboutData, deleteAboutData } = require('../controllers/about.controller');
const router = express.Router()


router.get('/HeroSection',   getHerodata)
router.post("/HeroSection", postHerodata)
router.put("/HeroSection", updateHerodata)







router.get('/AboutSection', getAboutData)
router.post("/AboutSection", postAboutData)
router.put("/AboutSection", updateAboutData)
router.delete("/HeroSection", deleteHerodata)






router.get('/AboutSection', getAboutData)
router.post("/AboutSection", postAboutData)
router.put("/AboutSection", updateAboutData)
router.delete("/AboutSection", deleteAboutData)



















module.exports = router;