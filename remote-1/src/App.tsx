import { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [myForm, setMyForm] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <h1>Remote React App</h1>
      <h3>First Name : {myForm.firstName}</h3>
      <h3>Last Name : {myForm.lastName}</h3>
      <Form myForm={myForm} setForm={setMyForm} />
    </>
  );
}

export default App;
