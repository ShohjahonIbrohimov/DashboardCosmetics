import React from "react";
import GTable from "../../Reusable/GTable";
import columns from "./columns.json";
import data from "./data.json";

const Table = () => {
  return (
    <div>
      <GTable columns={columns} data={data} />
    </div>
  );
};

export default Table;
