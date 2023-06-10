import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ClientsPage } from "./pages/ClientsPage";
import { ClientFormPage } from "./pages/ClientFormPage";
import { Navigation } from "./components/Navigation";

function App(){
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/client/list"/>}/>
        <Route path="/client/list" element={<ClientsPage/>}/>
        <Route path="/client/create" element={<ClientFormPage/>}/>
        <Route path="/client/:id" element={<ClientFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;