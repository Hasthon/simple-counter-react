import React from 'react';
import PropType from "prop-types";


export function BtnContador(props) {
    return (
        <div className="container">
            {(props.status === 0) ?
                <button className="btn btn-secondary"
                    onClick={props.start}>Start</button> : ""
 
            }
            {(props.status === 1) ?
                <div>
                    <button className="btn btn-secondary mr-5"
                        onClick={props.stop}>Stop</button>
                    <button className="btn btn-secondary"
                        onClick={props.reset}>Reset</button>
                </div> : ""
            }
            {(props.status === 2) ?
                <div>
                    <button className="btn btn-secondary mr-5"
                        onClick={props.resume}>Resume</button>
                    <button className="btn btn-secondary"
                        onClick={props.reset}>Reset</button>
                </div> : ""
            }
        </div>

    );
}


