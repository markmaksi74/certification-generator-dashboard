const { saveMember } = require("../../models/members.model");

const getAllMembers = async (req, res) => {
  res.send(`API running :)`);
}

const httpAddNewMember = async (req, res) => {
  const member = req.body;
  console.log(member, "member");
  if (
    !member.generatedId ||
    !member.firstName ||
    !member.middleName ||
    !member.lastName ||
    !member.address ||
    !member.specification ||
    !member.supervisor ||
    !member.kpi ||
    member.isEmployee === undefined ||
    member.isIntern === undefined ||
    !member.hardSkills ||
    !member.softSkills ||
    !member.projects ||
    !member.duration ||
    !member.startDate ||
    !member.endDate
  ) {
    res.status(400).json({ error: "required data is missing" });
  } else {
    await saveMember(member);
    res.status(201).json(member);
  }
}

const httpEditMember = (req, res) => {
  
}

module.exports = {
  httpAddNewMember,
  getAllMembers,
  httpEditMember
};
