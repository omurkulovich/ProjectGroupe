import React, { useContext, useEffect, useState } from "react";
import "./AddList.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// serach import
import { Link, useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/contextSneakers";

const AddList = () => {
  // pagination  start
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProduct();
  }, []);

  // pogination end

  const { products, getProduct, deleteProduct, pages } =
    useContext(contextProduct);
  useEffect(() => {
    getProduct();
  }, []);

  // search
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      _limit: 3,
      _page: page,
    });
  }, [searchValue, page]);

  useEffect(() => {
    getProduct();
  }, [searchParams]);

  console.log(searchValue);
  // search end
  return (
    <div className="form">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="search"
        className="search"
      />

      <div className="mainList">
        <div className="add-list">
          {products.map((item) => (
            <Card
              className="card"
              style={{ margin: "30px" }}
              key={item.id}
              sx={{ maxWidth: 200 }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
                style={{ width: "200px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => deleteProduct(item.id)} size="small">
                  Delete
                </Button>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/edit/${item.id}`}
                >
                  <Button size="small">Edit</Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <button
          disabled={page == 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          prev
        </button>
        <span>{page}</span>
        <button
          disabled={page == pages - 1 ? true : false}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default AddList;
