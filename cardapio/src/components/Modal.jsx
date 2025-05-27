import { useVisibilidade,useCarrinho,useQuantidade } from "../context/useContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


 

const Modal = () => {
    const { visivel} = useVisibilidade();
    const {toggleVisibilidade} = useVisibilidade();
    const { carrinho } = useCarrinho();
    const { removerItem} = useCarrinho();
    const { decrementarQuantidade } = useQuantidade();
    const [valor, setValor] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()

        if (valor.trim() === ""){
            setErro("Digite seu endereço completo");
        }
        else {
            console.log("sucesso ao enviar o pedido");
            setErro("");
            navigate("/sucesso")

        }
    }

    

  return (
    <div className={`bg-black/60 w-full h-full fixed top-0 left-0 z-[99] ${visivel ? 'flex' : 'hidden'}  items-center justify-center`} >
        
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[500px] max-w-[500px]">
        <h2 className="text-center font-bold text-2xl mb-1">Meu Carrinho</h2>

        <div className="flex justify-between mb-2 flex-col max-h-72 overflow-y-auto">
          {/* Itens do carrinho aqui */}
        </div>

        <p className="font-bold">
          Total: <span>R$ 0.00</span>
        </p>

        
       <div>
  <h2 className="text-xl font-bold mb-4">Carrinho:</h2>

  {carrinho.length === 0 ? (
    <p className="font-bold">Vazio</p>
  ) : (
    <>
     


      <div className="flex flex-col max-h-72 overflow-y-auto list-none mb-4">

        <p className="font-bold mt-3 mb-2">Endereço de entrega:</p>
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite seu endereço completo..."
          required
          className="w-full border-2 p-1 rounded my-1 mb-2"
        />
        {carrinho.map((item, idx) => (
          <div key={idx} className="flex justify-between mb-2 font-bold">
            {item.nome} - R$ {item.preco} 
             <button
                onClick={() => {
                 removerItem(idx);
                 decrementarQuantidade();
                  }}
             className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900">remover </button>
          </div>
        ))}
      </div>

      <div className="text-right font-semibold">
        Total: R$ {carrinho.reduce((acc, item) => acc + Number(item.preco), 0).toFixed(2)}
        
      </div>
    </>
  )}
</div>
       {erro && <span className="text-red-500">{erro}</span>}

        <p className="font-bold text-red-800 hidden">
          Digite seu endereço completo
        </p>

        <div className="flex justify-between mt-3">
          <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900"
            onClick={toggleVisibilidade}>
            Fechar
          </button>
          <button onClick={handleSubmit} className="bg-green-700 text-white p-2 rounded-md hover:bg-green-900">
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
