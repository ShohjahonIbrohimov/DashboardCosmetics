import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "antd";

const Sample = () => {
  const [orders, setorders] = useState([]);

  const handleFinishOrder = (data) => {
    axios({
      url: `/api/orders/${data._id}`,
      method: "PATCH",
      data: {
        isFinish: "true",
      },
    }).then((res) => console.log(""));

    console.log(data);
  };

  const columns = [
    {
      title: "chat_id",
      dataIndex: "chat_id",
      key: "chat_id",
    },
    {
      title: "isFinish",
      dataIndex: "isFinish",
      key: "isFinish",
      render: (data, row) => <span>{`${row.isFinish}`}</span>,
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      width: "10%",
      render: (data, row) => (
        <Button onClick={() => handleFinishOrder(row)}>Finish</Button>
      ),
    },
  ];

  const getOrders = () => {
    axios({
      url: "/api/orders/getAll",
      method: "GET",
    }).then((res) => setorders(res.data.data));

    return [];
  };

  useEffect(() => {
    setorders(getOrders());
  }, []);

  return (
    <div>
      {console.log(orders)}
      <Table columns={columns} dataSource={orders} />
    </div>
  );
};

export default Sample;
