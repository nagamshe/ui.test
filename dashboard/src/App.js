import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return ( <ThemeProvider>
     <Homepage/>
    </ThemeProvider>
 

  );
}

export default App;
