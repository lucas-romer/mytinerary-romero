const Activity = require ('../models/Activity')

  const activitiesController = {
    upLoadActivity: async (req, res) => {
        const { name, src, description, itinerary} = req.body;
        try {
          await new Activity({  name, src, description, itinerary }).save();
          res.json({
            sucess: true,
            response: "Uploaded activity with name " + name,
          });
        } catch (e) {
          res.json({ success: false, error: e });
          console.error(e);
        }
      },
      modifyActivity: async (req, res) => {
        try {
          await Activity.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
          res.json({
            success: true,
            response:
              "Updated city with id " +
              req.params.id +
              ", with the next data: " +
              JSON.stringify(req.body),
          });
        } catch (e) {
          res.json({ success: false, error: e });
          console.error(e);
        }
      },
      deleteActivity: async (req, res) => {
        try {
          await Activity.findOneAndDelete({ _id: req.params.id });
          res.json({
            success: true,
            response: "Deleted activity with id" + req.params.id,
          });
        } catch (e) {
          res.json({ success: false, error: e });
          console.error(e);
        }
      },
      getActivity : async (req,res)=>{
          try{
              let activity = await Activity.findOne({_id : req.params.id})
              res.json({success: true, response: activity})
    
          }catch(e){
              res.json({success:false, error:e})
          }
      },
      getActivities : async (req,res)=>{
          try{
              let activitiesById = (await Activity.find().populate('itinerary',"name")).filter(e=> e.itinerary._id.toString() === req.body.id)         
              res.json({success:true, response: activitiesById})
          }catch(e){
              console.log(e)
              res.json({error: e, success : false})
    
          }
      },
      getActivitiesTest: (req,res)=>{
        const activity = Activity.find()
        .then((response)=> res.json({response}))
    
}, 
}

module.exports = activitiesController 