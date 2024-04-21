import React from 'react';

const Table = ({ data }) => {
  const handleViewClick = (item) => {
    // Replace this with your logic to display additional information
    alert(`Viewing details for ${item.name}: ${item.description}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
              <button onClick={() => handleViewClick(item)}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
