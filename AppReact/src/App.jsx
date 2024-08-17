import { Fragment } from "react";
import Mensaje from "./componente/Mensaje"
import Encabezado from "./componente/Encabezado"; 
import Pie from "./componente/Pie";
function App() {

  return (
    <>
      <Encabezado />
      <br/>
      <Mensaje />
      <Pie/>
    </>
  )
}

export default App;