import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import MyScheduleSingle from "./MyScheduleSingle";
import Footer from "../Shared/Footer";
import MyPendingWork from "./MyPendingWork";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MySchedule = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [pending, setPending] = useState([]);
  console.log(user);

  const url = `https://one-service-server.onrender.com/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  const url2 = `https://one-service-server.onrender.com/pendingBooking?serviceProviderEmail=${user?.email}`;
  useEffect(() => {
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        setPending(data);
      });
  }, [url2]);

  const handleChange = (id, selectedValue) => {
    console.log("changing", id, selectedValue);
    fetch(`https://one-service-server.onrender.com/pendingBooking/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: selectedValue }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Pending works status updated");
          const remaining = pending.filter((pending) => pending._id !== id);
          const updated = pending.find((pending) => pending._id == id);
          updated.status = selectedValue;
          const newPending = [updated, ...remaining];
          setPending(newPending);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>One Service | My Schedule</title>
      </Helmet>
      <Navbar></Navbar>
      <h3>My schedule : {bookings.length} </h3>
      <h1 className="text-3xl font-bold mt-10 ">My Bookings </h1>
      {bookings.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-5 my-10">
          {bookings.map((item) => (
            <MyScheduleSingle key={item._id} item={item}></MyScheduleSingle>
          ))}
        </div>
      ) : (
        <div className="my-10">
          <img
            className="lg:h-[500px] lg:w-full "
            src="https://i.imgur.com/KHIKAQK.jpg"
            alt=""
          />
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MySchedule;
