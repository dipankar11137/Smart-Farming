import React from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Solve = ({ id }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const updateData = { data };
    const updatePrescription = { prescription: data };
    console.log(updatePrescription);
    fetch(`http://localhost:5000/treatmentPrescription/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatePrescription),
    })
      .then(res => res.json())
      .then(data => {
        toast.success(' Successfully  Update');
        // navigation('/showTreatment');
      });
  };
  return (
    <div>
      <div className="modal-action fixed -top-[20px] right-[409px]">
        <label
          htmlFor="my_modal_7"
          className="bg-white p-2 rounded-full cursor-pointer"
        >
          <FaTimes className="text-primary text-3xl" />
        </label>
      </div>
      <div className="bg-white w-[500px] h-[650px] text-black">
        <form className="  gap-4 " onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* Disease Name */}

            <div>
              <h1 className="text-xl mb-2 pt-3 font-semibold">
                Write Disease Name
              </h1>
              <input
                type="text"
                placeholder="Disease Name"
                className="input input-bordered bg-white w-[150px] max-w-xs h-8 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('disease1')}
              />
              <input
                type="text"
                placeholder="Disease Name"
                className="input input-bordered bg-white w-[150px] ml-2 max-w-xs h-8 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('disease2')}
              />
              <input
                type="text"
                placeholder="Disease Name"
                className="input input-bordered bg-white w-[150px] ml-2 max-w-xs h-8 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('disease3')}
              />
            </div>
            <hr className="mt-2" />
            <h1 className="mt-1 mb-2 text-2xl font-semibold">
              Medicine Name And Usage
            </h1>
            {/* Medicine 1 */}
            <div>
              <input
                type="text"
                placeholder="Medicine 1"
                className="input input-bordered bg-white w-full max-w-xs h-8 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('medicine1', {
                  required: {
                    value: true,
                    message: 'Medicine 1 is Required',
                  },
                })}
              />
              <label className="label">
                {errors.medicine1?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.medicine1?.message}
                  </span>
                )}
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered bg-white w-full max-w-xs h-8 -mt-2 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('description1', {
                  required: {
                    value: true,
                    message: 'Description 1 is Required',
                  },
                })}
              />
              <label className="label">
                {errors.description1?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.description1?.message}
                  </span>
                )}
              </label>
            </div>
            {/* Medicine 2 */}
            <div>
              <input
                type="text"
                placeholder="Medicine 2"
                className="input input-bordered bg-white w-full max-w-xs h-8 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('medicine2')}
              />
              <br />
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered bg-white w-full max-w-xs h-8 mt-1  pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('description2')}
              />
            </div>
            <br />
            {/* Medicine 3 */}
            <div>
              <input
                type="text"
                placeholder="Medicine 3"
                className="input input-bordered bg-white w-full max-w-xs h-8 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('medicine3')}
              />
              <br />
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered bg-white w-full max-w-xs h-8 mt-2 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('description3')}
              />
            </div>
            <br />
            {/* Medicine 4 */}
            <div>
              <input
                type="text"
                placeholder="Medicine 4"
                className="input input-bordered bg-white w-full max-w-xs h-8 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('medicine4')}
              />
              <br />
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered bg-white w-full max-w-xs h-8 mt-2 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('description4')}
              />
            </div>
            <br />
            {/* Medicine 5 */}
            <div>
              <input
                type="text"
                placeholder="Medicine 5"
                className="input input-bordered bg-white w-full max-w-xs h-8 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('medicine5')}
              />
              <br />
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered bg-white w-full max-w-xs h-8 mt-2 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('description5')}
              />
            </div>

            <input
              className="btn btn-primary mt-1 w-full disable text-white rounded-b-none"
              type="submit"
              value="ADD"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Solve;
