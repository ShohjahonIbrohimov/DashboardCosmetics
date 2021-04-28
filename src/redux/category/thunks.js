import { createAsyncThunk } from "@reduxjs/toolkit";
import baseurl from "../../utils/baseurl";
import axios from "axios";

const getData = ({ type, vals }) => {
  let data;
  switch (type) {
    case "category":
      data = { title: vals };
      break;
    case "subcategory":
      data = {
        title: { uz: vals.uz, ru: vals.ru },
        cat_id: vals.cat_id,
      };
      break;
    default:
      data = {
        title: { uz: vals.uz, ru: vals.ru },
        sub_cat_id: vals.sub_cat_id,
        price: parseInt(vals.price),
        desc: {
          uz: vals.descUz,
          ru: vals.descRu,
        },
        img: vals.img,
      };
      break;
  }
  return data;
};

// CREATE
const createAsync = async (values) => {
  let data,
    vals = values.vals;

  try {
    const res = await axios({
      url: `${baseurl}${values.type}`,
      method: "POST",
      data: getData({ type: values.type, vals }),
    });
    return { res, type: values.type };
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const create = createAsyncThunk("category/create", createAsync);

// GET
const getAsync = async (type) => {
  try {
    const res = await axios({
      url: `${baseurl}${type}/getAll`,
      method: "GET",
    });
    return { res, type };
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const get = createAsyncThunk("category/get", getAsync);

// DELETE
const deleteAsync = async (data) => {
  try {
    const res = await axios({
      url: `${baseurl}${data.type}/${data.id}`,
      method: "DELETE",
    });
    return { data, type: data.type };
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const deleteCat = createAsyncThunk("category/delete", deleteAsync);

// UPDATE
const updateAsync = async (data) => {
  let vals = data.vals;
  console.log(getData({ type: data.type, vals }));
  try {
    const res = await axios({
      url: `${baseurl}${data.type}/${data.id}`,
      method: "PATCH",
      data: getData({ type: data.type, vals }),
    });
    return { res, index: data.index, type: data.type };
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const update = createAsyncThunk("category/update", updateAsync);
