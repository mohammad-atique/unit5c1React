import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    score: 76,
    wicket: 2,
    ball: 50
  })

  const add = (v, name)=>{
    
     
        if(values.score>=100){
          
          return 
        }
     if(values.wicket>12){
       return
     }
    
    values[`${name}`] = values[`${name}`]+ v;

    setValues({...values})
  }
  const over= (ball)=>{
   let b = ball%6

   let ov=Math.floor(ball/6)
    // console.log(b,ov)
    return (ov+"."+b)
  }
  
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              values.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              values.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
           over(values.ball)


            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=> add(1, "score")}>Add 1</button>
        <button className="addScore4" onClick={()=> add(4, "score")}>Add 4</button>
        <button className="addScore6" onClick={()=> add(6, "score")}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=> add(1, "wicket")}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=> add(1, "ball")}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <div>
       {values.score >= 100 ? <h1 className="status">India Won</h1> : null}
      </div>
    </div>
  );
}

export default App;