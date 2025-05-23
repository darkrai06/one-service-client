const Faq = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">FAQ Section</h1>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Q: What types of services do you provide?
        </div>
        <div className="collapse-content">
          <p>
            A: We offer a wide range of services including packing, loading,
            transportation, unloading, and storage solutions. Our aim is to provide a
            complete and hassle-free experience for all your service needs.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Q: How can I request a service quote?
        </div>
        <div className="collapse-content">
          <p>
            A: You can request a quote by contacting us through our website or by phone.
            Simply provide the details of your requirements, and we’ll give you a
            personalized estimate based on your needs.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Q: Do you provide packing assistance?
        </div>
        <div className="collapse-content">
          <p>
            A: Yes, we offer professional packing services. Our trained team uses
            high-quality materials and proven techniques to ensure your belongings are
            safe and secure throughout the move.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Q: Is it possible to track my service in real time?
        </div>
        <div className="collapse-content">
          <p>
            A: Absolutely. We provide real-time tracking options so you can monitor the
            progress of your service. You’ll receive updates on the location and status
            of your items for complete peace of mind.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Q: What steps do you take to ensure item safety?
        </div>
        <div className="collapse-content">
          <p>
            A: We prioritize the safety of your items by using secure packing methods,
            careful handling practices, and reliable transportation. Our team is trained
            to handle all items with care, minimizing the risk of damage during transit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
