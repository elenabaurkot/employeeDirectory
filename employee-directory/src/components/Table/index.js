import React, { Component } from 'react';
import Container from "../Container";
import "./style.css";

class Table extends React.Component {
   constructor(props) {
      super(props) 
      this.state = {
         employees: [
            { id: 1, name: 'Manny Larson', role: 'Developer', email: 'Manny@email.com' },
            { id: 2, name: 'Ali Mead', role: 'Marketer', email: 'ali@email.com' },
            { id: 3, name: 'Saad Patel', role: 'Secretary', email: 'saad@email.com' },
            { id: 4, name: 'Asad Avidan', role: 'Accountant', email: 'asad@email.com' }
         ]
      }
   }


renderTableData() {
    return this.state.employees.map((employee, index) => {
       const { id, name, role, email } = employee //destructuring
       return (
          <tr key={id}>
             <td>{name}</td>
             <td>{role}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
        <Container>
          <table id='employees'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
        </Container>
       </div>
    )
 }
}

 export default Table;
