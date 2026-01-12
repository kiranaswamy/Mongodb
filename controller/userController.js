// const db = require('../util/dbConnection');
// const User = require('../module/userModule')

// const addValuse =async (req,res)=>{
//     try{
//         const {name} = req.body;
//         const user = await User.create({
//             name:name
//         });
//         res.status(201).send(`User name ${name} is added`)
//     }catch(erre){
//         res.status(500).send('Unable to add the user')
//     }
// }
// const updateValuse =async (req,res)=>{
//     try{
//         const {id} = req.params;
//         const {name} = req.body;
//         const user = await User.findByPk(id);
//         if(!user){
//             res.status(404).send('User not found')
//         }
//         user.name = name;
//         await user.save();
//         res.status(201).send(`User name ${name} is updated`)
//     }catch(erre){
//         res.status(500).send('Unable to update the user')
//     }
// }
// const deleteValuse =async (req,res)=>{
//     try{
//         const {id} = req.params;
//         const user = await User.destroy({
//             where:{
//                 id:id
//             }
//         })
//         if(!user){
//             res.status(404).send('User not found')
//         }
        
//         res.status(201).send(`User name  is deleted`)
//     }catch(erre){
//         res.status(500).send('Unable to delete the user')
//     }
// }
   
// module.exports = {addValuse,updateValuse,deleteValuse}






const User = require('../module/userModule');

const addValue = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name });
    res.status(201).json({ message: 'User added', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateValue = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name;
    await user.save();

    res.json({ message: 'User updated', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteValue = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addValue, updateValue, deleteValue };
