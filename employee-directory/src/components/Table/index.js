import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Container from '../Container/index';
import "./style.css";

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'Name',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Role',
        field: 'Role',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Email',
        field: 'Email',
        sort: 'asc',
        width: 250
      }
    ],
    rows: [
      { 
         Name: 'Manny Larson', 
         Role: 'Developer', 
         Email: 'Manny@email.com' 
      },
      { 
         Name: 'Ali Mead', 
         Role: 'Marketer', 
         Email: 'ali@email.com' 
      },
      { 
         Name: 'Saad Patel', 
         Role: 'Secretary', 
         Email: 'saad@email.com' 
      },
      { 
         Name: 'Asad Avidan', 
         Role: 'Accountant', 
         Email: 'asad@email.com' 
      }
    ]
  };

  return (
   <Container>
    <MDBDataTable
      striped
      bordered
      data={data}
    />
   </Container>
  );
}

export default DatatablePage;