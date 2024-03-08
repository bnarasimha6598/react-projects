// import styles from "./Button.module.css"

// const Button = () => {
//   return (
//     <button className={styles.button}>
//         Click Me
//     </button>
//   )
// }

const Button = () => {
  const styles = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={styles}>Click Me</button>;
};

export default Button;
