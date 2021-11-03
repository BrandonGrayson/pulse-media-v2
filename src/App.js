import logo from './logo.svg';
import './App.css';
import Navbar from "../src/components/Navbar"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
   <ChakraProvider>
     <Navbar />
   </ChakraProvider>
  );
}

export default App;
