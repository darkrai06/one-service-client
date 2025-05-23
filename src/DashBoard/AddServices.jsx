import { useContext } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const serviceProviderName = user?.displayName;
  const userEmail = user?.email;
  const serviceProviderImage = user?.photoURL;
  console.log(serviceProviderName, userEmail, serviceProviderImage);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const serviceName = form.serviceName.value;
    const serviceImage = form.servicePhoto.value;
    const servicePrice = form.price.value;
    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.description.value;
    const product = {
      serviceImage,
      serviceName,
      serviceArea,
      servicePrice,
      serviceProviderName,
      userEmail,
      serviceProviderImage,
      serviceDescription,
    };
    console.log(product);

    // axios
    axios.post("https://one-service-server.onrender.com/addservices", product).then((res) => {
      console.log(res);
      if (res.data?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Successfully added",
          text: "Products Successfully added to backend",
        });
      }
    });

   
  };

  return (
    <div>
      <Helmet>
        <title>One Service | Add Service</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200   ">
        <div className="shadow-2xl bg-base-300 w-8/12 rounded-xl mx-auto">
          <form onSubmit={handleAddService} className="card-body">
            <h2 className="text-black font-bold text-3xl text-center pb-4">
              Add Service
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Photo URL </span>
              </label>
              <input
                type="text"
                name="servicePhoto"
                placeholder="Service Photo "
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name </span>
              </label>
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name "
                className="input input-bordered input-info  "
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">User Photo </span>
              </label>

              <img className="md:w-32 w-20 " src={user?.photoURL} alt="" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="username"
                defaultValue={user?.displayName}
                placeholder="username "
                disabled
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="username"
                defaultValue={user?.email}
                disabled
                placeholder="username "
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price here"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <input
                type="text"
                name="serviceArea"
                placeholder="Service Area"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Description</span>
              </label>
              <textarea
                className="textarea textarea-info"
                name="description"
                placeholder="Description"
              ></textarea>
            </div>

            {/* ************************************************ */}
            <div className="form-control mt-6">
              <button className="btn btn-info">Add Service</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddServices;
