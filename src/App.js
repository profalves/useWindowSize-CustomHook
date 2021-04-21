import { useState, useEffect } from 'react';
import './App.css';
import useWindowSize from './hooks/useWindowSize';


function App() {
  const size = useWindowSize();
  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    console.log(size);

    if (size.width <= 500) setBackgroundColor('bg-yellow')
    else if (size.width > 500 && size.width <= 900) setBackgroundColor('bg-green')
    else setBackgroundColor('bg-blue')
  }, [size]);

  return (
    <div className={backgroundColor}></div>
  );
}

export default App;
