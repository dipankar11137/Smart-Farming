import React from 'react';

const SolveDisease = () => {
  return (
    <div>
      <div className="mx-20">
        <table className="table w-full text-white text-center">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-green-900">Picture Of Disease</th>
              <th className="bg-green-900">Description</th>
              <th className="bg-green-900">Payment</th>
              <th className="bg-green-900"> Solve Disease</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-green-800 ">
                <label
                  htmlFor="my_modal_6"
                  className="cursor-pointer flex justify-center"
                >
                  <img
                    className="h-28 rounded-xl "
                    src="https://scx2.b-cdn.net/gfx/news/2021/arriving-in-mainland-m.jpg"
                    alt=""
                  />
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box">
                    <img
                      className=""
                      src="https://scx2.b-cdn.net/gfx/news/2021/arriving-in-mainland-m.jpg"
                      alt=""
                    />
                    <div className="modal-action">
                      <label htmlFor="my_modal_6" className="btn">
                        Close!
                      </label>
                    </div>
                  </div>
                </div>
              </td>
              <td className="bg-green-800   ">
                <p className="h-full  text-white">
                  Lorem ipsum dolor sit amet consectetur,
                </p>
              </td>
              {/* payment */}
              <td className="bg-green-800">
                <h1 className="text-2xl text-green-200 font-semibold">Paid</h1>
              </td>
              <td className="bg-green-800">
                <label
                  htmlFor="my_modal_7"
                  className=" flex justify-center items-center gap-2 bg-secondary px-3 py-2 rounded-lg text-black font-bold uppercase cursor-pointer"
                >
                  <p>Solve Disease</p>
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className=" mt-10 mb-10">{/* <Prescription /> */}</div>
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

export default SolveDisease;
