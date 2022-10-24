const User = require('../models/User')
const tasks = require('../apis/tasksApi.js')
const music = require('../apis/musicApi.js')
const gyroids = require('../apis/gyroidsApi.js')
const fossils = require('../apis/fossilsApi.js')
const art = require('../apis/artApi.js')
const umbrellas = require('../apis/umbrellasApi.js')
const fish = require('../apis/fishApi.js')
const seaCreatures = require('../apis/seaCreaturesApi.js')
const insects = require('../apis/insectsApi.js')
const tools = require('../apis/toolsApi.js')


module.exports = {
     getUser: async (req,res)=>{
        try{
            res.render('tracker.ejs', {user: req.user, tasks: tasks,
            music: music,
            gyroids: gyroids,
            fossils: fossils,
            art: art,
            umbrellas: umbrellas,
            fish: fish,
            seaCreatures: seaCreatures,
            insects: insects,
            tools: tools,
          })
            console.log(tasks)
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
            {$pull: { completedDivs: {$in: req.body.divId}}}
          ),
          res.json('Removed Div ID')
        } catch(err) {
          console.log(err)
        }
    }
}