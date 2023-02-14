//1. Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';

//There are two types of component
//1. Functional Component
function A(){
  //Every function return something
  return <h1>Watch: Mandhana's priceless reaction after striking gold in WPL Auction
  </h1>
  //<h1>A <B /></h1>
}
//2. Class Component
class B extends React.Component{
  //1. Properties

  //2. Constructor

  //3. methods
  render(){
    //Every function/method should return something
    return <span>B</span>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A />);


//3. Export Area
