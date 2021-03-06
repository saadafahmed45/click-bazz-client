import React, { useContext, useEffect, useState } from "react";
import ChackSidebar from "../ChackSidebar/ChackSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "./BookList.css";
import { UserContext } from "../../../App";
<i class="fas fa-camera"></i>;
const BookList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [orders, setOrders] = useState();

  useEffect(() => {
    fetch("https://secure-reaches-57604.herokuapp.com/orders?email="+loggedInUser.email ,{
      method:"GET",
      Headers: { 
        "Content-Type": "application/json",
        authorization :`Bearer ${sessionStorage.getItem('token')}`
    },


    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <ChackSidebar></ChackSidebar>
        </div>

        <div className="col-md-10 booking-header">
          <h3 style={{ textAlign: "left", padding: "20px" }}>Booking List</h3>
          <hr></hr>
          <div className="row">
            {orders?.map((order) => (
              <div class="col-md-4">
                <div class="card mb-3 crd-left ">
                  <FontAwesomeIcon icon={faCamera} />
                  <div class="card-body ">
                    <h5 class="card-title">{order.service}</h5>
                    <h5 class="card-text brand-color">${order.price}</h5>
                 
                    <p class="card-text"><span><b>Order Time:</b></span><br/>{order.orderTime}</p>
                    <a href="#" class="btn btn-sm btn-danger">
                      Pending{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="alert alert-danger" role="alert">
            <h5>Total Orders: {orders?.length}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
