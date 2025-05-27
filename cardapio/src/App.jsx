import { CarrinhoProvider, VisibilidadeProvider,QuantidadeProvider } from "./context/useContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cardapio from "./pages/cardapio";
import Sucesso from "./pages/sucesso";




function App() {
  

  return (
    <QuantidadeProvider>

     <CarrinhoProvider>

      <VisibilidadeProvider>
         
         <BrowserRouter>
           <Routes>

             <Route path="/" element={<Cardapio></Cardapio>}></Route>
             <Route path="/sucesso" element={<Sucesso></Sucesso>}></Route>

           </Routes>
         </BrowserRouter>


       </VisibilidadeProvider>

      </CarrinhoProvider>

       </QuantidadeProvider>
   
  )
}

export default App
