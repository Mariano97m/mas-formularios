import { useState } from "react";
import styles from "./Formulario.module.css"

const Inputs = ({label, type, state, setState}) =>{

    return(
        <div className={styles.estilo}>
            <label htmlFor={`${label}Input`}>{label}</label>
            <input 
            type={type} 
            id={`${label}Input`} 
            value = {state}
            onChange={(e) => setState (e.target.value)}
            />
        </div>
    )
}


const Formulario = () =>{
            const [ fistName, setFistName] = useState("");
            const [ lastName, setLastName] = useState("");
            const [ email, setEmail] = useState("");
            const [ password, setPassword] = useState("");
            const [ confirmaPassword, setConfirmaPassword] = useState("");

    return(
            <div>
                <form action="#">
                    <Inputs label="First Name" type="text" state={fistName} setState={setFistName} />
                    {
                        fistName.length < 4 && fistName.length > 0 &&
                        <p>Nombre debe de tener 4 caracteres</p>
                    }
                    <Inputs label="Last Name" type="text" state={lastName} setState={setLastName} />
                    {
                        lastName.length < 4 && lastName.length > 0 &&
                        <p>Apellido debe de tener 4 caracteres</p>
                    }
                    <Inputs label="Email" type="email" state={email} setState={setEmail} />
                    {
                        email.length < 5 && email.length > 0 &&
                        <p>Email debe de tener 5 caracteres</p>
                    }
                    <Inputs label="Password" type="password" state={password} setState={setPassword} />
                    {
                        password.length < 10 && password.length > 0 &&
                        <p>La contraseña debe de tener 10 caracteres</p>
                    }
                    <Inputs label="ConfirmaPassword" type="password" state={confirmaPassword} setState={setConfirmaPassword} />
                    {
                        confirmaPassword.length < 10 && confirmaPassword.length > 0 &&
                        <p>La contraseña debe de tener 10 caracteres</p>
                    }
                </form>
                <h3>Your Form Data</h3>
                <ul>
                    <li>First Name:{fistName} </li>
                    <li>Last Name:{lastName} </li>
                    <li>Email:{email} </li>
                    <li>Password:{password} </li>
                    <li>ConfirmaPassword:{confirmaPassword} </li>
                </ul>
            </div>
    )
};

export default Formulario;