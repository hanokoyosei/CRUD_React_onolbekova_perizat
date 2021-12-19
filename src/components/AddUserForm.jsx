import React, { useState } from 'react'

const AddUserForm = props => {
   const initialFormState = { id: null, name: '', surname: '' }
   // используем useState и передаем в качестве начального значения объект - initialFormState
   const [user, setUser] = useState(initialFormState)

   //сохряняем данные
   const handleInputChange = event => {
    const { name, value } = event.currentTarget
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.name || !user.surname) return
    
      // вызываем addUser из хука из App
      props.addUser(user)
      // обнуляем форму, с помощью setUser функции
      // которая у нас взята из хука в данном компоненте [1]
      setUser(initialFormState)
    }


  return (

    <form 
    onSubmit={handleSubmit}>
      {/* <label>Name</label> */}
      <input
       placeholder="name"
       type="text"
       name="name" 
       value={user.name} 
       onChange={handleInputChange}
       />
      {/* <label>surname</label> */}
      <input
       placeholder="surname"
       type="text" 
       name="surname" 
       value={user.surname} 
       onChange={handleInputChange}
       />
      <button className="btn btn-outline-secondary">Add new user</button>
    </form>
  )
}

export default AddUserForm;