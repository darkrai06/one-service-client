import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import MyserviceSingle from "./MyserviceSingle";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyServices = () => {
  const { user } = useContext(AuthContext);

  const [datas, setDatas] = useState([]);
  const [spinner, setSpinner] = useState(true);

  console.log(user);

  // load data
  const url = `https://one-service-server.onrender.com/showServices?userEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSpinner(false);
        setDatas(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    console.log("delete button hitted", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://one-service-server.onrender.com/showAddService/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );

              // **************** here remove from ui
              const remaining = datas.filter((coffee) => coffee._id !== id);
              setDatas(remaining);
            }
          });
      }
    });
  };

  if (spinner) {
    return (
      <div className="flex  mt-52 justify-center  items-center">
        <span className="loading loading-spinner text-error loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>One Service| My Services</title>
      </Helmet>
      <Navbar></Navbar>

      {datas.length > 0 ? <div className="grid gap-5 my-5 ">
        {datas.map((item) => (
          <MyserviceSingle
            key={item._id}
            item={item}
            handleDelete={handleDelete}
          ></MyserviceSingle>
        ))}
      </div>:
      <div>
        <img src="https://i.imgur.com/LhB8EMc.png" alt="" />
      </div>
      
    }

      <Footer></Footer>
    </div>
  );
};

export default MyServices;
