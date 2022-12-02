import {createContext,useContext,useState} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile : false,
    notification: false,
}

export const ContextProvider = ({children}) => {

    const[activeMenu,setActiveMenu] = useState(true);
    const[isClicked,setIsClicked] = useState(initialState);

    const[currentColor,setCurrentColor] = useState('#03C9D7');
    const[currentMode,setCurrentMode] = useState('Light');
    const[themeSettings,setThemeSettings] = useState(false);
    
    const setMode = (e) =>{
        console.log(e.target.value)
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode',e.target.value);
    }
    const setColor = (color) =>{
        console.log(color)
        setCurrentColor(color);
        localStorage.setItem('colorMode',color);
    }

    const handleClick = (clicked) => {
    setIsClicked({...initialState, [clicked]: true})
    }

    const [screenSize, setScreenSize] = useState();
    return (
      <StateContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          isClicked,
          setIsClicked,
          handleClick,
          screenSize,
          setScreenSize,
          currentColor,
          currentMode,
          setCurrentColor,
          setCurrentMode,
          setColor,
          setMode,
          themeSettings,
          setThemeSettings,
        }}
      >
        {children}
      </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);