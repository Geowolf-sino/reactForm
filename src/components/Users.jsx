
import User from "./User";

const Users = (props) => {
const {users} = props;

  if (users.length > 0) {
    return (
      <div>
        {users.map((el) => (
        <User onEdit={props.onEdit} onDelete={props.onDelete} key={el.id} user={el}/>
        ))}
        
      </div>
    );
  } else {
    return (
      <div className="user">
        <h3>No data available</h3>
      </div>
    );
  }
};

export default Users;
