import { useEffect, useState } from 'react';
import '../styles/App.css';
function App() {
  const [data, setData] = useState()
useEffect(() => {
	fetch('/data.json')
		.then((res) => res.json())
		.then((data)=>setData(data));
}, []);

console.log(data)
  return (
    <div className="App">
      PIZDA
    </div>
  );
}

export default App;
