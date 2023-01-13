import React from 'react';
import styled, { withTheme } from 'styled-components';

const IconSVG = styled.svg`
  width: 250px;
  height: 250px;
  margin: 20px 0;
`;

const Shape = styled.path`
    fill: ${({theme:{notFound}}) => (notFound.shape)};
    transition: fill 300ms 100ms;
`;

const Figure = () => (
    <IconSVG version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' viewBox='0 0 268.465 268.465'>
        <g>
            <Shape d='M254.688,50.339c-18.355-18.367-48.238-18.372-66.613-0.015c-0.036,0.036-0.067,0.076-0.102,0.113l-32.631,32.635
                c-2.929,2.929-2.928,7.678,0.001,10.606c1.464,1.464,3.383,2.196,5.303,2.196c1.919,0,3.839-0.732,5.304-2.197l32.746-32.75
                c0.022-0.022,0.04-0.047,0.063-0.069c12.533-12.434,32.838-12.407,45.323,0.086c12.519,12.516,12.522,32.883,0.008,45.402
                l-45.91,45.909c-6.063,6.064-14.126,9.404-22.702,9.404s-16.639-3.339-22.704-9.404c-2.929-2.929-7.678-2.929-10.607,0
                c-2.929,2.929-2.929,7.678,0,10.606c8.898,8.897,20.727,13.797,33.31,13.797c12.583,0,24.412-4.9,33.309-13.797l45.91-45.91
                C273.059,98.584,273.054,68.7,254.688,50.339z'/>
            <Shape d='M59.676,105.597l-45.91,45.909c-18.354,18.367-18.354,48.251,0.002,66.619c9.184,9.185,21.247,13.777,33.312,13.776
                c12.056-0.001,24.116-4.588,33.297-13.762c0.002-0.003,0.005-0.005,0.008-0.008l32.746-32.755c2.928-2.93,2.928-7.678-0.002-10.607
                c-2.93-2.928-7.677-2.928-10.607,0.001l-32.746,32.755c-0.001,0.001-0.001,0.002-0.002,0.003
                c-12.52,12.511-32.884,12.506-45.398-0.009c-12.512-12.52-12.512-32.891-0.002-45.409l45.909-45.908
                c12.519-12.52,32.888-12.521,45.407-0.004c2.929,2.929,7.678,2.929,10.606-0.001c2.929-2.929,2.928-7.678-0.001-10.606
                C107.927,87.227,78.041,87.229,59.676,105.597z'/>
            <Shape d='M124.413,53.125c1.196,2.889,3.989,4.633,6.933,4.633c0.956,0,1.928-0.184,2.866-0.572
                c3.827-1.584,5.646-5.971,4.061-9.798l-8.469-20.459c-1.583-3.827-5.971-5.645-9.798-4.061c-3.827,1.584-5.646,5.971-4.061,9.798
                L124.413,53.125z'/>
            <Shape d='M153.883,57.185c0.939,0.389,1.911,0.573,2.868,0.573c2.942,0,5.735-1.743,6.932-4.631l8.477-20.455
                c1.585-3.827-0.231-8.214-4.058-9.8c-3.826-1.585-8.213,0.23-9.8,4.058l-8.477,20.455C148.24,51.211,150.057,55.599,153.883,57.185
                z'/>
            <Shape d='M90.046,66.681l20.451,8.478c0.939,0.39,1.912,0.574,2.869,0.574c2.942,0,5.734-1.743,6.931-4.63
                c1.586-3.826-0.229-8.214-4.056-9.8l-20.451-8.479c-3.826-1.588-8.214,0.23-9.8,4.056C84.404,60.707,86.22,65.095,90.046,66.681z'
                />
            <Shape d='M144.054,215.342c-1.585-3.827-5.971-5.646-9.798-4.062c-3.827,1.584-5.646,5.971-4.062,9.798l8.467,20.458
                c1.196,2.889,3.989,4.634,6.933,4.634c0.956,0,1.927-0.184,2.865-0.572c3.827-1.584,5.646-5.971,4.062-9.798L144.054,215.342z'/>
            <Shape d='M114.577,211.28c-3.828-1.586-8.214,0.228-9.801,4.055l-8.48,20.451c-1.587,3.827,0.228,8.214,4.055,9.801
                c0.94,0.39,1.913,0.574,2.87,0.574c2.942,0,5.734-1.742,6.931-4.629l8.48-20.451C120.218,217.254,118.403,212.867,114.577,211.28z'
                />
            <Shape d='M178.412,201.782l-20.457-8.479c-3.827-1.587-8.214,0.23-9.8,4.056c-1.586,3.827,0.23,8.214,4.056,9.8l20.457,8.48
                c0.939,0.39,1.912,0.574,2.869,0.574c2.942,0,5.734-1.743,6.931-4.63C184.054,207.755,182.238,203.368,178.412,201.782z'/>
        </g>
    </IconSVG>
);

export default withTheme(Figure);