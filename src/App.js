import React, { useState } from 'react';
import { SecondsCounter } from './components/secondscounter';
import { BtnContador } from './components/btncontador';
import './App.css';

let contador = 0;

function App() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0, });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    };

    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        const str = contador.toString().split('');
        updatedH = "0"
        updatedM = "0"
        updatedS = "0"
        updatedMs = "0"

        if (str.length >= 4) {
            updatedH = str[str.length - 4];
        } 
         if (str.length >= 3) {
            updatedM = str[str.length - 3]
        } 
         if (str.length >= 2) {
            updatedS = str[str.length - 2]
        } 
         if (str.length >= 1) {
            updatedMs = str[str.length - 1]
        }
        contador++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH, });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
    };

    const resume = () => start();

    return (
        <div className="main-section">
            <div className="clock-holder" >
                <div className="stopwatch">
                    <SecondsCounter time={time}/>
                    <BtnContador status={status} resume={resume} stop={stop} reset={reset} start={start} />
                </div>
            </div>
        </div>
    );
};
export default App;