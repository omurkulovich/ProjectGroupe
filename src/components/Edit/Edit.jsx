import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import { Backdrop, CircularProgress } from "@mui/material";

import "./Edit.css";
import { contextProduct } from "../../context/contextSneakers";

const Edit = () => {
  const { getEditProduct, oneProduct, upDateProduct } =
    useContext(contextProduct);
  // console.log(oneProduct);

  const navigate = useNavigate();
  const params = useParams();

  const [edit, setEdit] = useState(null);
  // console.log(edit);

  useEffect(() => {
    getEditProduct(params.id);
  }, []);

  useEffect(() => {
    setEdit(oneProduct);
  }, [oneProduct]);

  function handleValue(e) {
    let edited = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(edited);
  }

  function save() {
    upDateProduct(params.id, edit);
    navigate("/list");
  }

  const [open, setOpen] = useState(true);
  console.log(edit);

  return edit ? (
    <div className="edit">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          height: "auto",
          boxShadow: "1px 1px 5px gray",
          marginBottom: "220px",
          opacity: "3",
        }}
      >
        <input
          className="input"
          type="text"
          name="product"
          value={edit.product}
          placeholder="Title"
          onChange={handleValue}
        />
        <input
          className="input"
          type="text"
          name="price"
          value={edit.price}
          placeholder="Price"
          onChange={handleValue}
        />
        <input
          className="input"
          type="text"
          name="image"
          value={edit.image}
          placeholder="Image"
          onChange={handleValue}
        />
        <Button
          style={{ width: "100px", left: "35%", marginBottom: "10px" }}
          className="button"
          variant="contained"
          onClick={save}
        >
          Save
        </Button>
      </div>
    </div>
  ) : (
    <Backdrop open={open} onClick={() => setOpen(false)}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Edit;
