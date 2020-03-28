const { sequelize, User, Idea, Comment, Category, Status, Region, Target, TargetGroup  } = require('./models');

(async function() {
  try {
    await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  // await sequelize.sync()
//   const admin = Role.build({name: 'Admin'});
//   await admin.save();
//   await User.create({firstName: 'User423'});
//   await Idea.create({title: 'Admin', body: "adminid", userId:"1"});
// await Comment.create({comment: 'Admin sdfgsfbsfgb srhsbsb', userId: "1", ideaId:"1"});
// await Category.create({categoryTitle: "488988989"});

// const post = await Idea.findOne({ where: { title: 'Admin' } });
// console.log(post);
// await post.setCategories(1);
// const qwerty = await Category.create({categoryTitle: "as hell hell fuck"});
// console.log(qwerty);
// await qwerty.addIdea(1);
// await amidala.setCategories(qwerty);
// const result = await Idea.findOne({
//   where: { username: 'Admin' },
//   include: Category
// });
// console.log(amidala);
// const us = await User.findOne({ where: { firstName: 'User' } });
// const us = await User.findAll();
// const admins = await User.getIdeas();
// console.log(admins.map(el => el.name));
// //const admins = await User({ where: { RoleId: role.id } });
// console.log(admins);
// console.log(us);

// const role1 = await Idea.findOne({ where: { title: 'Admin' }, include: User });
// const role1 = await Idea.findOne({ where: { title: 'Admin' }, include: Comment });

// console.log(role1);
// console.log(role1.User.map(el => el.name));

const update = await Category.update({"categoryTitle":"Hernya"}, {
  where: { id: 3 }
});
const updated = await Category.findOne({
  where: { id: 3 }
});
console.log(updated);



  try {
    await sequelize.close();
      console.log('Connection has been closed successfully.');
  } catch (error) {
    console.error('Unable to close the database connection:', error);
  }
})();
