import { createContext ,useState} from "react";
import dark from './dark.css'
import light from './light.css'
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Navbar from "./Components/Navbar/Navbar";

export const MyContext = createContext();

function App() {

  const [defaultTheme, setDarkTheme] = useState(light.lightTheme);
const handleDarkTheme = () => {
setDarkTheme(dark.darkTheme)
}

  return (
    <div className="App">
     <button onClick={() => handleDarkTheme()}
className='btn btn-primary'>Apply Dark Theme</button>
<MyContext.Provider value={defaultTheme}>
<div>
  <Navbar/>
<Comp1 />
<Comp2/>
</div>
</MyContext.Provider>
    </div>
  );
}

export default App;
