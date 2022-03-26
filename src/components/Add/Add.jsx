import React, { useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./Add.css";
import { useNavigate } from "react-router-dom";
import { contextProduct } from "../../context/contextSneakers";

const Add = () => {
  const { postProduct } = useContext(contextProduct);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  function addProduct() {
    let newProduct = {
      product,
      price,
      image,
    };
    if (!product || !price || !image) {
      return alert("Fill in ");
    }
    navigate("/list");
    postProduct(newProduct);
    setImage("");
    setPrice("");
    setProduct("");
  }

  return (

    <div className="photo">
      <img
        className="photo"
        src="https://jooinn.com/images/yellow-sneakers-on-dark-background-with-copyspace.jpg"
        alt=""
      />
      <div className="add-main">
        <div
          className="add-product"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "150px",
          }}
        >
          <input
            style={{ marginTop: "10px" }}
            onChange={(e) => setProduct(e.target.value)}
            value={product}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
            placeholder="Price"
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="Image"
          />
          <Stack direction="row" spacing={2}>
            <Button onClick={() => addProduct()} color="warning">
              Add Product
            </Button>
          </Stack>
        </div>
</div>
   
    </div>
  );
};

export default Add;