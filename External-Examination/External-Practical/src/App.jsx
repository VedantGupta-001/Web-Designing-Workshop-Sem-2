import React, {useState} from "react";

function App(){
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkOddEven = () => {
    if (number === ""){
      setResult("Please enter a number");
      return;
    }
    const num = parseInt(number,10);

    if (isNaN (num)){
      setResult("Invalid Input!!");
    }
    else{
      setResult(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Odd or Even Checker</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={styles.input}
      />
      <button onClick={checkOddEven} style={styles.button}>
        Check
      </button>
      <p style={styles.result}>{result}</p>
    </div>
  );
}

const styles = {
container: {
  textAlign: "center",
  marginTop: "50px",
  fontFamily: "Arial, sans-serif",
},
heading: {
  color: "#333",
},
input: {
  padding: "10px",
  fontSize: "16px",
  marginRight: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
},
button: {
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#4CAF50",
  color: "white",
  cursor: "pointer",
},
  result: {
  marginTop: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
},
};
export default App;