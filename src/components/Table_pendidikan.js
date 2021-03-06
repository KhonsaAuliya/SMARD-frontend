import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
var bgColors = { "Default": "#81b71a",
                 "Blue": "#00B1E1",
                 "White": "#FFFF"

};

class Table_pendidikan extends Component {
  render() {
    return (
      <div style={{backgroundColor: bgColors.White}}>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' width="5">
            No
          </TableHeaderColumn>
          <TableHeaderColumn dataField='group' width="30">
            Kelompok
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total' width="30">
            Jumlah
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table_pendidikan;