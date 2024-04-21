import React from 'react'

function Hook (){
    return(
        <div>
            <h1>
                 Hello World !
            </h1>
        </div>
    )
}
export default Hook;










// import React, { useEffect, useState } from 'react';
// import db from './db.json'

// function MyComponent() {
//   const [users, setUsers] = useState($100);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await fetch('http://localhost:3001/users');
//   //       const data = await response.json();
//   //       setUsers(data.users); // Assuming "users" is the key in your JSON data
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   return (
//     <div>
//       {/* {/* <h1>Users</h1>
//       {db.users[0].name}
//       {db.users[0].email} */}
//       {/* <fom>
//         <label>Name:</label>
//         <input type='text' placeholder='Enter Name'/>
//         <label>Email ID:</label>
//         <input type='email' placeholder='Enter Email '/>
//         <button>Add</button>


        
//       </fom> */} */}


//     </div>
//   );
// }

// export default MyComponent;



// import React from 'react';
// React.useState(

// import React from 'react';
// // React.useState(...)

// // don't change the Component name "App"

// Hide Show Button


// export default function App() {
//     const [showWarning,setShowWarning] =React.useState(false);
//     const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(false);

    
//     const showWarningBox =()=>{    
//         setShowWarning(true)
         
//   } 
//   const hideWarningBox =()=>
//   {
//       setShowWarning(false);
//       setDeleteButtonDisabled(true);
//   }
  
  
  
//     return (
//      <div >
//      {!showWarning &&(
//           <button onClick={showWarningBox}>Delete</button>
//           :null
//          )
      
//       {showWarning && (  
//         <div data-testid="alert" id="alert">
//         <h2>Are you sure?</h2>
//           <p>These changes can't be reverted!</p>
//           <button onClick={hideWarningBox}>Proceed</button>
//           :null
//           </div>
          
//        )}
//       </div>    
//     );
// }


// Counter {State program} peogramming for interview

// import React ,{useState}from 'react'
// function App(){
//   const [data,setData]=useState(0);
//     const setcounter=()=>
//     {
//       setData(data+1);
//     }

//     const detcounter1=()=>
//     {
//       setData(data-1);
//     }
//     return(
//       <div >
//     <h1>{data}</h1>
//     <button onClick={setcounter}>Counter</button>
//     <button onClick={detcounter1}>decreament btn</button>
//    </div>
//     )

//   }
  
// export default App;
    

// props using in class component



// import React from 'react';
// import ChildComponent from './ChildComponent';

// class ParantComponent extends React.Component{
//   render(){
//     const dataToSend ="Hello from parentComponent";
//     return(
//            <div>
//               {/* <h1>Parent Comonent</h1> */}
//               <ChildComponent message={dataToSend}/>
//            </div>

//     )
//   }
// }
// export default ParantComponent ;

// Props using in Functional Component

// import React from 'react'
// import ChildComponent from './ChildComponent'

// function ParantComponet () {
//   const PassData ="hello i am from parant component";
//   return (
//   <div>
//       <h1>Parant Component</h1>
//       <ChildComponent meassage={PassData}/>
//     </div>
//   )
// }

// export default ParantComponet


// TODO List

// import React ,{useState} from 'react'
// import "./App.css"
// import ToDoList from './ChildComponent'
// import TodoInput from './TodoInput'

//    function App(){
//   return(
//             <div  className=' main-container'>
//               <div className='content-container'>
//               <TodoInput/>
//               <h3>TODO</h3>
//                </div>
//          </div>
//           )
      
//         }
        
//       export default App;

import React,{useState} from "react";
          function App(){
            const[data,setData]=useState(0);
            const addcount =()=>{
                 setData(data+1);
            }

            const mincount =()=>{
            setData(data-1);
         }
            return(
              <div>
                <h1>{data}</h1>
                <button onClick={addcount}>+</button>
                <button onClick={mincount}>-</button>
              </div>
            )
          }
          export default App;

