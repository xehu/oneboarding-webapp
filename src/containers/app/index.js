import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import ChatBot from 'react-simple-chatbot'
import EndCallback from '.'

// var EndCallback = 
// EndCallback.render()

const steps = [
  {
    id: '0',
    message: 'Hi, I\'m Oneboarding! I\'m here to help you onboard.',

    //Below is code trying to create a sample dialogue. Known bug is that it won't let you type.

    //trigger: '1',
  },
  /*{
    id: '1',
    message: 'To get started, go to aka.ms/internz.',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Let me know when you\'re done reading.',
  },
  {
    id: '3',
    user: true,
    validator: (value) => {
        if (value === "got it" || value === "done") {
          return true;
        }
        return "Oh no, how can I help?";
    },
    trigger:'4',
  },
  {
    id: '4',
    message: 'Can I answer a question?',
  }*/
];

const App = () => (
  <div>
    /*<EndCallback />*/
    <ChatBot steps={steps} />
  </div>
)

export default App
