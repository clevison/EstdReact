import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName='Luiz'>
        <Member name='Clevison' /> 
        <Member name='Clevison2' /> 
        <Member name='Clevison3' /> 
    </Family>
    , document.getElementById('app'))