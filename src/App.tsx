interface testeProp {
  text: string;
}


function Button(prop: testeProp){
  return <button>{prop.text}</button>
}



function App() {
  return (
  <div>
    <Button text= "Enviar"/>
    <Button text= "OK"/>
  </div>
  )
}

export default App
