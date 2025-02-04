import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSordOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSordOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSordOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSordOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
