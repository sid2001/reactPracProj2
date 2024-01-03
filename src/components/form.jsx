import styles from "../styles/form.module.css";
import { useState } from "react";
import Error from "./overlay";

export default function Form(){

  const [formData,setFormData] = useState({
    "username":'',
    "age":''
  });
  const [error,setError] = useState(false);

  function addUserHandler(){

    if(formData.age<0){
      setError(true);
    }
  }

  function onChangeHandler(e){

    e.preventDefault();
    console.log(e);
    if(e.target.name==='username'){
      setFormData((v)=>({...v,'username':e.target.value}));
    }
    else{
      setFormData((v)=>({...v,'age':e.target.value}));
    }  
  }


  return(
    <>
    <div className={styles.form}>
    <label style={{width:"80%",padding:"5px",paddingTop:'-5px'}} htmlFor="username">Username <br /> 
    <input className={styles.inputfield} onChange={onChangeHandler} type="text" id="username" name="user"/>
    </label>
    <label style={{width:"80%",padding:"5px"}} htmlFor="age">Age(Years) <br />
    <input className={styles.inputfield} onChange={onChangeHandler} type="number" id="age" name="age" step={1} />
    </label>
    <button className={styles.addUserBtn} onClick={addUserHandler} disabled={error?true:false}>Add User</button>
    </div>
    {error?<Error setError={setError}/>:''}
    </>
  )
}