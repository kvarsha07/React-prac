import React , {useState} from 'react'

function TodoInput  () {
  const [inputText,setInputText]=useState("");

  const handleBtn =(e)=>
  {
    e.prentDefault()
  }

  return (
    <div className='input-container'>
      <input 
      type='text'
      placeholder='Enter Your Name'
      value={inputText}
      onChange={e=>{
        setInputText(e.target.value);
        console.log(setInputText)
      }}
      />
      <button onClick={handleBtn}>Add</button>
    </div>
  )
}

export default TodoInput ;
