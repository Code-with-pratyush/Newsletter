import './App.css';
import {useState} from 'react';
import styled from'styled-components';
import UiComponents from './UiComponents';
import db from "./firebase";
import firebase from "firebase/compat/app";

function App() {
  const [input,setInput] = useState("");
  const inputHandler = (e)=>{
    setInput(e.target.value);
  }
  const submitHandler = (e)=>{
    //Our form will not submit
    e.preventDefault();
    if(input){
      console.log(input);
      //add to firebase
      db.collection("emails").add({
        email:input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
  }
  return (
    <Div className="App">
      <Container>
        <UiComponents/>
        <Form onSubmit={submitHandler}>
          <H2>Suscribe To our News Letter</H2>
          <Input type= 'email' placeholder='Enter your email here' onChange=  {inputHandler}/>
          <Button type = "submit">Submit</Button>
        </Form>
      </Container>

    </Div>
  );
}

const Div = styled.div`
 height:100vh;
 display:flex;
 justify-content : center;
 align-items : center;
 background:linear-gradient(to right,#414345,#232526);
`;

//conatiner components
const Container = styled.div`
 position:relative;
`;

//Form components
const Form = styled.form`
 
 position:relative; 
 display:flex;
 flex-direction: column;
 justify-content : center;
 align-items:center;
 padding:3rem;
 min-width:600px;
 border-radius:5px;
 background:rgba(255,255,255,0.1);
 border:solid 1px rgba(255,255,255,0.2);
 background-clip:padding-box;
 backdrop-filter:blur(3px);
`;

const H2= styled.h2`
 color:#fff;
 padding:1rem;
 text-align: center;
 font-size:2rem;
`;

const Input = styled.input`
 padding:10px;
 margin:10px;
 border-radius : 10px;
 border:none;
 width:80%;
 outline:none;
 color:#cf1d22;

`;
const Button = styled.button`
 background-image : linear-gradient(
  to right,
  #eb3349 0%,
  #f45c43 51%,
  #eb3349 100%
 );
 cursor:pointer;
 color:white;
 text-align : center;
 text-transform : uppercase;
 width:20%;
 padding:10px;
 transition:0.5s;
 border-radius:5px;
 border:none;
 outline: hidden;
 overflow:hidden;
 &hover{
  background-position : right center;
 }
`;


export default App;
