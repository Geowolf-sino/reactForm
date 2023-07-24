
import { useState } from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from './AddUser';

const User = (props) => {
const [editForm, setEditForm] = useState(false);

  const { user: {id, firstName, lastName, bio, isHappy }, onDelete, user } = props;


  return (
    <div className="user" >
      <IoCloseCircleSharp onClick={() => onDelete(user.id)}  className='delete-icon' />
      <IoHammerSharp onClick={() => {
        setEditForm(!editForm);
      }} className='edit-icon' />
      <h3>{firstName} {lastName}</h3>
      <p>{bio}</p>
      <b>{isHappy ? 'Happy' : 'Not happy'}</b>

      {editForm &&  <AddUser addNewUser={props.onEdit} edittingUserId={id}/>}
    </div>
  )

}

export default User;