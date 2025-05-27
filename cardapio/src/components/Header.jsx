const Header = () => {
  return (
    
      <header className="w-full h-[300px] 
        bg-zinc-800 
        bg-[url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D')] 
        bg-cover bg-center">
        
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
          <img
            src="https://img.freepik.com/fotos-premium/hamburguer-completo-em-cima-de-uma-mesa-de-restaurante-ao-ar-livre_311379-1467.jpg"
            alt="Burguer"
            className="w-20 h-20 shadow-lg rounded-full hover:scale-110 transition-transform duration-300"
          />

          <h1 className="text-4xl font-bold mt-4 mb-3 text-red-900">King's Burger</h1>

          <span className="text-red-800 font-medium">
            Av. Dom José Tupinambá da Frota, 932 - Dom José, Sobral - CE, 62010-290
          </span>

          <div className="bg-green-500 text-white px-4 py-2 rounded-full mt-4 hover:scale-110 font-medium" id="horario">
            <span>De segunda a domingo das 18:00 às 23:00</span>
          </div>
        </div>
      </header>
   
  );
};

export default Header;
