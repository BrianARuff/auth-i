import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  state = {
    errors: null,
    users: []
  }
  componentDidMount() {
    axios.get('http://localhost:9000/api/users')
      .then(resp => {
        if(resp.data.message) {
          console.log(resp.data);
          this.setState({errors: resp.data.message});
        } else {
          console.log(resp.data);
          this.setState({users: resp.data});
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {
          this.state.errors ? 
          <h4>{this.state.errors}</h4>
          :
          <div>
            {
              this.state.users.length < 0 ?
              <p>No Users Found</p>
              :
              this.state.users.map(user => {
                return (
                  <p key={user.id}>{user.username}</p>
                )
              })
            }
          </div>
        }
      </div>
    )
  }
}

export default Users;