import { useEffect, useState } from 'react';
import '../styles/App.css';

function recursiveTree(data){
	return Object.entries(data).map(([key, value])=>{
		if(value.type==='folder'){
			return <details key={key} >
				<summary> Folder {key}</summary>
				{recursiveTree(value.children)}
			</details>
		}
		else{
			return <div key={key} > File {key} </div>
		}
	})
}

function App() {
	const [data, setData] = useState();

	useEffect(()=>{
		fetch('./fs.json').then((res)=>res.json()).then(setData)
	},[])


	if(!data){
		return <div>Loading...</div>
	}

	return <div className="App">{recursiveTree(data.root)}</div>;
}

export default App;