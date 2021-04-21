import { useState, useEffect } from 'react';
import './App.css';
import useWindowSize from './hooks/useWindowSize';


function App() {
  const size = useWindowSize();
  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    console.log(size);

    if (size.width <= 600) setBackgroundColor('bg-yellow')
    else if (size.width > 600 && size.width <= 800) setBackgroundColor('bg-green')
    else setBackgroundColor('bg-blue')
  }, [size]);

  return (
    <div className={backgroundColor}></div>
  );
}

export default App;
