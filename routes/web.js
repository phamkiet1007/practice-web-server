const express = require('express');
const {
    getHomePage, 
    getSinzuki, 
    postCreateUser, 
    getCreatePage,
    getUpdatePage
} = require('../controllers/homeController');

const router = express.Router();


router.get('/', getHomePage);
router.get('/sinzuki', getSinzuki);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);



router.post('/create-user', postCreateUser);



router.get('/', (req, res) => {
    res.send('Hello World');
});

// router.get('/sinzuki', (req, res) => {
//     res.render('./sample.ejs');
// });

module.exports = router;