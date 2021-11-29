import logo from './logo.svg';
import './App.css';
import { useEffect, useLayoutEffect, useState } from 'react';

function App() {
  const [size, setSize] = useState({});

  useLayoutEffect(() => {
    setSize({width: window.innerWidth, height: window.innerHeight});
    const updateSize = () => {
      setSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  /*
  useEffect(() => {
    setSize({width: window.innerWidth, height: window.innerHeight});
    const updateSize = () => {
      setSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []); */
  return (
    <div>{size.width} : {size.height}</div>
  );
}

export default App;
