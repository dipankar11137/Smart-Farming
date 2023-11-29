import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Corn = () => {
  return (
    <div className="pb-10 mx-28 mt-5 text-white">
      <h1 className="text-4xl text-center font-bold mb-10 -ml-36 underline">
        ভুট্টা চাষ পদ্ধতি
      </h1>
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            উপযুক্ত জমি ও মাটি
          </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            বেলে দোআশ ও দোআশ মাটি ভুট্টা চাষের জন্য উপযোগী। লক্ষ্য রাখতে হবে যেন
            জমিতে পানি জমে না থাকে।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">বপনের সময়</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            বাংলাদেশে রবি মৌসুমে মধ্য-আশ্বিন থেকে মধ্য অগ্রহায়ণ
            (অক্টোবর-নভেম্বর) এবং খরিফ মৌসুমে ফাল্গুন থেকে মধ্য-চৈত্র (মধ্য
            ফেব্রুয়ারী-মার্চ) পর্যন্ত সময় বীজ বপনের উপযুক্ত সময়।
          </p>
        </div>
      </div>
      {/* --------------- */}
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            সার প্রয়োগ পদ্ধতি
          </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            জমি তৈরীর শেষ পর্যায়ে অনুমোদিত ইউরিয়ার এক তৃতীয়াংশ এবং অন্যান্য
            সারের সবটুকু ছিটিয়ে জমি চাষ দিতে হবে। বাকি ইউরয়া সমান ২ কিস্তিতে
            প্রয়োগ করতে হবে। প্রথম কিস্তি বীজ গজানোর ২৫-৩০ দিন পর এবং দ্বিতীয়
            কিস্তি বীজ গজানোর ৪০-৫০ দিন পর উপরি প্রয়োগ করতে হবে। চারা গজানোর ৩০
            দিনের মধ্যে জমি থেকে অতিরিক্ত চারা তুলে ফেলতে হবে। চারার বয়স এক মাস
            না হওয়া পর্যন্ত জমি আগাছামুক্ত রাখতে হবে।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            সেচ ও আগাছা ব্যবস্থাপনা
          </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            উচ্চ ফলনশীল জাতের ভুট্টার আশানুরূপ ফলন পেতে হলে রবি মৌসুমে সেচ
            প্রয়োগ অত্যাবশ্যক। উদ্ভাবিত জাতে নিম্নরূপ ৩-৪টি সেচ দেওয়া যায়।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">প্রথম সেচ </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p> বীজ বপনের ১৫-২০ দিনের মধ্যে (৪-৬ পাতা পর্যায়)</p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">দ্বিতীয় সেচ</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>বীজ বপনের ৩০-৩৫ দিনের মধ্যে (৮-১২ পাতা পর্যায়)</p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">তৃতীয় সেচ </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>বীজ বপনের ৬০-৭০ দিনের মধ্যে (মোচা বের হওয়া পর্যায়)</p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">চতুর্থ সেচ </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>বীজ বপনের ৮৫-৯৫ দিনের মধ্যে (দানা বাঁধার পূর্ব পর্যায়)</p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">পাখি তাড়ানো</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            বীজ বপনের পর ১০ থেকে ১২ দিন পর্যন্ত পাখি তাড়ানোর ব্যবস্থা নিতে হবে।
          </p>
        </div>
      </div>
      <div className="mt-5 bg-red-700 text-center py-2 text-md">
        <p>
          ভুট্টার ফুল ফোটা ও দানা বাঁধার সময় কোন ক্রমেই জমিতে যাতে জলবদ্ধতা
          সৃষ্টি না হয় সেদিকে খেয়াল রাখতে হবে। জমিতে আগাছা দেখা দিলে নিড়ানী দিয়ে
          দমন করতে হবে।
        </p>
      </div>
    </div>
  );
};

export default Corn;
