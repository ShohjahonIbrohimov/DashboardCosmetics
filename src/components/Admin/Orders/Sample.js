import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, message, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const success = () => {
  message.success("Success");
};

const error = () => {
  message.error("Error");
};

const Sample = ({ searchInput }) => {
  const [orders, setorders] = useState([]);

  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setsearchText(selectedKeys[0]);
              setsearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setsearchText("");
  };

  const handleFinishOrder = (data) => {
    axios({
      url: `http://143.244.173.104/api/orders/${data._id}`,
      method: "PATCH",
      data: {
        isFinish: "true",
      },
    })
      .then((res) => {
        success();
        getOrders();
      })
      .catch((err) => error());

    console.log(data);
  };

  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
      ...getColumnSearchProps("number"),
    },
    {
      title: "isFinish",
      dataIndex: "isFinish",
      key: "isFinish",
      ...getColumnSearchProps("isFinish"),
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
      url: "http://143.244.173.104/api/orders/getAll",
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
