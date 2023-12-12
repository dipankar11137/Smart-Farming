import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import generatePDF from 'react-to-pdf';
import logo from '../.././../../Images/Logo/smart farming.png';

const Prescription = ({ treatment }) => {
  const targetRef = useRef();
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
      <div ref={targetRef} className="bg-white w-[500px] h-[620px] text-black">
        <div className="flex justify-between mx-4 pt-3 pb-2">
          <img className="h-20" src={logo} alt="" />
          <div>
            <p className="font-semibold">Dr. Nusrat Zahan</p>
            <p>+8801752468951</p>
            <p>
              {' '}
              Medical degree and
              <br /> Medical Anthropology.
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-6">
          <div className="col-span-2 border-r-[1px] border-slate-300 h-[485px] pl-4 pt-4 text-start">
            {treatment?.prescription?.disease1 && (
              <h1>{treatment?.prescription?.disease1}</h1>
            )}{' '}
            {treatment?.prescription?.disease2 && (
              <h1>{treatment?.prescription?.disease2}</h1>
            )}{' '}
            {treatment?.prescription?.disease3 && (
              <h1>{treatment?.prescription?.disease3}</h1>
            )}{' '}
          </div>
          <div className="col-span-4 pl-2 pt-4 text-start">
            <div className="w-[300px]">
              {treatment?.prescription?.medicine1 && (
                <>
                  <h1 className="font-semibold">
                    1. {treatment?.prescription?.medicine1}
                  </h1>
                  <p className=" overflow-hidden pb-2">
                    {treatment?.prescription?.description1}
                  </p>
                </>
              )}
            </div>
            <div className="w-[300px] mt-4">
              {treatment?.prescription?.medicine2 && (
                <>
                  <h1 className="font-semibold">
                    2. {treatment?.prescription?.medicine2}
                  </h1>
                  <p className=" overflow-hidden pb-2">
                    {treatment?.prescription?.description2}
                  </p>
                </>
              )}
            </div>
            <div className="w-[300px] mt-4">
              {treatment?.prescription?.medicine3 && (
                <>
                  <h1 className="font-semibold">
                    3. {treatment?.prescription?.medicine3}
                  </h1>
                  <p className=" overflow-hidden pb-2">
                    {treatment?.prescription?.description3}
                  </p>
                </>
              )}
            </div>
            <div className="w-[300px] mt-4">
              {treatment?.prescription?.medicine4 && (
                <>
                  <h1 className="font-semibold">
                    4. {treatment?.prescription?.medicine4}
                  </h1>
                  <p className=" overflow-hidden pb-2">
                    {treatment?.prescription?.description4}
                  </p>
                </>
              )}
            </div>
            <div className="w-[300px] mt-4">
              {treatment?.prescription?.medicine5 && (
                <>
                  <h1 className="font-semibold">
                    5. {treatment?.prescription?.medicine5}
                  </h1>
                  <p className=" overflow-hidden pb-2">
                    {treatment?.prescription?.description5}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end -mt-3 mr-1">
          <button
            className="btn btn-primary btn-sm h-10  text-white font-semibold flex "
            onClick={() =>
              generatePDF(targetRef, { filename: 'Prescription.pdf' })
            }
          >
            Download PDF{' '}
            <IoMdDownload className="text-xl mt-1 ml-2 text-blue-300 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
