import React from "react";
import { Image } from "antd";
import img from "../../assets/defaultImage.png";
import axios from "axios";
import styles from "../../styles/Reusable/ImageUpload.module.css";

const ImageUpload = ({ imageUrl, setimageUrl }) => {
  const handleChange = (e) => {
    var formData = new FormData();
    formData.append("image", e.target.files[0]);

    axios({
      url: "http://174.138.10.57/api/users/uploadImage",
      method: "POST",
      data: formData,
    }).then((res) => setimageUrl(res.data.path));
  };

  return (
    <div className={styles.upload_img}>
      <Image
        width='100%'
        src={!imageUrl ? img : `http://174.138.10.57/${imageUrl}`}
      />
      <label className={styles.upload_btn_wrapper}>
        Rasm yuklash
        <input
          type='file'
          name='file'
          id='file'
          class='inputfile'
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
