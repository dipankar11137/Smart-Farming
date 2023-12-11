import React from 'react';
import Payment from './Payment/Payment';
import Prescription from './Prescription/Prescription';

const ShowTreatment = () => {
  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl mt-4 font-bold mb-2 text-white">
        Show Treatment
      </h1>

      <div className="mx-20">
        <table className="table w-full text-white text-center">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-green-900">Picture Of Disease</th>
              <th className="bg-green-900">Description</th>
              <th className="bg-green-900">Payment</th>
              <th className="bg-green-900"> prescription</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-green-800">
                <img
                  className="h-52"
                  src="https://scx2.b-cdn.net/gfx/news/2021/arriving-in-mainland-m.jpg"
                  alt=""
                />
              </td>
              <td className="bg-green-800 w-[500px] h-[180px] ">
                <p className="h-full  text-white">
                  Lorem ipsum dolor sit amet consectetur,
                  <br />
                  Lorem ipsum dolor sit amet. <br />
                  Lorem ipsum dolor sit amet. <br />
                </p>
              </td>
              {/* payment */}
              <td className="bg-green-800">
                <label
                  htmlFor="my_modal_6"
                  className="btn btn-primary btn-sm text-white"
                >
                  payment
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className=" mt-20">
                    <Payment />

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
                <label
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

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className=" mt-10 mb-10">
                    <Prescription />

                    {/* <div className="modal-action">
                      <label htmlFor="my_modal_6" className="btn">
                        Close!
                      </label>
                    </div> */}
                  </div>
                </div>
                {/*  */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTreatment;
