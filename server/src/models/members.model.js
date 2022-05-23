const membersDatabase = require("./members.mongo");

async function saveMember(member) {
  const newMember = new membersDatabase({ ...member });

  try {
    membersDatabase.findOne(
        { firstName: newMember.firstName, lastName: newMember.lastName },
        (err, existingMember) => {
          if (!existingMember) {
            newMember.save();
          } 
        }
      );
  } catch (error) {
      console.error(error)
  }
}



// const editMember = (member) => {
//   const filter = { ...member };
//   const update = { age: 59 };
  
//   let doc = await Character.findOneAndUpdate(filter, update);
//   doc = await Character.findOne(filter);
// }

module.exports = { saveMember };