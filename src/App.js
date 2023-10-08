import logo from './logo.svg';
import React from 'react';
import ChatBot from 'react-simple-chatbot'
import {Segment} from "semantic-ui-react"
import './App.css';

function App() {
  
  const steps = [
    {
      id:'Greet',
      message:'hello welcome to student info system!',
      user:false,
      trigger:'ask name'
    },
    {
      id:"ask name",
      options:[
        {value: "Got it", label:"Got it", trigger:"cat"},
        // {value: "exit", label:"exit", trigger:"cat"}
      ]
    },
    // {
    //   id:'cat',
    //   message:'waiting..',
    //   trigger:'bat'
    // },
    {
      id:'cat',
      message:'what is your name',
      user:false,
      

      trigger:'rat'
    },
    {
      id:"rat",
      user:true,
      trigger:"cat4"
    },
    {
      id:"cat4",
      message:"what is your age",
      user:false,
      trigger:"ball"
    },
    {
      id:"ball",
      options:[
        {value: "18", label:"18", trigger:"cat2"},
        {value: "19", label:"19", trigger:"cat2"},
        {value: "20", label:"20", trigger:"cat2"},
        {value: "21", label:"21", trigger:"cat2"},
        {value: "22", label:"22", trigger:"cat2"},
        // {value: "exit", label:"exit", trigger:"cat"}
      ]
    },
    
    {
      id:"cat2",
      message:"Thank you in 5 seconds bot will exit",
  
      end:true,
    },
  ]

  return (
  <>
      <Segment >
        <ChatBot steps={steps}/>

      </Segment>
    </>
  );
}

export default App;
