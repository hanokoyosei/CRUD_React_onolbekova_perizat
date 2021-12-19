import React, { useState } from 'react'
import './App.css'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import UserTable from './components/UserTable'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    // добавили данные
  const usersData= [
    { id: 1, name: 'Nana', surname: 'Komatsu' },
    { id: 2, name: 'Yosei', surname: 'Hanako' }
  ]

  
  // используем useState хук
  // в качестве начальных данных, передаем usersData
  // в users будем хранить пользователей
  const [users, setUsers] = useState(usersData)
  // флаг editing - изначально false, функция установки флага
  const [editing, setEditing] = useState(false)
  // начальное значение для формы редактирования
  // так как мы не знаем, кто редактируется - пустые поля
  const initialFormState = { id: null, name: '', surname: '' }
  // значение "текущий пользователь на редактировании" + функция установки этого значения
  const [currentUser, setCurrentUser] = useState(initialFormState)

  //! Create 
  // функция добавления пользователя
  const addUser = user => {
    // создаем id значением на 1 больше (автоинкремент)
    user.id = users.length + 1
    // вызываем setUsers определенную выше в хуке useState
    // передаем туда все, что было в users + новый элемент user
    setUsers([ ...users, user ])
   }


  //! Delete
  // удаление пользователя
  // в очередной раз вызываем setUsers [1]
  // и передаем в setUsers массив без элемента, который нужно удалить
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  //! Update
  const updateUser = (id, updatedUser) => {
    // когда мы готовы обновить пользователя, ставим флажок editing в false
    setEditing(false)
    // и обновляем пользователя, если нашли его по id
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  // редактирование пользователя
  const editRow = user => {
  // готовы редактировать - флажок в true
  setEditing(true)
  // устанавливаем значения полей для формы редактирования
  // на основании выбранного "юзера"
  setCurrentUser({ id: user.id, name: user.name, surname: user.surname })
 }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {/* редактируем ? рисуй форму редактирования, иначе - форму добавления */}
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {/* передаем editRow */}
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;