import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import AddServices from "./Components/Admin/AddServices/AddServices";
import CheckOut from "./Components/User/CheckOut/CheckOut";
import ChackSidebar from "./Components/User/ChackSidebar/ChackSidebar";
import BookList from "./Components/User/BookList/BookList";
import ManageServices from "./Components/Admin/ManageServices/ManageServices";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import Review from "./Components/Home/Review/Review";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import OrderList from "./Components/Admin/OrderList/OrderList";
export const UserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            {/* user  */}
            <Route path="/checkOut/:_id">
              <CheckOut></CheckOut>
            </Route>
            <Route path="/checkOut/booking"></Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/bookingList">
              <BookList></BookList>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            {/* user  */}

            {/* admin */}
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/dashbord/addServices">
              <AddServices></AddServices>
            </Route>

            <Route path="/dashbord/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route path="/dashbord/orderList">
              <OrderList></OrderList>
            </Route>

            <Route path="/dashbord/manageServices">
              <ManageServices></ManageServices>
            </Route>
            {/* admin */}

            <Route path="*">
              <h1>No Match </h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;