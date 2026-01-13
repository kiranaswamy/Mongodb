const User = require('../module/userModule');

exports.createUser = (req, res) => {
  const { name,age,email } = req.body;

  const user = new User(
   name,
   age,
   email
  );

  user.save()
    .then(() => {
      res.status(201).json({ message: 'name created' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error creating name' });
    });
};

exports.getUsers = (req, res) => {
  User.fetchAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error fetching users' });
    });
};

exports.updateUser = (req,res)=>{
  const id = req.params.id;
  const {name,age,email} = req.body;

 User.updateById(id, { name,age,email })
    .then(result => {
      if(result.matchedCount === 0){
        return res.status(404).send('User not found');
      }
      res.send('User updated');
    })
    .catch(err => res.status(500).send(err));
};

exports.deleteUser = (req,res)=>{
  const id = req.params.id;

User.deleteById(id)
    .then(result => {
      if(result.deletedCount === 0){
        return res.status(404).send('User not found');
      }
      res.send('User deleted');
    })
    .catch(err => res.status(500).send(err));
};


