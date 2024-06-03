import React from 'react';
import Table from 'react-bootstrap/Table';

function DarkExample() {
  return (
    <div>
      <h1>Quarterly Reports</h1>
      <br/>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Announced</th>
            <th>Quarterly Report</th>
            <th>Revenue RM</th>
            <th>QoQ %</th>
            <th>YoY %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20 Mar 2024</td>
            <td>Financial Statement, Q423 <a href="#">[Download]</a></td>
            <td>4,544,572</td>
            <td><span style={{color:"red"}}>↓ </span>13.5%</td>
            <td><span style={{color:"green"}}>↑ </span>18.4%</td>
          </tr>
          <tr>
            <td>30 Oct 2023</td>
            <td>Financial Statement, Q323 <a href="#">[Download]</a></td>
            <td>3,154,239</td>
            <td><span style={{color:"red"}}>↓ </span>118.8%</td>
            <td><span style={{color:"red"}}>↓ </span> 211.6%</td>
          </tr>
          <tr>
            <td>31 Jul 2023</td>
            <td>Financial Statement, Q223 <a href="#">[Download]</a></td>
            <td>3,098,180</td>
            <td><span style={{color:"green"}}>↑ </span>199.1%</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>28 Apr 2023</td>
            <td>Financial Statement, Q123 <a href="#">[Download]</a></td>
            <td>2,957,865</td>
            <td><span style={{color:"red"}}>↓ </span>51.3%</td>
            <td><span style={{color:"green"}}>↑ </span>103.1%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DarkExample;