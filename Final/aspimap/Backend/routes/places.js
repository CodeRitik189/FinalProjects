const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Places = require("../models/Places");
const fetchuser = require("../middleware/fetchuser");

// Fetch all notes of user using GET: /api/places/fetchplaces .Login required
router.get("/fetchplaces", fetchuser, async (req, res) => {
  try {
    const places = await Places.find({ user: req.user.id });
    res.json(places);
  } catch (err) {
    res.status(500).send("SoMe ErRoR oCcUrEd");
  }
});

// Add a place using POST: /api/places/addplace .Login required
router.post(
  "/addplace",
  fetchuser,
  async (req, res) => {
    const { name, location, address, email, phone, website, price } = req.body;
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // let ifplace = await Places.findOne({ place: req.body.location });
      // if (ifplace) {
      //   res.status(400).json({ success, error: "You have already added this place." });
      // }
      const place = new Places({ name, location, address, email, phone, website, price, user: req.user.id });
      const savedPlace = await place.save();
      success = true;
      res.json({success, savedPlace});
    } catch (err) {
      console.log(err)
      res.status(500).send(err);
    }
  }
);


// Delete an existing note using DELETE: /api/places/deleteplace/:id .Login required
router.delete("/deleteplace/:id", fetchuser, async (req, res) => {
  try {
    let success = false;
    let place = await Places.findById(req.params.id);
    if (!place) return res.status(404).send({success, message:"Not Found!!"});

    if (place.user.toString() !== req.user.id)
      return res.status(401).send({success, message:"Touble authenticating"});

    place = await Places.findByIdAndDelete(req.params.id);
    success = true;
    res.json({ success, message: "Place deleted successfully", place });
  } catch (err) {
    res.status(500).send("Internal server ERROR");
    console.log(err);
  }
});

module.exports = router;
