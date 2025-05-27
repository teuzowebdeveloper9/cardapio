import { createContext, useContext, useState } from 'react';

const VisibilidadeContext = createContext();
const CarrinhoContext = createContext();
const quantidadeContext = createContext();

export function VisibilidadeProvider({ children }) {
  const [visivel, setVisivel] = useState(false);

  const toggleVisibilidade = () => setVisivel(!visivel);

  return (
    <VisibilidadeContext.Provider value={{ visivel, toggleVisibilidade }}>
      {children}
    </VisibilidadeContext.Provider>
  );
}

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);
    const removerItem = (index) => {
       setCarrinho(carrinho.filter((_, idx) => idx !== index));
      };

    const novoItemCarrinho = (nome, preco) => {
           
        setCarrinho([...carrinho, { nome, preco }]);
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, novoItemCarrinho, removerItem }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export function QuantidadeProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0);

    const incrementarQuantidade = () => setQuantidade(quantidade + 1);
    const decrementarQuantidade = () => setQuantidade(quantidade - 1);

    return (
        <quantidadeContext.Provider value={{ quantidade, incrementarQuantidade, decrementarQuantidade }}>
            {children}
        </quantidadeContext.Provider>
    );
}


export function useQuantidade(){
    return useContext(quantidadeContext);
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}


export function useVisibilidade() {
  return useContext(VisibilidadeContext);
}
