import db from "../models/index";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("-------------------------------");
    console.table(data);
    console.log("-------------------------------");
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.error(error);
  }
};
let getCRUD = async (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  console.table(req.body);
  return res.send("Post crud form sever ");
};
//object(key:"",value:"")
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
