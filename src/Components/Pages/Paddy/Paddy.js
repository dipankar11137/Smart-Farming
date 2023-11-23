import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Paddy = () => {
  return (
    <div className="h-screen mx-28 mt-20 text-white">
      {/* ধান বীজ লাগানোর সময় */}
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-5 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            ধান বীজ লাগানোর সময় <FaArrowRight />
          </h1>
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p className="pb-2">
            {' '}
            1.রোপা আমন : জৈষ্ঠ্য-আষাঢ় মাসে বীজ তলায় বীজ বোনা হয়, শ্রাবণ-ভাদ্র
            মাসে মূল জমিতে রোপণ করা হয় এবং অগ্রহায়ণ-পৌষ মাসে ধান কাটা হয়।
          </p>{' '}
          <p className="mt-2">
            {' '}
            ২. বোনা আমন : এই আমন ছিটিয়ে বোনা হয়। বোনা আমন চৈত্র-বৈশাখ মাসে
            মাঠে বীজ বপন করা হয় এবং অগ্রহায়ণ মাসে পাকা ধান কাটা হয়।
          </p>
        </div>
      </div>
      {/* ধান চাড়া লাগানোর সময় */}
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-5 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            ধান চাড়া লাগানোর সময় <FaArrowRight />
          </h1>
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p className="pb-2">
            {' '}
            1.রোপা আমন : জৈষ্ঠ্য-আষাঢ় মাসে বীজ তলায় বীজ বোনা হয়, শ্রাবণ-ভাদ্র
            মাসে মূল জমিতে রোপণ করা হয় এবং অগ্রহায়ণ-পৌষ মাসে ধান কাটা হয়।
          </p>{' '}
          <p className="mt-2">
            {' '}
            ২. বোনা আমন : এই আমন ছিটিয়ে বোনা হয়। বোনা আমন চৈত্র-বৈশাখ মাসে
            মাঠে বীজ বপন করা হয় এবং অগ্রহায়ণ মাসে পাকা ধান কাটা হয়।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paddy;
