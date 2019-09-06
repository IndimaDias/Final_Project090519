const db = require("../../models");
const router = require("express").Router();

router.route("/")
    .post(function(req,res){
        db.Todos.create(req.body)
         .then(function(dbTodo){
             res.json(dbTodo)
         })
    })
    
router.route("/:id")   
.get(function(req,res){
  
    db.Todos.findAll({
        where : {
           userId : req.params.id,
           status : "I" 

    }})
     .then(dbTodos =>{
        
         res.json(dbTodos)
     })
     .catch(err => res.status(422).json(err));
})

.put(function (req,res){
    db.Todos.update({
        status : "C"
    },
    {where : {id : req.params.id}})
    .then(rowsUpdated => {
        res.json(rowsUpdated)
    })
    .catch(err=> res.status(422).json(err));
})

.delete(function(req,res){
    console.log(req.params.id);
    db.Todos.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(dbTodo => {
      res.json(dbTodo)
    })
    .catch(err => res.status(422).json(err));
  });



    module.exports = router;