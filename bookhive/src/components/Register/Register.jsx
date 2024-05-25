import './Register.css'
function Register(){

    return(
        <div>
            <h1>Welcome to BookHive</h1>
            <h2>Register to get started</h2>
            <form>
                <label>Enter Name : </label>
                <input type="text"></input>
                <br/>
                <br/>
                <label>Enter Email : </label>
                <input type="text"></input>
                <br/>
                <br/>
                <label>Enter Reg Id : </label>
                <input type="text"></input>
                <br/>
                <br/>
                <label>Enter Password : </label>
                <input type="password"></input>
                <br/>
                <br/>
                <label>Enter Re-Enter Password : </label>
                <input type="password"></input>
                <br/>
                <br/>
                <button>Register</button>
                
            </form>
        </div>
    );
}
export default Register