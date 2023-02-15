//1. Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';

//There are two types of component
//1. Functional Component
function A(props){  //We will receive a formal arument
  let headA="Watch: Mandhana's priceless reaction after striking gold in WPL Auction"; //Data is available within component
  const headB='Air India-Airbus deal: PM Modi underlines deepening India-France ties';
  var paraB="The Tata Group-owned airline will buy 40 wide-body A350 planes and 210 narrow-body aircraft.";
  let imgB="https://www.hindustantimes.com/ht-img/img/2023/02/14/550x309/tata_sons_air_india_airbus_1676374089223_1676374118658_1676374118658.jpg"
  //Every function return something
  return <>
           <h1>{headA}</h1>
           <p>{props.paragraphA}</p>          
           <img src={props.imgA} />

           <B headingB={headB} paragraphB={paraB} imageB={imgB}></B>
         </>
  
}
//2. Class Component
class B extends React.Component{
  //1. Properties/Variables
  paraC = "The Income Tax Department on Tuesday conducted a survey operation at the BBC's offices in Delhi and Mumbai as part of an investigation into alleged tax evasion.";
  imageC = "https://www.hindustantimes.com/ht-img/img/2023/02/14/550x309/Russia-Ukraine-War-Media-Crackdown-1_1646413334081_1676367312510_1676367312510.jpg"
  //2. Constructor

  //3. methods
  render(){
    //Every function/method should return 
    const { headingB, paragraphB, imageB } = this.props

    return <React.Fragment>
              <h1>{headingB}</h1>
              <p>{paragraphB}</p>
              <img src={imageB} />
              <h3>{this.props.children}</h3>

              <C headingC ={this.headC} paragraphC ={this.paraC} imgC ={this.imageC} />
    </React.Fragment>
  }
}

//Fat arrow function 
let C =(props)=>{
  const headC="BBC reacts to income tax 'survey' at Delhi, Mumbai offices: ‘We hope to have…’";
  
  let headD="India's big G20 proposal: China, rich nations to take loans haircut to aid poor";
  const paraD="Two Indian government sources told Reuters of the proposal as finance ministers and central bank chiefs from the Group of 20 prepared to meet in Bengaluru next week.";

  
  // Every function return something
  
  return <>
           <h1>{headC}</h1>
           <p>{props.paragraphC}</p>
           <img src={props.imgC} />

           <D headingD={headD} paragraphD={paraD} />
         </>
}

//Class Component
class D extends React.Component {
  //There are three members of class
  //1. Property
  imgD="https://www.hindustantimes.com/ht-img/img/2023/02/15/550x309/The-theme-of-India-s-G20-presidency---Vasudhaiva-K_1675917222130_1676450512144_1676450512144.jpg";
  imgE="https://www.hindustantimes.com/ht-img/img/2023/02/15/550x309/natural_probiotics_1676450539942_1676450549119_1676450549119.jpg";
  //2. Constructor

  //3. Method
  render(){
    //Every method/function should return
    return <>
             <h1>{this.props.headingD}</h1>
             <p>{this.props.paragraphD}</p>
             <img src={this.imgD} />

             <E headingE={this.head1} paragraphE={this.paraE} imageE={this.imgE} />
           </>
  }
}
//Function Component
function E(props){
  var headE="5 homemade drinks that work wonders for your gut health";
  let paraE="Adding probiotics to the diet can help fight pathogens and support gut health. They can also restore the composition of gut microbiome and prevent gut inflammation. Here are 5 homemade drinks that can keep digestive issues at bay.";
  const paraF="India, already the top-ranked team in T20Is and ODIs, leapfrogged Australia to become No.1 Test side after beating them by an innings and 132 runs in the first Test of the Border-Gavaskar Trophy in Nagpur. India currently have 115 rating points. They are followed by Australia (111), England (106).";
  //Every function return something
  return(
          <React.Fragment>
             <h1>{headE}</h1>
             <p>{paraE}</p>
             <img src={props.imageE} />

             <F headingF={props.headF} paragraphF={paraF} imageF={props.imageF} />
          </React.Fragment>
  )
}

//Class Component
class F extends React.Component {
  //There are three members of a class
  //1. Property
  headF="India become No. 1 across formats after displacing Australia in Tests, captain Rohit creates history, Ashwin rises";
  imgF="https://www.hindustantimes.com/ht-img/img/2023/02/15/550x309/ANI-20230211175-0_1676449898604_1676449898604_1676449915640_1676449915640.jpg";
  headG="Modi steps up Ladakh defence, clears Shinkun La tunnel";
  //2. Constructor

  //3. Method
  render(){
    //Every function/method return something
    return <>
              <h1>{this.headF}</h1>
              <p>{this.props.paragraphF}</p>
              <img src={this.imgF} />

              <F paragraph={this.paraG} imageG={this.imgG} />
           </>
  }
}

//Fat Arrow function
let G = props =>{
  let paraG="The new tunnel under 16,703 feet Shinkun La will allow all-weather connectivity to Ladakh from Himachal Pradesh via Manali-Darcha axis and allow faster deployment of Indian troops to tackle any flare up in Kargil-Siachen sector with Pakistan or with PLA in East Ladakh.";
  const imgG="https://www.hindustantimes.com/ht-img/img/2023/02/15/550x309/shinkun_la_tunnel_1676462743827_1676462752850_1676462752850.png";
  //Every function return something
  return <React.Fragment>
            <h1>{props.headG}</h1>
            <p>{paraG}</p>
            <img src={imgG} />
         </React.Fragment>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

let para='Prince Harry Latest News: Royal commentator and author Daniela Esler said, “They went ahead with their prime-time claymore of an interview with Oprah Winfrey in March 2021."';
const image='https://www.hindustantimes.com/ht-img/img/2023/02/14/550x309/Britain-Prince-Harry-4_1673089129948_1673089129948_1676348986316_1676348986316.jpg';
root.render(<A paragraphA={para} imgA={image}/>);


//3. Export Area
