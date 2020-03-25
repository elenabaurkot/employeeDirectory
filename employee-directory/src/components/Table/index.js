import React, { Component } from 'react';
import Container from "../Container";
// import TableFilter from 'react-table-filter';
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
             <td>{id}</td>
             <td>{name}</td>
             <td>{role}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

renderTableHeader() {
    let header = Object.keys(this.state.employees[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }


render() {
    return (
       <div>
        <Container>
          <table id='employees'>
             <tbody>
                {this.renderTableHeader()}
                {this.renderTableData()}
             </tbody>
          </table>
        </Container>
       </div>
    )
 }
}


 export default Table;
