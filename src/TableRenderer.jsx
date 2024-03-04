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

  const getData = async (req, res) => {
    try {
      console.log("here");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* Implement Checkboxes */}
      {/* Implement submit button - only after clicking this button and selecting the above checkboxes, the data must be populated to the table */}
      {/* Implement Search */}

      <Table dataSource={filteredData} columns={selectedColumns} />
    </div>
  );
};

export default TableRenderer;
