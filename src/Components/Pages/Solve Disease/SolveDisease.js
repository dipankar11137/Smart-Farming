import React from 'react';
import Solve from './Solve/Solve';

const SolveDisease = ({
  treatment,
  handleClick,
  treatmentOne,
  handleSolveId,
  solveId,
  handleDelete,
}) => {
  // console.log(solveId);
  return (
    <tr>
      <td className="bg-green-800 ">
        <label
          htmlFor="my_modal_6"
          className="cursor-pointer flex justify-center"
        >
          <img
            onClick={() => handleClick(treatment._id)}
            className="h-28 w-36 rounded-xl "
            src={treatment?.img}
            alt=""
          />
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <img className="" src={treatmentOne?.img} alt="" />
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </td>
      <td className="bg-green-800   ">
        <p className="h-full  text-white">{treatment?.description}</p>
      </td>
      {/* payment */}
      <td className="bg-green-800">
        {treatment.payment ? (
          <h1 className="text-2xl text-green-700 font-semibold  bg-white rounded-lg">
            Paid
          </h1>
        ) : (
          <h1 className="text-2xl text-red-700 font-bold bg-white rounded-lg">
            Unpaid
          </h1>
        )}
      </td>
      <td className="bg-green-800">
        {treatment.prescription ? (
          <p className=" bg-white px-3 py-1 rounded-lg text-green-700 font-bold uppercase text-xl">
            Solved
          </p>
        ) : (
          <label
            htmlFor="my_modal_7"
            className=" flex justify-center items-center gap-2 bg-secondary px-3 py-2 rounded-lg text-black font-bold uppercase cursor-pointer "
          >
            <p onClick={() => handleSolveId(treatment._id)}>Solve Disease</p>
          </label>
        )}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className=" mt-10 mb-10">
            {' '}
            <Solve id={solveId} />{' '}
          </div>
        </div>
        {/*  */}
      </td>
      <td className="bg-green-800">
        <button
          onClick={() => handleDelete(treatment._id)}
          className="btn btn-xs btn-primary"
        >
          remove
        </button>
      </td>
    </tr>
  );
};

export default SolveDisease;
