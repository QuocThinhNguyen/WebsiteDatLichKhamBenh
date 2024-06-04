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

module.exports = {
    getHomePage: getHomePage,
    getTest: getTest,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}