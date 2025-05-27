import Lottie from "lottie-react"
import sucessoAnimation from '../../../assets/Animation - 1748376386558.json'

const Sucesso = () => {
  return (
     <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-green-900 mb-4">entrega á caminho</h1>
        <Lottie
         animationData={sucessoAnimation}
         loop={false}
         className="w-70 h-70"
        >
            
        </Lottie>
         
     </div>
  )
}

export default Sucesso