import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CreateAccount = () => {
  const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  let signInError;
  if (gUser) {
    navigate('/');
  }

  const createDBUser = data => {
    const updateData = {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
    };
    fetch(`http://localhost:5000/create-user/${data?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Updated profile');
        navigate('/');
      });
    // console.log(data);
  };

  const onSubmit = async data => {
    await createDBUser(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await signInWithGoogle(data.email, data.password);
    await updateProfile({ displayName: data.name, phoneNumber: data.phone });
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://w0.peakpx.com/wallpaper/260/414/HD-wallpaper-moon-on-the-dark-sky-nature-grass-sky-dark.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
      className="flex justify-center  bg-slate-700 "
    >
      <div className="flex justify-center items-center mt-10 pb-10 ">
        <div
          style={{
            backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/297/878/431/artstation-digital-art-building-night-moon-hd-wallpaper-preview.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vp',
          }}
          className="card w-96 shadow-2xl bg-violet-200"
        >
          <div className="card-body text-white">
            <h2 className="text-center text-2xl font-bold">SignUp</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  style={{ width: '400px' }}
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-white w-full  text-black "
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* email */}
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full  text-black "
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is Required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email',
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Phone */}
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Phone</span>
                </label>
                <input
                  type="phone"
                  placeholder="Write Your Phone Number"
                  className="input input-bordered bg-white w-full   text-black"
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'Phone is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered text-black font-bold bg-white w-full   "
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer',
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn btn-primary w-full text-white text-xl"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small></small>
            </p>
            <div className="divider">OR</div>
            <p className="ml-2">Already Have An Account</p>

            <Link
              to="/login"
              className="btn btn-accent text-white text-xl font-bold"
            >
              Please Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;
