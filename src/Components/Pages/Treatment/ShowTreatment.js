import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Payment from './Payment/Payment';
import Prescription from './Prescription/Prescription';

const ShowTreatment = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;
  const [treatments, setTreatments] = useState([]);
  const [treatmentId, setTreatmentId] = useState({});
  const [cId, setCid] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/treatment/${email}`)
      .then(res => res.json())
      .then(data => setTreatments(data));
  }, [treatments, email]);

  const handlePrescription = async id => {
    await fetch(`http://localhost:5000/treatmentId/${id}`)
      .then(res => res.json())
      .then(data => setTreatmentId(data));
  };

  return (
    <div className="pb-[800px]">
      <h1 className="text-center text-5xl mt-4 font-bold mb-2 text-white">
        Show Treatment
      </h1>

      <div className="mx-20">
        <table className="table w-full text-white text-center">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-green-900">Picture Of Disease </th>
              <th className="bg-green-900">Description</th>
              <th className="bg-green-900">Payment</th>
              <th className="bg-green-900"> prescription</th>
            </tr>
          </thead>
          <tbody>
            {treatments.map(treatment => (
              <tr>
                <td className="bg-green-800">
                  <img className="h-52 w-64" src={treatment?.img} alt="" />
                </td>
                <td className="bg-green-800 w-[500px] h-[180px] ">
                  <p className="h-full  text-white">{treatment?.description}</p>
                </td>
                {/* payment */}
                <td className="bg-green-800">
                  {treatment.payment ? (
                    <p className="text-2xl text-green-700 font-bold bg-white rounded-lg">
                      Done
                    </p>
                  ) : (
                    <label
                      onClick={() => setCid(treatment?._id)}
                      htmlFor="my_modal_6"
                      className="btn btn-primary btn-sm text-white"
                    >
                      payment
                    </label>
                  )}

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className=" mt-20">
                      <Payment id={cId} />

                      {/* <div className="modal-action">
                      <label htmlFor="my_modal_6" className="btn">
                        Close!
                      </label>
                    </div> */}
                    </div>
                  </div>
                  {/*  */}
                </td>
                <td className="bg-green-800">
                  {treatment.payment ? (
                    <>
                      {treatment.prescription ? (
                        <label
                          onClick={() => handlePrescription(treatment?._id)}
                          htmlFor="my_modal_7"
                          className=" flex justify-center items-center gap-2 bg-secondary px-3 rounded-lg text-black font-bold uppercase cursor-pointer"
                        >
                          <img
                            className="h-8"
                            src="https://media0.giphy.com/media/hTxQ11hK9e5HYoBwJI/giphy.gif"
                            alt=""
                          />{' '}
                          <p>prescription</p>
                        </label>
                      ) : (
                        <div className="flex justify-center items-center gap-2 bg-green-400 px-3 rounded-lg text-black font-bold uppercase cursor-pointer">
                          <h1 className=" flex justify-center items-center  px-3 rounded-lg text-black font-bold py-2 uppercase">
                            Processing
                          </h1>{' '}
                          <img
                            className="h-8"
                            src="https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif"
                            alt=""
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="font-extrabold text-2xl text-red-700 bg-secondary rounded-lg cursor-not-allowed">
                      Pay First
                    </p>
                  )}

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_7"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className=" mt-10 mb-10">
                      <Prescription treatment={treatmentId} />
                    </div>
                  </div>
                  {/*  */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTreatment;
