import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        // console.log('----------------------------');
        // console.log(data);
        // console.log('----------------------------');
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }

}

let getTest = (req, res) => {
    return res.render("test.ejs");
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    //console.log(req.body);
    console.log(message);
    return res.send("Post CRUD from server");
}

let displayGetCRUD = async (req, res) => {

    let data = await CRUDService.getAllUsers();
    // console.log('----------------------------');
    // console.log(data);
    // console.log('----------------------------');
    //return res.send("Get CRUD from server");
    return res.render("displayCRUD.ejs", {
        dataTable: data
    });
}

let getEditCRUD = async (req, res) => {

    let userId = req.query.id;
    console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);

        // check userData not found
        if (userData) {
            return res.render("editCRUD.ejs", {
                user: userData
            })
        }

        return res.send("User find");
    } else {
        return res.send("User not found");
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    //return res.send("Update done!");

    return res.render("displayCRUD.ejs", {
        dataTable: allUsers
    });
    //updateUserData
}

let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        await CRUDService.deleteUserById(userId);
        return res.send("Delete user success!");
    } else {
        return res.send("User not found!");
    }

}

module.exports = {
    getHomePage: getHomePage,
    getTest: getTest,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}