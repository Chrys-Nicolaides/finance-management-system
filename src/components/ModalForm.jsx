import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Card from "./Card";

const ModalForm = ({ setShowModal }) => {
  return (
    <div
      className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={() => setShowModal(false)}
    >
      <Card fullWidth={false} additionalClasses={" px-10"}>
        <div className="flex justify-between pb-6">
          <h3>Add new transaction</h3>
          <button
            className="button-primary self-end"
            onClick={() => setShowModal(false)}
          >
            <AiOutlineClose />
          </button>
        </div>
        <h5 className="pb-6">Transaction description</h5>
        <h5 className="pb-6">Amount</h5>
        <h5 className="pb-6">Recurring?</h5>
        <h5 className="pb-6">Recurring type</h5>
        <h5 className="pb-6">Category</h5>
        <div className="flex justify-center">
          <button className="button-secondary mx-4">Cancel</button>
          <button className="button-primary mx-4">Save transaction</button>
        </div>
      </Card>
    </div>
  );
};

export default ModalForm;
