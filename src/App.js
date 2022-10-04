
import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState('')
  const [hr, setHr] = useState(0)
  const [hr2, setHr2] = useState(0)

  function Calculate(e){
    e.preventDefault()
    const Upper = (220 - age) * 0.85
    const Lower = (220 - age) * 0.65
    setHr(Upper)
    setHr2(Lower)
  }

  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={Calculate}>
      <label>Age</label>
      <div>
        <input value={age} onChange={e=>setAge(e.target.value)}/>
      </div>
      <label>Heart rate limits</label>
      <div>
        <output>{hr2}-{hr}</output>
      </div>
      <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
