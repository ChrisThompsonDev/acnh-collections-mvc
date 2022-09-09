const User = require('../models/User')

module.exports = {
     getTodos: async (req,res)=>{
        try{
            res.render('todos.ejs', {user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    addDivId: async (req, res) =>{
        try{
          await User.findOneAndUpdate({_id: req.body.userId},
            { $addToSet: { completedDivs: req.body.divId }
          })
          res.json('Added Div ID')
        } catch(err) {
          console.log(err)
        }
    },

    removeDivId: async (req, res) =>{
        try{
          await User.findOneAndUpdate({_id: req.body.userId},
            {$pull: { completedDivs: req.body.divId}
          })
          res.json('Removed Div ID')
        } catch(err) {
          console.log(err)
        }
    }
}