import React from "react";
import { useFormik } from "formik";

interface BidFormProps {
  tenderId?: number;
}

const BidForm: React.FC<BidFormProps> = ({ tenderId }) => {
  console.log(tenderId);

  const formik = useFormik({
    initialValues: {
      amount: "",
      specialServices: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.amount}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="specialServices">Special Services</label>
        <input
          id="specialServices"
          name="specialServices"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.specialServices}
          className="mt-1 block w-full"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default BidForm;
