import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Chilies = () => {
  return (
    <div className="pb-10 mx-28 mt-5 text-white">
      <h1 className="text-4xl text-center font-bold mb-10 -ml-36 underline">
        মরিচ চাষ পদ্ধতি
      </h1>
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">বপনের সময়</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            খরিফ-১ মৌসুমে: ১-৩০ ফাল্গুন (১৫ ফেব্রুয়ারি-১৫ মার্চ)। খরিফ-২ মৌসুমে:
            শ্রাবণ-ভাদ্র (১৫ জুলাই থেকে ১৫ সেপ্টেম্বর)। রবি মৌসুমে
            সেপ্টেম্বর-অক্টোবর উপযুক্ত সময়।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">চাষপদ্ধতি</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            মাটির প্রকার ভেদে ৪-৬ টি চাষ ও মই দিতে হবে। প্রথম চাষ গভীর হওয়া
            দরকার। সেচের জন্য ১২ ইঞ্চি প্রশস্ত নালা থাকবে। সার শেষ চাষের সময়
            প্রয়োগ করতে হবে। লাইন থেকে লাইন ২৪ -২৮ ইঞ্চি এবং চারা থেকে চারা ১২
            -১৬ ইঞ্চি দূরে লাগাতে হবে।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">বীজের পরিমান</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>জাত ভেদে শতক প্রতি ১০-১৫ গ্রাম ।</p>
        </div>
      </div>
      {/* ------------------ */}
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            সার ব্যবস্থাপনা
          </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            গোবর, টিএসপি, জিপসাম ও বোরন সম্পূর্ণ এবং এমওপি ৫০ কেজি শেষ চাষের সময়
            জমিতে মিশিয়ে দিতে হবে। সম্পূর্ণ ইউরিয়া এবং বাকী এমওপি সমান ৩
            কিস্তিতে ২৫, ৫০ এবং ৭৫ দিন পর পর জমিতে প্রয়োগ করতে হবে। এমওপি সেচের
            পূর্বে গাছের গোঁড়া থেকে ১০-১৫ সেমি দূরে প্রয়োগ করে নিড়ানি দিয়ে মাটির
            সাথে মিশিয়ে দিতে হবে ।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">সেচ</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            জমিতে রসের অভাব হলে সেচ দিতে হবে ও পানি নিকাশের ব্যবস্থা রাখতে হবে।
            সেচের পর চটা ভেঙ্গে দিতে হবে। শীত ও খরার সময় জমিতে ১৫ দিন পর পর
            পরিমিত পরিমানে সেচ দিতেহবে। ফুল আসার সময় এবং ফল বড় হওয়ার সময় জমিতে
            পরিমান মত আদ্রতা রাখতে হবে ।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">আগাছা</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            আগাছা দমনের জন্য জমি চাষ ও মই দিয়ে ভালোভাবে আগাছা পরিষ্কার, বিশুদ্ধ
            বীজ ব্যবহার এবং পরিষ্কার কৃষি যন্ত্রপাতি ব্যবহার। ফসল বোনার ২৫-৩০
            দিনের মধ্যে আগাছা বাছাই করতে হবে। সেচ দেয়ার আগে আগাছা বাছাই করতে
            হবে।{' '}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            আবহাওয়া ও দুর্যোগ
          </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            অতিবৃষ্টির কারনে জমিতে পানি বেশি জমে গেলে নালা তৈরি করে তাড়াতাড়ি
            পানি সরানোর ব্যবস্থা নিতে হবে। রবি মৌসুমে নিম্ন তাপমাত্রা (১৫ ডিগ্রি
            সেলসিয়াস নীচে) থেকে চারা রক্ষার জন্য বীজতলা ঢেকে রাখতে হবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chilies;
