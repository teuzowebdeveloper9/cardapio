import { useVisibilidade, useQuantidade } from "../context/useContext";

export default function CartFooter() {
   const {toggleVisibilidade} = useVisibilidade();
   const {quantidade} = useQuantidade();

  return (
    <footer className="w-full h-10 bg-red-600 py-2">
      <button
         onClick={toggleVisibilidade}
        className="text-white h-10 font-bold fixed bottom-0 z-40 flex flex-row items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 transition-colors duration-300"
      >
        (<span>{quantidade}</span>) veja o seu carrinho
        <svg
          className="text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg>
      </button>
    </footer>
  );
}
