const db = require("../../models");
const router = require("express").Router();

router.route("/")
    .post(function(req,res){
        db.Users.create(req.body)
         .then(function(dbTodo){
             res.json(dbTodo)
         })
    })
    .get(function(req,res){
        console.log(req.query);
        db.Users.findOne({
            where : {
                email : req.query.email
                // password : req.params.password
            }
        })
         .then(dbTodos =>{
            
             res.json(dbTodos)
         })
         .catch(err => res.status(422).json(err));
    })
    
router.route("/:id")   
.get(function(req,res){
  
    db.Users.findAll({
        where : {
           id : req.params.id
    }})
     .then(dbTodos =>{
        
         res.json(dbTodos)
     })
     .catch(err => res.status(422).json(err));
})

router.route("/:email")   
.get(function(req,res){
    console.log(req.query);
    db.Users.findOne({
        where : {
            email : req.query.email
            // password : req.params.password
        }
    })
     .then(dbTodos =>{
        
         res.json(dbTodos)
     })
     .catch(err => res.status(422).json(err));
})


module.exports = router;