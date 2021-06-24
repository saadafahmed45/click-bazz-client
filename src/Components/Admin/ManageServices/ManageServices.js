import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./ManageServices.css";
const ManageServices = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  function deleteProduct(id) {
    console.log(id);
    fetch(`http://localhost:7000/delete/${id}`, {
      method: "DELETE",
    })
      .then((result) =>  {
        if(result){
          alert('Services Deleted successfully');
        }
        
            }

      )}

  return (
    <div className="manage-section">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-8 offset-1 mt-4">
          <div className="table-box ">
            <h3>Manage Services </h3>

            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th> 
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                services.map((service) => (
                  <tr>
                    <td>{service._id}</td>
                    <td>{service.name}</td>
                    <td> ${service.price} </td>
                    <td>
                      <button
                        onClick={() => deleteProduct(`${service._id}`)}
                        className="btn btn-danger px-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;