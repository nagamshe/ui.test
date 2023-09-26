import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Middleba from './Middleba';
import Rightbar from './Rightbar';
import { ThemeProvider } from "@material-tailwind/react";
function App() {
  return ( <ThemeProvider>
    <div className="flex-md flex-row p-4 dashboard">
     <Homepage/>
     <Middleba/>
     <Rightbar/>
     
     </div>
    </ThemeProvider>


  );
}

export default App;
