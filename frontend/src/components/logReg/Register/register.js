import {Link} from 'react-router-dom';
import style from "./register.module.css";

function Register() {
  return (
    <>
      <main>
        <h1>Register Page</h1>
        {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
        a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
        <Link to={'/'}>back</Link>

      </main>
    </>
  );
}

export default Register;
