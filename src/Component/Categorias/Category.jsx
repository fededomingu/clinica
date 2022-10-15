import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Category = () => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Link to={"/odontologos"}>
        <Card.Title>
          ODONTOLOGOS
        </Card.Title>
        </Link>
      </Card.Body>
    </Card>
    
  )
}

export default Category