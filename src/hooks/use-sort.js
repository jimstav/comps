import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSordOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSordOrder("asc");
      setSortBy(label);
      return;
    }

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

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
}

export default useSort;
