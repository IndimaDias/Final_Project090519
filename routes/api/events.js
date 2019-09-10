const db = require("../../models");
const router = require("express").Router();

router.route("/")
      .post(function(req, res) {
        
          db.Events.create(req.body).then(function(dbEvent) {
            res.json(dbEvent);
          });
      })
      
      .get(function(req,res){
        console.log(req.query)
        db.Events.findAll({
          where : {
            userId : req.query.userId
          }
        })
        .then(dbEvent => {        
          res.json(dbEvent)})
        .catch(err => res.status(422).json(err));
      });

router.route("/:id")
      .get(function(req,res){
        db.Events.findOne({
          where : {
            id : req.params.id
          }
        })
        .then(dbEvent => {
          console.log(dbEvent);
          res.json(dbEvent)
        })
        .catch(err => res.status(422).json(err))
      })

      .delete(function(req,res){
        db.Events.destroy({
          where : {
            id : req.params.id
          }
        })
        .then(dbEvent => {
          res.json(dbEvent)
        })
        .catch(err => res.status(422).json(err));
      })

// router.route("/:userId")
// .get(function(req,res){
        
//   db.Events.findAll({
//     where : {
//       userId : req.params.userId
//     }
//   })
//   .then(dbEvent => {        
//     res.json(dbEvent)})
//   .catch(err => res.status(422).json(err));
// });
module.exports = router;