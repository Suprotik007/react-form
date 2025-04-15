import { useState } from 'react'
import SimpleForm from './Components/SimpleForm'
import Formaction from './Components/Formaction'
import ControlledField from './Components/ControlledField'
import Uncontrolled from './Components/Uncontrolled'
import HookForm from './Components/HookForm'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h2>Explore Form</h2>
      {/* <SimpleForm></SimpleForm> */}
      {/* <Formaction></Formaction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <Uncontrolled></Uncontrolled> */}
      <HookForm></HookForm>

    </>
  )
}

export default App
