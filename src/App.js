import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter'
// import BorderCard from './components/common/BorderCard';
import CounterCard from './components/common/CounterCard';
import BorderCard from './components/common/BorderCard';
import Button from './components/common/Button';
import {useState, useEffect} from 'react';
import CounterBoxes from './components/counter/CounterBoxes';
import axios from 'axios';

//npm start
//launches dev server


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const res = await axios.get('http://localhost:8080/api/test/news/react');

  }, [])
  

  const handleClick = () => {
      setCount(count + 1);
  }

  const handleReduce = () => {
    setCount(count - 1);
  }

  

  return (
    <div className="App" style={
      {
        display: "flex",
        flex: "1",
        alignItems: 'center',
        flexDirection: "column",
        minHeight: '100vh'
      }
    }>

      <div style={{flexDirection: "row"}}></div>
      <Button onClick = {handleClick}>
        <p>Click Me!</p>
      </Button>
      <Button onClick = {handleReduce} style={{backgroundColor: "red"}} disabled={count == 0}>
        <p>Reduce Buttons!</p>
      </Button>
      <CounterBoxes count={count}/>
    </div>
  );
}

export default App;
