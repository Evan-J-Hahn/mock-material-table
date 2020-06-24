import React from 'react'
import MaterialTable from "material-table"
import './App.css'

const App = () => {
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null)

  const [columns] = useState([
    { title: 'First Name', field: 'firstName' },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Age', field: 'age', type: 'numeric' },
    { title: 'Location', field: 'location' }
  ]);

  const [data, setData] = useState([
    { firstName: 'Roger', lastName: 'Clemente', age: 29, location: 'Corvallis' },
    { firstName: 'Analisa', lastName: 'Cordova', age: 27, location: 'Los Angeles' },
    { firstName: 'Roger', lastName: 'Clemente', age: 29, location: 'Corvallis' },
    { firstName: 'Analisa', lastName: 'Cordova', age: 27, location: 'Los Angeles' },
    { firstName: 'Roger', lastName: 'Clemente', age: 29, location: 'Corvallis' },
    { firstName: 'Analisa', lastName: 'Cordova', age: 27, location: 'Los Angeles' },
    { firstName: 'Roger', lastName: 'Clemente', age: 29, location: 'Corvallis' },
    { firstName: 'Analisa', lastName: 'Cordova', age: 27, location: 'Los Angeles' },
    { firstName: 'Roger', lastName: 'Clemente', age: 29, location: 'Corvallis' },
    { firstName: 'Analisa', lastName: 'Cordova', age: 27, location: 'Los Angeles' },
    { firstName: 'Roger', lastName: 'Clemente', age: 29, location: 'Corvallis' },
    { firstName: 'Analisa', lastName: 'Cordova', age: 27, location: 'Los Angeles' },
    { firstName: 'Roger', lastName: 'Clemente', age: 29, location: 'Corvallis' },
    { firstName: 'Analisa', lastName: 'Cordova', age: 27, location: 'Los Angeles' },
    { firstName: 'Roger', lastName: 'Clemente', age: 29, location: 'Corvallis' },
    { firstName: 'Analisa', lastName: 'Cordova', age: 27, location: 'Los Angeles' }
  ]);

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        title="Users"
        columns={columns}
        data={data}
        onRowClick={((event, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        options={{
          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
          })
        }}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
    </div>
  )
}

export default App