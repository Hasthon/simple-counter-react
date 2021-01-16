import React from 'react';
import PropType from "prop-types";


export function SecondsCounter(props) {
    return (
        <div clas="tiempo">
            <span><i class="far fa-clock"></i></span>&nbsp;&nbsp;
            <span>{props.time.h}</span>&nbsp;&nbsp;
            <span>{props.time.m}</span>&nbsp;&nbsp;
            <span>{props.time.s}</span>&nbsp;&nbsp;
            <span>{props.time.ms}</span>&nbsp;&nbsp;
        </div>

    );
}

SecondsCounter.prototype = {
    time: PropType.any,
}

