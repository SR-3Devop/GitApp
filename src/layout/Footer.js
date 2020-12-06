import React from 'react'
import {Container} from 'reactstrap'

const Footer = () => {
    return (
       <Container 
       fluid
       tag="footer"
       className="text-center bg-warning text-black text-uppercase fixed-bottom p-3"
       >
           SR GitSearch WebApp
       </Container>
    )
}

export default Footer
