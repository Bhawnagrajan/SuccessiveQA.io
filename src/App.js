import {Form} from './components/styles/form.styled'
import './App.css';


function App() {
  return (

    <Form>
    <h1> Welcome!</h1> 
    <h3> Sign into your Account</h3>
    <div className='data' >
    <label>Email</label>
     <input type = 'email' placeholder='Enter Email' />
     <label>Password</label>
     <input type = 'password' placeholder='Password' />
     <button type='submit'> Submit</button>
     </div>
    </Form>
  )
}

export default App;
