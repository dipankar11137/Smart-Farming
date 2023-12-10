import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddDisease = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;

  const imageHostKey = 'ab492fa3bd4253f25e449094e4b48480';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        const changeUrl = { ...data, email, img: image };
        console.log(changeUrl);
        fetch(`/allProduct`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(changeUrl),
        })
          .then(res => res.json())
          .then(data => {
            toast.success('Successfully Add A Product');
            reset();
          });
      });
  };
  return (
    <div className="flex justify-center h-screen">
      <div className="mt-10">
        <h1 className="text-4xl text-white font-bold">
          আপনার গাছের রোগের ছবি পাঠান
        </h1>
        <div className="border-[1px] mt-5 border-white pb-5 rounded-3xl hover:shadow-md hover:shadow-white">
          <form
            className=" flex justify-center gap-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              {/* image */}
              <label className="label">
                <span className="label-text text-lg font-semibold text-white">
                  Input Image{' '}
                </span>
              </label>
              <input
                type="file"
                className="input h-[40px] input-bordered text-black w-96  pt-1 sm:w-full max-w-xs  hover:shadow-xl shadow-inner"
                {...register('image', {
                  required: {
                    value: true,
                    message: 'Image is Required',
                  },
                })}
              />

              <label className="label">
                {errors.image?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.image?.message}
                  </span>
                )}
              </label>

              {/* Description */}
              <label className="">
                <span className="label-text text-lg font-semibold text-white">
                  Description
                </span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered bg-white w-full max-w-xs h-20 pt-1 hover:shadow-xl shadow-inner border-blue-900"
                {...register('description', {
                  required: {
                    value: true,
                    message: 'Description is Required',
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.description?.message}
                  </span>
                )}
              </label>

              <input
                className="btn btn-primary mt-5 w-full disable text-white"
                type="submit"
                value="ADD"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDisease;
