import { createAsyncThunk } from "@reduxjs/toolkit";
import baseurl from "../../utils/baseurl";
import axios from "axios";

// CREATE
const createAsync = async (values) => {
  let url = values.isCategory ? "category" : "subcategory";
  let data = values.isCategory
    ? { title: values.vals }
    : {
        title: { uz: values.vals.uz, ru: values.vals.ru },
        cat_id: values.vals.cat_id,
      };
  try {
    const res = await axios({
      url: `${baseurl}${url}`,
      method: "POST",
      data,
    });
    return { res, type: url };
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
  let url = data.subCategory ? "subcategory" : "category";
  try {
    const res = await axios({
      url: `${baseurl}${url}/${data.id}`,
      method: "DELETE",
    });
    return { data, type: url };
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const deleteCat = createAsyncThunk("category/delete", deleteAsync);

// UPDATE
const updateAsync = async (data) => {
  let url = data.subCategory ? "subcategory" : "category";
  try {
    const res = await axios({
      url: `${baseurl}${url}/${data.id}`,
      method: "PATCH",
      data: data.vals,
    });
    return { res, index: data.index, type: url };
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const update = createAsyncThunk("category/update", updateAsync);
