import { memberConstants } from "../constants";

export const alertActions = {
  addMember,
  updateMember,
  deleteMember
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