const connection = require('../config/database');
const { get } = require('../routes/web');
const {getAllUsers, getUserById, updateUserById} = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});
    
};

const getSinzuki = (req, res) => {
    // res.send('Sinzuki');
    res.render('sample.ejs'); // cai nay de kieu nao cung dc hay sao a
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log("Request body: ", req.body);
    console.log("Email: ", email);
    console.log("Name: ", name);
    console.log("City: ", city);

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );

    console.log("Results: ", results);
    res.send('Created user page success');


    // const [results, fields] = await connection.query('select * from Users u');

};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit : user});
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;


    console.log("Request body: ", req.body);
    console.log("Email: ", email);
    console.log("Name: ", name);
    console.log("City: ", city);
    console.log("User ID: ", userId);

    await updateUserById(email, city, name, userId);


    // res.send('Updated user page success');
    res.redirect('/');


    // const [results, fields] = await connection.query('select * from Users u');

};


module.exports = {
    getHomePage,
    getSinzuki,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
};