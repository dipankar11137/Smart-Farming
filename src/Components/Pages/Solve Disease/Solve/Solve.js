import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Solve = () => {
  return (
    <div>
      <div className="modal-action fixed -top-[14px] right-[409px]">
        <label
          htmlFor="my_modal_7"
          className="bg-white p-2 rounded-full cursor-pointer"
        >
          <FaTimes className="text-primary text-3xl" />
        </label>
      </div>
      <h1>Dado</h1>
    </div>
  );
};

export default Solve;
