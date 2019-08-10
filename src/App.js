import React from 'react';
import logo from './logo.svg';
import './App.css';

import Highlight from 'react-highlight'
import 'highlight.js/styles/arta.css'
import 'highlight.js/lib/languages/java'

function App() {
 const code = `"if(stArray[start].contains("do") && stArray[start].contains("{") ) {
  System.out.println("Line number " + start + " has a do statement");
  Ctc = Ctc +2; 
  
 divideBySpaces = stArray[start].split("\\s");
 for (y=0; y<divideBySpaces.length;y++) {
   if(divideBySpaces[y].equals("&&") || divideBySpaces[y].equals("||") || divideBySpaces[y].equals("&") || divideBySpaces[y].equals("|")) {
     Ctc++;
   }
 }
}"`

  return (
    <div className="App">
      <Highlight className='Java' innerHTML={true}>
        {code}
      </Highlight>
    </div>
  );
}

export default App;
