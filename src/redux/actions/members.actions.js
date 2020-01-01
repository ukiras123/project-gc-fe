import { memberConstants } from "../constants";

export const memberAction = {
  addMember,
  updateMember,
  deleteMember,
  getOneMember,
  getAllMember,
};

function addMember(message) {
  return { type: memberConstants.MEMBER_ADD, message};
}

function updateMember(message, id ) {
  return { type: memberConstants.MEMBER_UPDATE, message, id };
}

function deleteMember(message) {
  return { type: memberConstants.MEMBER_DELETE, message};
}

function getOneMember(id) {
  return { type: memberConstants.MEMBER_GET_ONE, id};
}

function getAllMember() {
  return { type: memberConstants.MEMBER_GET_ALL};
}