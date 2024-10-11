const express = require('express');
const Webtoon = require('../models/Webtoon');
const router = express.Router();

// Mock votes (store in memory or MongoDB as needed)
let votes = { manhwa: 0, anime: 0 };

// Get top webtoons
router.get('/webtoons', async (req, res) => {
    try {
        const webtoons = await Webtoon.find();
        res.json({ webtoons });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching webtoons' });
    }
});

// Vote for Manhwa or Anime
router.get('/vote', (req, res) => {
    const { type } = req.query;
    if (type === 'manhwa') votes.manhwa++;
    if (type === 'anime') votes.anime++;
    res.json({ manhwaVotes: votes.manhwa, animeVotes: votes.anime });
});

module.exports = router;
