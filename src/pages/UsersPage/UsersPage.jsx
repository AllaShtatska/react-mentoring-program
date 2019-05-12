import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Hello from "../../components/Hello";
import styles from "./UsersPage.css";
import Users from "../../components/Users";
import Loader from "../../components/Loader";

class UsersPage extends PureComponent {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({}))
  };

  static defaultProps = {
    users: []
  };

  //asyn action will be called on a server side
  componentWillMount() {
    this.props.fetchUsers();
  }

  /*componentDidMount() {
    this.props.fetchUsers();
  }*/

  render() {
    const { loading, users } = this.props;
    return (
      <div>
        <h3 className={styles.title}>Users page</h3>
        <Hello name="you are on Users Page" />
        <Loader loading={loading} />
        <Users users={users} />
      </div>
    );
  }
}

export default UsersPage;
