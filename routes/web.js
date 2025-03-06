const express = require('express');
const {
    getHomePage, 
    getSinzuki, 
    postCreateUser, 
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
} = require('../controllers/homeController');

const router = express.Router();


router.get('/', getHomePage);
router.get('/sinzuki', getSinzuki);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);



router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);



router.get('/', (req, res) => {
    res.send('Hello World');
});

// router.get('/sinzuki', (req, res) => {
//     res.render('./sample.ejs');
// });

module.exports = router;