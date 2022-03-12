import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
export default class App extends Component {

  constructor(){
    super()
    this.state = {
      records : []
    }
  }
  getData(){
      axios.get('http://localhost:3000/fetch').then((result) => {
        console.log(result);
        this.setState({
          records : result.data,
        })
    })
  }
  render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            
          </tr>
          </thead>
          <tbody>
          {this.state.records.map((element) => (
            <tr><td>{element.id}</td>
            <td>{element.type}</td>
            <td>{element.tdate}</td>
            <td>{element.amt}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <button onClick = {this.getData()}>Display Data</button>   
      </div>
    )
  }
}


