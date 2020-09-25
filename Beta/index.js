const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express(); 

app.set("view engine", "ejs"); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); 
 
mongoose.connect("mongodb://localhost:27017/MedDispatch", {useNewUrlParser: true, useUnifiedTopology: true});

const PtSearchSchema = new mongoose.Schema({
    fName : String,
    lName : String,
    dob: String,
    address1: String, 
    address1: String, 
    city: String, 
    state: String, 
    zip: String,

});
 
const PtSearch = mongoose.model("PtSearch", PtSearchSchema);

// const search1 = new PtSearch ({
//     fName: "Daniel",
//     lName: "Tosta",
//     dob: "12-18-1989",
//     address1: "1234 Main St.",
//     address2: "null",
//     city: "gainesville",
//     state: "Georgia",
//     zip: "30504",
// });

// search1.save(function (err, PtSearch) {
//     if (err) return console.error(err);
//     console.log(PtSearch.name + " saved to Pt collection.");
// });

// ASK Mike why it has to be above home
app.get("/register", function (req, res) {
    console.log(req);
    res.render("register");
});
 

app.get("/", function (req, res){
    res.render("app")
});

app.post("/", function (req, res){
    console.log(req.body.FName);
}); 

// app.post("/", function (req, res){ 
//     const userSearch = new PtSearch({
//         fName: "req.body.FName",
//         lName: "req.body.LName",
//         dob: "req.body.DOB",
//         address1: "req.body.address1",
//         address2: "req.body.address2",
//         city: "req.body.city",
//         state: "req.body.state",
//         zip: "req.body.zip",
//     })
//     userSearch.save(function (err) {
//         if (err) {
//             return console.error(err);
//             console.log(" saved to PtSearch collection.");
//         };
//     });
// });

 

app.listen(3000, function(){
    console.log("listening on 3000")
});

// if (listName === "Today") {
//     item.save();
//     res.redirect("/");
// } else {
//     List.findOne({ name: listName }, function (err, foundList) {
//         foundList.items.push(item);
//         foundList.save();
//         res.redirect("/" + listName);
//     });
// }