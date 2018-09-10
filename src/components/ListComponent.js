import React from "react";

const ListComponent = props => {
  const dataPostSearch = (data, query) => {
    if (!query || query.length === 0) {
      return data;
    }
    return data.filter(
      row =>
        row.campaignName.toLowerCase().includes(query.toLowerCase()) ||
        row.type.toLowerCase().includes(query.toLowerCase())
    );
  };

  const pageStartIndex = props.pageSize * (props.currentPage - 1);
  const pageEndIndex = Math.min(
    pageStartIndex + props.pageSize,
    dataPostSearch(props.data, props.searchQuery).length
  );
  const availableData = dataPostSearch(props.data, props.searchQuery).slice(
    pageStartIndex,
    pageEndIndex
  );

  var list = availableData.map((d, index) => (
    <tr key={index}>
      <td>{index + 1 + props.pageSize * (props.currentPage - 1)}</td>
      <td>{d.campaignName} </td>
      <td> {d.type} </td>
      <td> {d.lastSaved} </td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Campaign Name</th>
          <th>Type</th>
          <th>Last Saved</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

export default ListComponent;
