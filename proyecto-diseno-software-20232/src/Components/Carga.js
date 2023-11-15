import React from 'react';

function Carga() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'rgba(241, 242, 243, 0)', display: 'block'}} width="131px" height="131px" viewBox={"0 0 100 100"} preserveAspectRatio="xMidYMid">
                <g>
                  <circle cx="60" cy="50" r="4" fill="#0d6efd">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.3513513513513513s" values="95;35" keyTimes="0;1" begin="-0.4958s"></animate>
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.3513513513513513s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.4958s"></animate>
                  </circle>
                  <circle cx="60" cy="50" r="4" fill="#0d6efd">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.3513513513513513s" values="95;35" keyTimes="0;1" begin="-0.2442s"></animate>
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.3513513513513513s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.2442s"></animate>
                  </circle>
                  <circle cx="60" cy="50" r="4" fill="#0d6efd">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.3513513513513513s" values="95;35" keyTimes="0;1" begin="0s"></animate>
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.3513513513513513s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
                  </circle>
                </g><g transform="translate(-15 0)">
                  <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#fdff00" transform="rotate(90 50 50)"></path>
                  <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#fdff00">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.3513513513513513s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
                  </path>
                  <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#fdff00">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.3513513513513513s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
                  </path>
                </g>
                </svg>
    );
}

export default Carga;