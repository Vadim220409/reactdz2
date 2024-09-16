import React from "react"
import { Greeting, Message, Button } from "./dz"


function App() {
  const click = () => {
    console.log("Кнопка Натиснута");
  }

  return (
    <div className="App">
      <Greeting name="Іван" />
      <Message text="Довільне повідомлення" />
      <Button onClick={click} />
    </div>
  )
} 

export default App;