import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Badges from './components/Badges.jsx'

function App (){
    return (
        <main className="container">
            
            <Badges shape="pill" color="red"> HELLO</Badges>
            <Badges shape="pill" color="yellow"> GROW</Badges>
            <Badges shape="pill" color="green"> Badge</Badges>
            <Badges shape="pill" color="blue"> Badge</Badges>
            <Badges shape="rectangle" color="red"> Badge</Badges>
            <Badges shape="rectangle" color="yellow"> Badge</Badges>
            <Badges shape="rectangle" color="green"> Badge</Badges>
            <Badges shape="sqaure" color="red"> Badge</Badges>
            <Badges shape="sqaure" color="yellow"> Badge</Badges>
            <Badges shape="sqaure" color="green"> Badge</Badges>
            <Badges shape="pill" color="red"> Hamza</Badges>
        </main>
    )
}

const root= createRoot(document.getElementById('root'))

root.render(<App/>);
