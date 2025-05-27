## Project Overview

This is a React-based web application for King's Burger, a restaurant from my city. The application showcases the restaurant's menu, allows users to add items to their cart, and simulates the order process.

## Technical Stack

- React.js
- Tailwind CSS
- Context API for state management

## Project Structure

The project is organized into the following main components:

- `CartFooter.jsx`: Displays the cart summary and toggle button.
- `Header.jsx`: Renders the restaurant's header with logo and information.
- `Menu.jsx`: Shows the main menu items (burgers).
- `Modal.jsx`: Handles the cart modal for order review and checkout.
- `Acompanhamentos.jsx`: Displays additional items (beverages).
- `useContext.jsx`: Contains context providers for visibility, cart, and quantity management.
- `cardapio.jsx`: Main page component that assembles all other components.

## Key Features

1. **Responsive Design**: Utilizes Tailwind CSS for a mobile-first, responsive layout.

2. **State Management**: Implements React Context API for managing cart state, visibility of components, and item quantities.

3. **Dynamic Rendering**: Menu items and beverages are dynamically rendered, allowing for easy content updates.

4. **Interactive UI Elements**: 
   - Hover effects on menu items
   - Click-to-add functionality for cart items
   - Modal for cart review and checkout

5. **Custom Hooks**: 
   - `useCarrinho()`: Manages cart items
   - `useVisibilidade()`: Controls visibility of components
   - `useQuantidade()`: Handles item quantities

6. **SVG Icons**: Uses inline SVG for cart icons, ensuring scalability and performance.

7. **Image Optimization**: Implements image optimization techniques for faster loading times.

8. **Modular Component Structure**: Each component is self-contained, promoting reusability and maintainability.

## Technical Implementation Details

- **Context API Usage**: The application uses multiple contexts (`VisibilidadeContext`, `CarrinhoContext`, `quantidadeContext`) to manage global state, avoiding prop drilling.

- **Tailwind CSS Classes**: Extensive use of Tailwind utility classes for styling, reducing the need for custom CSS.

- **Event Handling**: Implements click event handlers for adding items to cart and toggling visibility.

- **Conditional Rendering**: Uses conditional rendering techniques to display cart items and control component visibility.

- **Array Manipulation**: Utilizes array methods like `filter` and spread operator for managing cart items.

- **Functional Components**: All components are implemented as functional components, leveraging React Hooks.

- **Props Destructuring**: Employs props destructuring for cleaner component interfaces.

- **ES6+ Features**: Makes use of modern JavaScript features like arrow functions, template literals, and object destructuring.

## Performance Considerations

- Implements lazy loading for images to improve initial load time.
- Uses SVG for icons to ensure crisp rendering at all sizes.
- Minimizes re-renders by using context selectively.

## screenshots 

![image](https://github.com/user-attachments/assets/1673fd2d-9631-4919-8b88-faedf4e641b8)

![image](https://github.com/user-attachments/assets/8f3c0872-1d45-48bc-8be1-9e00c69df755)

![image](https://github.com/user-attachments/assets/82fc7db0-a1f6-4ee0-a171-e1445918ea9b)

![image](https://github.com/user-attachments/assets/c260ec78-7e81-4b4d-ac2d-d3b393827cb5)

![image](https://github.com/user-attachments/assets/5b8113ba-56eb-4f13-a6d8-d4756e34692f)

![image](https://github.com/user-attachments/assets/060c0f4c-e6a5-441e-8713-a2272035fd9d)

![image](https://github.com/user-attachments/assets/c5c4ae3a-ab44-4d1f-881c-851c7943924c)
-this is an animation using lottie not an image-

![image](https://github.com/user-attachments/assets/eeceb071-d377-4be3-b9ca-3a2fab7336be)

![image](https://github.com/user-attachments/assets/eefc8b04-833f-4d7a-941b-2a398e542c78)

![image](https://github.com/user-attachments/assets/92191bfc-f183-4d4f-8582-589bcbce072b)


## how to run and test this project

```bash

git clone https://github.com/teuzowebdeveloper9/cardapio

cd cardapio

npm install

npm run dev 

```

