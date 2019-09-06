const db = require("../../models");
const router = require("express").Router();

router.route("/")
    .post(function(req,res){
        db.Users.create(req.body)
         .then(function(dbTodo){
             res.json(dbTodo)
         })
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

module.exports = router;