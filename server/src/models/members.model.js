const membersDatabase = require("./members.mongo");

const getAllMembers = async () => {
  try {    
    return await membersDatabase.find(
      {},
      {
        _id: 0,
        __v: 0,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const getOneMemberById = async (id) => {
  try {
    return await membersDatabase.findOne(
      {memberId: id},
      {
        _id: 0,
        __v: 0,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const getOneMemberByName = async (queriedMember) => {
  try {    
    return await membersDatabase.findOne(queriedMember, {
      _id: 0,
      __v: 0,
    });
  } catch (error) {
    console.error(error);
  }
};

const saveMember = async (member) => {
  const firstName = member.firstName.toLowerCase();
  const lastName = member.lastName.toLowerCase();
  const memberWithoutFirstNameLastName = Object.fromEntries(
    Object.entries(member).filter(([key, value]) => !key.includes("Name"))
  );
  // make firstName and lastName values lowercase for easy filtering and searching
  const lowerMember = { firstName, lastName, memberWithoutFirstNameLastName };

  const newMember = new membersDatabase({ ...lowerMember });
  // Save the document to the DB only if the added member does not already exist in the database
  try {
    membersDatabase.findOne(
      {
        firstName: newMember.firstName,
        middleName: newMember.middleName,
        lastName: newMember.lastName,
      },
      (err, existingMember) => {
        if (!existingMember) {
          return newMember.save();
        }
      }
    );
  } catch (error) {
    console.error(`Can't add the user ${error}`);
  }
};

const editMember = async (updatedMemberFields) => {
  const { memberId: filteredMemberId } = updatedMemberFields;

  const filter = { filteredMemberId };
  const update = { ...updatedMemberFields };

  // Find a document with specified memberId and update with all provided values
  try {
    return await membersDatabase.findOneAndUpdate(filter, update);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllMembers,
  getOneMemberById,
  getOneMemberByName,
  saveMember,
  editMember,
};
