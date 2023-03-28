import { useState } from 'react';
import './app.css'
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import { posts } from './data';


const App =() => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState('')
  
  const handleChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  return (
    <main className='container'>
      
    { user ? (
      <>
       <div className='cont'>
       <Navbar/>
        {
          posts.map((post) => (
            <Card post={post} key={post.id}/>
          ))
        }
         <span className='username'>{user}</span>
       </div>
      </>
     
    ): 
        
     <div className='login'>
      <input type='text' placeholder="Username" onChange={handleChange} />
      <button onClick={()=>setUser(username)}>Login</button>
    </div>
    }

    </main>
  );
}

export default App;
