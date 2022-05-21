const mongoose = require("mongoose");

const membersSchema = new mongoose.Schema({
  generatedId: {
    type: String,
    required: true,
  },
  firstName: {
    type: Date,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  specification: {
    //   full stack, backend, frontend, designer, hr,...
    type: String,
    required: true,
  },
  kpi: {
    type: Number,
    required: true
  },
  isEmployee: {
    type: Boolean,
    required: true,
  },
  isIntern: {
    type: Boolean,
    required: true,
  },
  duration: {
    // duration of internship or employment
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model("Member", membersSchema);
