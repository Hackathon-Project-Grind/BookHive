import './Register.css'
import logo from './assets/Logo.jpg'
function Register(){

    return(
        <div className='register-container'>
            <h1 className='heading'>Welcome to BookHive</h1>
            <h2 className='heading2'>Register to get started</h2> 
            <img className='Logo' src={logo} alt='logo'></img>
            <form className='RegForm'>
                <label className='label1'>Enter Name : </label>
                <input type="text"></input>
                <br/>
                <br/>
                <label className='label2'>Enter Email : </label>
                <input type="text"></input>
                <br/>
                <br/>
                <label className='label3'>Enter Reg Id : </label>
                <input type="text"></input>
                <br/>
                <br/>
                <label className='label4'>Enter Password : </label>
                <input type="password"></input>
                <br/>
                <br/>
                <label className='label5'>Enter Re-Enter Password : </label>
                <input type="password"></input>
                <br/>
                <br/>
                <button className='RegBu'>Register</button>
                
            </form>
        </div>
    );
}
export default Register