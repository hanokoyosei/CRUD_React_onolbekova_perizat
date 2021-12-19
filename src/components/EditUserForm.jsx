import React, { useEffect, useState } from 'react'

const EditUserForm = props => {
  // в качестве начального аргумента передаем
  // пользователя, которого собираемся редактировать
  const [user, setUser] = useState(props.currentUser)

    // используем effect-hook
    useEffect(
        () => {
          // вызывай данную функцию
          setUser(props.currentUser)
        },
        [props] // всегда, если изменились props
      )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.name || !user.surname) return

    // вызываем updateUser
    props.updateUser(user.id, user)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>Name</label> */}
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />Name
      {/* <label>surname</label> */}
      <input
        type="text"
        name="surname"
        value={user.surname}
        onChange={handleInputChange}
      />Surname
      <button className="btn btn-light m-2">Update user</button>
      <button
        /* обновляем флаг editing, будет представлен в App позже */
        onClick={() => props.setEditing(false)}
        className="btn btn-light"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm;