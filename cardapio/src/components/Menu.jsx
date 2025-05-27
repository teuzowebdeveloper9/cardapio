import hamburguerDaCasa from '../../../assets/images-removebg-preview.png'
import hamburguerCarneDupla from '../../../assets/criativo-66108fbfee3b4img-2024-04-0566108fbfee3b9-removebg-preview.png'
import explosaoDeSabores from '../../../assets/10001510-removebg-preview.png'
import hamburguerBruto from '../../../assets/images__1_-removebg-preview.png'
import { useCarrinho,useQuantidade } from '../context/useContext'


const Menu = () => {
     const { novoItemCarrinho } = useCarrinho();
     const {incrementarQuantidade} = useQuantidade();

  return (
    <>
      <h2 className="text-3xl md:gap-8 md:text-4xl font-bold text-center mt-8 mb-6">
        Conheça o nosso cardápio
      </h2>

      <main className="grid px-3 grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2" id="menu">
        {/* Item 1 */}
        <div className="flex gap-4">
          <div>
            <img
              src={hamburguerDaCasa}
              alt="Hamburguer da casa"
              className="w-32 h-32 rounded-md hover:-rotate-2 duration-500 shadow-lg hover:scale-110 bg-red-900 transition-transform"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold">O Hamburguer da Casa</p>
            <p className="text-sm">
              Com um pão leve, crocante e suculento, ele traz uma mistura de sabores que promete surpreender e cumpre totalmente essa promessa.
            </p>
            <div className="flex items-center gap-2 justify-between mt-2">
              <p className="text-red-900 text-lg font-bold">R$ 25,00</p>
               <svg data-name="hamburguer de carne dupla" data-price="25" 
                onClick={() => {
                 novoItemCarrinho("hamburguer da casa", 25);
                 incrementarQuantidade();
                  }}
               class="bg-black w-20 h-8 text-red-800 hover:scale-110 hover:bg-gray-600 hover:text-purple-800 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4">
          <div>
            <img
              src={hamburguerCarneDupla}
              alt="Hamburguer de carne dupla"
              className="w-32 h-32 rounded-md hover:-rotate-2 duration-500 shadow-lg hover:scale-110 bg-red-900 transition-transform"
              
            />
          </div>
          <div className="flex-1">
            <p className="font-bold">Hamburguer de Carne Dupla</p>
            <p className="text-sm">
              Um hambúrguer irresistível com duas generosas camadas de carne 100% bovina, grelhadas à perfeição, garantindo suculência e sabor marcante a cada mordida.
            </p>
            <div className="flex items-center gap-2 justify-between mt-2">
              <p className="text-red-900 text-lg font-bold">R$ 25,00</p>
                <svg data-name="hamburguer de carne dupla" data-price="25" 
                 onClick={() => {
                 novoItemCarrinho("hamburguer de carne dupla", 25);
                 incrementarQuantidade();
                  }}
                class="bg-black w-20 h-8 text-red-800 hover:scale-110 hover:bg-gray-600 hover:text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4">
          <div>
            <img
              src={explosaoDeSabores}
              alt="Explosão de Sabores"
              className="w-32 h-32 rounded-md hover:-rotate-2 duration-500 shadow-lg hover:scale-110 bg-red-900 transition-transform"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold">Explosão de Sabores</p>
            <p className="text-sm">
              Duas camadas suculentas de carne, queijo derretido e ingredientes selecionados, reunidos para uma experiência intensa e inesquecível.
            </p>
            <div className="flex items-center gap-2 justify-between mt-2">
              <p className="text-red-900 text-lg font-bold">R$ 27,00</p>
                 <svg data-name="explosão de sabores" data-price="27" 
                  onClick={() => {
                 novoItemCarrinho("explosão de sabores", 27);
                 incrementarQuantidade();
                  }}
                 
                 class="bg-black w-20 h-8 text-red-800 hover:scale-110 hover:bg-gray-600 hover:text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex gap-4">
          <div>
            <img
              src={hamburguerBruto}
              alt="hamburguer bruto"
              className="w-32 h-32 rounded-md hover:-rotate-2 duration-500 shadow-lg hover:scale-110 bg-red-900 transition-transform"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold">hamburguer bruto</p>
            <p className="text-sm">
              Um hambúrguer robusto, feito para quem não teme desafios! Duas generosas camadas de carne bovina 100% Angus, grelhadas no ponto perfeito...
            </p>
            <div className="flex items-center gap-2 justify-between mt-2">
              <p className="text-red-900 text-lg font-bold">R$ 35,00</p>
                 <svg data-name="hamburguer bruto" data-price="35" 
                    onClick={() => {
                 novoItemCarrinho("hamburguer bruto ", 35);
                 incrementarQuantidade();
                  }}
                 class="bg-black w-20 h-8 text-red-800  hover:scale-110 hover:bg-gray-600 hover:text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Menu;
