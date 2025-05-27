// Importação das imagens
import pepsi from '../../../assets/images__2_-removebg-preview.png';
import coca from '../../../assets/10001675-removebg-preview.png';
import guarana from '../../../assets/10001711-removebg-preview.png';
import { useCarrinho,useQuantidade } from '../context/useContext';

const Acompanhamentos = () => {
     const { novoItemCarrinho } = useCarrinho();
     const {incrementarQuantidade} = useQuantidade();
  

  return (
    <>
      <div>
        <h2 className="text-3xl md:gap-8 md:text-4xl font-bold text-center mt-8 mb-6">
          bebidas
        </h2>
      </div>

      <div className="grid px-3 grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2" id="acompanhamentos">

        {/* Pepsi */}
        <div className="flex gap-4">
          <div>
            <img
              src={pepsi}
              alt="pepsi de 2 litros"
              className="w-32 h-32 rounded-md hover:-rotate-2 duration-500 shadow-lg hover:scale-110 bg-red-900 transition-transform"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold">pepsi de 2 litros</p>
            <p className="text-sm">
              Refrescante e irresistível, a Pepsi é a escolha ideal para acompanhar o seu hambúrguer. Seu sabor marcante, com o equilíbrio perfeito entre doçura e leveza, realça ainda mais a experiência de cada mordida. Gelada, é a pedida certa para matar a sede e completar sua refeição com muito mais prazer.
            </p>
            <div className="flex items-center gap-2 justify-between mt-2">
              <p className="text-red-900 text-lg font-bold">R$ 9,00</p>
              <svg
                 onClick={() => {
                 novoItemCarrinho("pepsi de 2 litros", 9);
                 incrementarQuantidade();
                  }}
                data-name="pepsi de 2 litros"
                data-price="9"
                className="bg-black w-20 h-8 text-red-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Coca-Cola */}
        <div className="flex gap-4">
          <div>
            <img
              src={coca}
              alt="coca cola de 2 litros"
              className="w-32 h-32 rounded-md hover:-rotate-2 duration-500 shadow-lg hover:scale-110 bg-red-900 transition-transform"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold">coca-cola de 2 litros</p>
            <p className="text-sm">
              A campeã de vendas e a mais prestigiada! A Coca-Cola de 2 litros é a escolha certeira para reunir a família ou os amigos. Com seu sabor inconfundível, refrescante e clássico, ela transforma qualquer refeição em um momento especial. Não é à toa que é a mais pedida: combina perfeitamente com nossos hambúrgueres e garante satisfação até o último gole.
            </p>
            <div className="flex items-center gap-2 justify-between mt-2">
              <p className="text-red-900 text-lg font-bold">R$ 11,00</p>
              <svg
                  onClick={() => {
                 novoItemCarrinho("coca-cola de 2 litros", 11);
                 incrementarQuantidade();
                  }}
                data-name="coca-cola de 2 litros"
                data-price="11"
                className="bg-black w-20 h-8 text-red-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Guaraná Antarctica */}
        <div className="flex gap-4">
          <div>
            <img
              src={guarana}
              alt="guaraná antartida de 2 litros"
              className="w-32 h-32 rounded-md hover:-rotate-2 duration-500 shadow-lg hover:scale-110 bg-red-900 transition-transform"
            />
          </div>
          <div className="flex-1 mb-3">
            <p className="font-bold">guaraná antartida de 2 litros</p>
            <p className="text-sm">
              Leve, refrescante e cheia de brasilidade! O Guaraná Antarctica é o acompanhamento ideal para quem busca aquele sabor autêntico e natural. Feito com o verdadeiro guaraná da Amazônia, ele combina perfeitamente com nossos hambúrgueres, trazendo uma explosão de frescor e alegria em cada gole. O refrigerante que é a cara do Brasil e que não pode faltar na sua refeição!
            </p>
            <div className="flex items-center gap-2 justify-between mt-2">
              <p className="text-red-900 text-lg font-bold">R$ 10,00</p>
              <svg
                 onClick={() => {
                 novoItemCarrinho("guaraná antartida de 2 litros", 10);
                 incrementarQuantidade();
                  }}
                data-name="guaraná antartida de 2 litros"
                data-price="10"
                className="bg-black w-20 h-8 text-red-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Acompanhamentos;
