import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Users from './Components/Users'
import Products from './Components/Products'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <nav className='py-5 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />

    </Routes>
    </div>
  )
}

export default App
















// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { userDelete } from './reducer/UserSlice';

// const App = () => {

//   const { users } = useSelector((state) => state.UserReducer);

//   const dispatch = useDispatch();

//   const DeleteHandler = (index) => {
//   console.log(index);
//     dispatch(userDelete(index));
// }


//   return (
//     <div className='m-auto container p-10 mt-5 bg-red-200'>
//       <h1 className='text-2xl font-bold text-red-900'>User List</h1>
//       <ul>
//         {users.map((user,index) => {
//           return (
//             <li key={user.id}>
//               <h1>{user.name}{"   "}
//                 <span className='text-red-600 font-black cursor-pointer'
//                 onClick={()=>DeleteHandler(index)}>  X</span>
//               </h1>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App