import React, { useState, useEffect } from "react";
import { Table, Checkbox, Button, Input } from "antd";

const TableRenderer = () => {
  // for data fetching
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  // for selecting columns
  const [selectedColumns, setSelectedColumns] = useState([]);

  // for search
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // fetch('https://jsonplaceholder.typicode.com/users')
  // set data and columns from the above fetched data
  // then select the columns using checkboxes and click on submit button to diplay the data in the table

  // Implement your own functions according to the usecase

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      setData(data);

      if (data.length > 0) {
        setColumns(Object.keys(data[0]));
      }
      console.log(columns);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleColumnCheckboxChange = (column, checked) => {
    if (checked) {
      setSelectedColumns([...selectedColumns, column]);
    } else {
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
    }
  };

  return (
    <div>
      {/* Implement Checkboxes */}
      {columns.map((colName, index) => {
        return (
          <Checkbox
            key={index}
            onChange={(e) =>
              handleColumnCheckboxChange(colName, e.target.checked)
            }
          >
            {colName}
          </Checkbox>
        );
      })}

      {/* Implement submit button - only after clicking this button and selecting the above checkboxes, the data must be populated to the table */}

      <Button
        onClick={() => {
          // Filter data based on selected columns
          setFilteredData(
            data.map((item) =>
              selectedColumns.reduce((acc, key) => {
                acc[key] = item[key];
                return acc;
              }, {})
            )
          );
        }}
      >
        Submit
      </Button>

      {/* Implement Search */}

      {/* <Input.Search
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSearch={(value) => {
          return 
        }}
        style={{ width: 200, marginLeft: 10 }}
      /> */}

      <Table
        dataSource={filteredData}
        key={data.id}
        columns={selectedColumns.map((col) => ({ title: col, dataIndex: col }))}
      />
    </div>
  );
};

export default TableRenderer;
