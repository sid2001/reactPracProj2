import styles from "../styles/form.module.css";

export default function Error(props){

  function clickHandler(){
    props.setError(false);
    return;
  }

  return(
    <div className={styles.overlayContainer}>
      <div className={styles.overlayBox}>
      <h1 >Invalid input!!</h1>
      <button onClick={clickHandler}>ok</button>  
      </div>
    </div>
  )
}