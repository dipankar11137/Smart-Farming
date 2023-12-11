import React from 'react';
import Payment from './Payment/Payment';

const ShowTreatment = () => {
  return (
    <div className="h-screen">
      <h1>Show Treatment</h1>

      <div className="mx-20">
        <table className="table w-full text-white">
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
              <td className="bg-green-800">
                <button className="btn btn-primary btn-sm text-white">
                  payment
                </button>
                {/*  */}
                <label htmlFor="my_modal_6" className="btn">
                  open modal
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
                <button className=" flex justify-center items-center gap-2 bg-secondary px-3 rounded-lg text-black font-bold uppercase">
                  {' '}
                  <img
                    className="h-8"
                    src="https://media0.giphy.com/media/hTxQ11hK9e5HYoBwJI/giphy.gif"
                    alt=""
                  />{' '}
                  <p>prescription</p>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTreatment;
