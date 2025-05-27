import Acompanhamentos from "./components/Acompanhamentos"
import CartFooter from "./components/CartFooter"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Modal from "./components/Modal"
import { CarrinhoProvider, VisibilidadeProvider,QuantidadeProvider } from "./context/useContext"



function App() {
  

  return (
    <QuantidadeProvider>
     <CarrinhoProvider>
      <VisibilidadeProvider>
         <Header></Header>
         <Menu></Menu>
         <Modal></Modal>
         <Acompanhamentos></Acompanhamentos>
         <CartFooter></CartFooter>
       </VisibilidadeProvider>
      </CarrinhoProvider>
       </QuantidadeProvider>
   
  )
}

export default App
