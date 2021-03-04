import { useEffect, useState } from 'react';
import Counter from './counter';

function App() {

  const [show, setShow] = useState(true);


  useEffect(() => {
    let timer = setInterval(() => {
      time++;
      if(time > 5) {
        clearInterval(timer);
        setShow(false)
      }
    }, 1000)
  }, [])

  let time = 0;

  
  
  if(show) {
    return (
      <div>
        <Counter count={3}/>
      </div>
    );
  } else {
    return (
    <div>
      Sem contador!
    </div>
    )
  }

 
}

export default App;
