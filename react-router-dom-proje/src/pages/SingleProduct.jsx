import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import PRODUCTS from "../data";
const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { pathname } = useLocation();
  console.log(pathname);
  // console.log(productId);
  // ürünleri alma
  const singleProduct = PRODUCTS.find(
    (product) => product.id === parseInt(productId)
  );
  console.log(singleProduct);
  const { id, name, price, image, details } = singleProduct;
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>{name}</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item active">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={"/products"}>Products</Link>
                  </li>
                  <li className="breadcrumb-item text-secondary">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container content">
          <div className="row">
            <div className="col-lg-7">
              <img src={image} alt="" />
            </div>
            <div className="col-lg-5">
              <h2>{name}</h2>
              <p className="price">
                <strong>{price}</strong>
              </p>
              <p>
                {details}
                {details}
                {details}
              </p>
              <br />
              <button
                className="btn btn-primary btn-sm rounded-0"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              &nbsp;
              <button
                className="btn btn-danger btn-sm rounded-0"
                onClick={() => navigate(-1)}
              >
                Navigate to Products
              </button>
              &nbsp;
              <Link
                to={"/products"}
                className="btn btn-primary btn-sm rounded-0"
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;