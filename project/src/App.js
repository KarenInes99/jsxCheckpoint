import React from 'react';
import Card from 'react-bootstrap/Card';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import product from './product';

const prenom = "Karen";

function App() {
  const monimage = prenom ? <Image /> : null;
  return (
    <div className="App">
      <Card style={{ width: '25%',
      marginTop: '20px',
      marginLeft:'20px',
       backgroundColor: '#2980b9',
       borderRadius: '10px',
       padding: '10px'
       }}>
        <Image/>
        <Card.Body style={{ textAlign: 'center' }} >
          <Name name={product.name} 
          />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      {/* <p>Bonjour {prenom ? prenom : 'là'} </p> */}
    </div>
  );
}

export default App;
