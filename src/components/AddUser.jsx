import { useState } from "react"


const AddUser = (props ) => {
  const {addNewUser, edittingUserId} = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [isHappy, setIsHappy] = useState(false);



  const addUsers = () => {
    const newAddUsers = {
      
      firstName,
      lastName,
      bio,
      age,
      isHappy,
      edittingUserId
    };
    addNewUser(newAddUsers);

   
    setFirstName("");
    setLastName("");
    setBio("");
    setAge("");
    setIsHappy(false);
  };

  return (
    <form >
      <input
        value={firstName}
        placeholder="First Name"
        onChange={e => setFirstName(e.target.value)} />
      <input
        value={lastName}
        placeholder="Last Name"
        onChange={e => setLastName(e.target.value)} />
      <textarea
        value={bio}
        placeholder="BiographY"
        onChange={e => setBio(e.target.value)}></textarea>
      <input
        value={age}
        placeholder="Age"
        onChange={e => setAge(e.target.value)} />
      <label htmlFor="isHappy">
        Is Happy ?
      </label>
      <input
        type="checkbox"
        id="isHappy"
        checked={isHappy}
        onClick={() => setIsHappy(!isHappy)} 
        onChange={() => {}}
        />

      <button
        type="button"
        onClick={() => {
          addUsers()
        }
        }>Add</button>
       
    </form>
  )

}

export default AddUser;