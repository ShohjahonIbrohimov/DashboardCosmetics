import React, { useState, useEffect } from "react";
import GTable from "../../Reusable/GTable";
import GModal from "../../Reusable/GModal";
import GForm from "../../Reusable/GForm";
import columns from "./columns.json";
import fields from "./formFields.json";
import { Button, Space } from "antd";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
// REDUX
import { get, create, deleteCat, update } from "../../../redux/category/thunks";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const [visible, setvisible] = useState(false);
  const [defaults, setdefaults] = useState(null);
  const [isCategory, setisCategory] = useState(true);
  const [subCategory, setsubCategory] = useState(null);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.category);
  const subcategories = useSelector(
    (state) => state.categoryReducer.subcategory
  );

  console.log(categories);
  const fields2 = [
    {
      name: "cat_id",
      placeHolder: "Select category",
      type: "select",
      options: categories.map((c) => ({ value: c?._id, label: c?.title?.uz })),
    },
    { name: "uz", placeHolder: "Name in uzbek" },
    { name: "ru", placeHolder: "Name in russian" },
  ];

  const handleAddCategory = (data) => {
    dispatch(create({ vals: data, isCategory }));
  };

  const handleUpdateCategory = (data) => {
    dispatch(
      update({
        vals: { title: data },
        id: defaults.data._id,
        index: defaults.index,
        subCategory,
      })
    );
  };

  const handleDeleteCategory = (data) => {
    dispatch(deleteCat({ id: data, subCategory }));
  };

  const handleOpenModalSub = () => {
    setdefaults(null);
    setvisible(true);
    setisCategory(false);
  };

  const handleOpenModal = () => {
    setdefaults(null);
    setvisible(true);
    setisCategory(true);
  };

  const handleSubCategory = (data) => {
    setsubCategory(data);
  };

  useEffect(() => {
    dispatch(get("category"));
    dispatch(get("subcategory"));
  }, []);

  return (
    <div>
      <GModal visible={visible} setvisible={setvisible}>
        {isCategory && (
          <GForm
            defaults={defaults}
            handleAddCategory={handleAddCategory}
            handleUpdateCategory={handleUpdateCategory}
            fields={fields}
          />
        )}
        {!isCategory && (
          <GForm
            defaults={defaults}
            handleAddCategory={handleAddCategory}
            handleUpdateCategory={handleUpdateCategory}
            fields={fields2}
          />
        )}
      </GModal>
      <Space style={{ marginBottom: "1rem" }}>
        <Button
          type='primary'
          icon={<PlusOutlined />}
          onClick={handleOpenModal}
        >
          Add
        </Button>
        <Button
          type='primary'
          icon={<PlusOutlined />}
          onClick={handleOpenModalSub}
        >
          Add SubCategory
        </Button>
        {subCategory && (
          <Button
            type='primary'
            icon={<ArrowLeftOutlined />}
            onClick={() => setsubCategory(null)}
          ></Button>
        )}
      </Space>

      <GTable
        setdefaults={setdefaults}
        setvisible={setvisible}
        handleDeleteCategory={handleDeleteCategory}
        handleSubCategory={handleSubCategory}
        columns={columns}
        subCategory={subCategory}
        data={
          subCategory
            ? subcategories.filter((c) => c.cat_id === subCategory._id)
            : categories
        }
      />
    </div>
  );
};

export default Table;
