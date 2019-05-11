import React from "react";
import PropTypes from "prop-types";

const Users = ({ users }) => (
  <div>
    <b>Here are users {users}</b>
  </div>
);

Users.propTypes = {
  name: PropTypes.string.isRequired
};

export default Users;
