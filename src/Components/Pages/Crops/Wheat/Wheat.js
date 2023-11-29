import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Wheat = () => {
  return (
    <div className="pb-10 mx-28 mt-5 text-white">
      <h1 className="text-4xl text-center font-bold mb-10 -ml-36 underline">
        গম চাষ পদ্ধতি
      </h1>
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">মাটির প্রকৃতি</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            উঁচু ও মাঝারি দো-আঁশ মাটি গম চাষের জন্য বেশি উপযোগী৷ লোনা মাটিতে
            গমের ফলন কম হয় ৷ সাধারণত উঁচু ও মাঝারি উঁচু জমি গম চাষের জন্য
            উপযুক্ত ৷ তবে মাঝারি নিচু জমিতেও গম চাষ হয় ৷ দোঁআশ ও বেলে-দোঁআশ মাটি
            গম চাষের জন্য সর্বোত্তম ৷ সহজে পানি নিষ্কাশিত হয় এমন ভারী অর্থাৎ
            এঁটেল ও এঁটেল-দোঁআশ মাটিতেও গমের চাষ করা যায় ৷
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
            গম বপনের সময় উপযুক্ত সময় হলো অগ্রহায়ণের মাসের ১ম থেকে ২য় সপ্তাহ
            পর্যন্ত ( নভেম্বর মাসের ১৫ থেকে ৩০ পর্যন্ত )। তবে তাপ সহনশীল জাত
            ডিসেম্বার মাসের ১৫-২০ তারিখের মধ্যে বুনলেও অন্যান্য জাতের তুলনায়
            বেশি ফলন দেয়। যেসব এলাকায় ধান কাটতে ও জমি তৈরী করতে বিলম্ব হয় সে
            ক্ষেত্রে কাঞ্চন, আকবর , অঘ্রাণী, ও গৌরব বপন করলে ভাল ফলন পাওয়া
            যায়।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">বীজের হার</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            হেক্টর প্রতি ১২০ কেজি বীজ ব্যবহার করতে হবে। বীজ গজানোর ক্ষমতা ৮০% এর
            বেশী হলে ভালো হয়।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">বীজ শোধন</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            প্রোভেক্স/ভিটাভেক্স ২০০ প্রতি কেজি বীজে ৩ গ্রাম হারে মিশিয়ে বীজ
            শোধন করতে হবে। বীজ শোধনের ফলে চারা সবল ও সতেজ হয় এবং গম গজানোর হার ও
            ফলন বৃদ্ধি পায়। বীজ শোধন করলে শতকরা ১০-১২ কেজি বৃদ্ধি পায়।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">বপন পদ্ধতি</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            সারিতে বা ছিটিয়ে গম বীজ বপন করা যায়। সারিতে বপনের জন্য জমি তৈরীর পর
            লাংগল দিয়ে সরু নালা তৈরী করে ২০ সেমি বা ৮ ইঞ্চি দূরে দূরে সারিতে
            এবং ৪-৫ সেমি গভীরে বীজ বপন করতে হবে। আগাম বপনের জন্য পাওয়ার টিলার
            চালিত বীজ বপন যন্ত্রের সাহায্যে গম আবাদ করা যায়। যন্ত্রটির সুবিধা
            হলো ধান কাটার পরপর একই সময়ে চাষ, বীজ বপন ও মই দেওয়ার কাজ করা যাবে।
            যন্ত্রটিতে ২০ কেজি বীজ রাখার মতো একটি হপার থাকে এবং ২০ সেমি. দূরে
            দূরে ৬ সারিতে ৩-৪ সেমি. গভীরে বীজ বোনা যায়। বীজ বোনার সঙ্গে সঙ্গে
            বীজ ঢেকে দেয়া হয় করে বলে পাখি কম ক্ষতি করে এবং শতকরা প্রায় ২০ ভাগ
            বীজের সাশ্রয় হয়।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            সারের পরিমাণ ও প্রয়োগ পদ্ধতি
          </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            সেচ সহ চাষের ক্ষেত্রে নির্ধারিত ইউরিয়া সারের দুই তৃতীয়াংশ এবং
            সম্পূর্ন টিএসপি, এমপি ও জিপসাম শেষ চাষের পূর্বে প্রয়োগ করে মাটির
            সাথে মিশিয়ে দিতে হবে। বাকী এক তৃতীয়াংশ ইউরিয়া চারার তিন পাতা বয়সে
            প্রথম সেচের পর দুপুর বেলা মাটি ভেজা থাকা অবস্থায় প্রতি হেক্টরে ৬০-৭০
            কেজি ইউরিয়া উপরি প্রয়োগ করতে হবে। উল্লেখ্য যে, সেচ ছাড়া চাষের
            ক্ষেত্রে সমস্ত ইউরিয়া শেষ চাষের সময় অন্যান্য রাসায়নিক সারের সাথে
            প্রয়োগ করতে হবে। তবে সেচ ছাড়া চাষের ক্ষেত্রে বৃষ্টিপাত হলে বৃষ্টির
            পর জমি ভেজা থাকা অবস্থায় উপরি প্রয়োগের জন্য নির্ধারিত ইউরিয়া প্রয়োগ
            করা ভালো। গম চাষে নিম্নলিখিত হারে সার প্রয়োগ করতে হবে-
          </p>
        </div>
      </div>
      {/* <div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 bg-red-200">01</div>
          <div class="col-span-2 bg-green-300">02</div>
          <div class=" col-span-2 bg-blue-400">03</div>
          <div class=" col-span-2 bg-blue-400">03</div>
        </div>
      </div> */}

      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">সেচ প্রদান </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            মাটির প্রকারভেদে গম আবাদে ২-৩টি সেচের প্রয়োজন হয়। প্রথম সেচ চারার
            তিন পাতার সময় (বপনের ১৭-২১ দিন পর), দ্বিতীয় সেচ শীষ বের হওয়ার সময়
            (বপনের ৫০-৫৫ দিন পর) এবং তৃতীয সেচ দানা গঠনের সময় (বপনের ৭৫-৮০ দিন
            পর) দিতে হবে। তবে মাটির প্রকারভেদে ও শুষ্ক আবহাওয়ায় ভালো ফলনের জন্য
            অতিরিক্ত এক বা একাধিক সেচ দেওয়া ভালো। প্রথম সেচটি খুবই হালকাভাবে
            দিতে হবে। তা না হলে অতিরিক্ত পানিতে চারার পাতা হলুদ এবং চারা
            সম্পূর্ণ বা আংশিক নষ্ট হয়ে যেতে পারে। সেচের পর পরই জমি থেকে অতিরিক্ত
            পানি বের করে দিতে হবে। তাই বপনের পর জমির ঢাল বুঝে ২০-২৫ ফুট অন্তর
            নালা কেটে রাখতে হবে।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">আগাছা দমন</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            বপনের ২৫-৩০ দিনের মধ্যে জমিতে ‘জো’ অবস্থায় আগাছা দমনের জন্য নিড়ানী
            দিতে হবে। নিড়ানীর ফলে মাটি আলগা হবে এবং আর্দ্রতা বজায় থাকবে। চওড়া
            পাতা জাতীয় আগাছা (বথুয়া ও কাকরি) দমনের জন্য ২,৪ ডি এমাইন বা এফিনিটি
            জাতীয় আগাছা দমনকারী ঔষধ প্রতি ১০ লিটার পানিতে ৩৫ মিলিলিটার হিসেবে
            ভালভাবে মিশিয়ে স্প্রে মেশিনের সাহায্যে মেঘমুক্ত দিনে একবার প্রয়োগ
            করলে ভাল ফল পাওয়া যাবে। সময়মত আগাছা দমন করলে ফলন শতকরা ১৫ ভাগ বৃদ্ধি
            পায়।
          </p>
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
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">
            চিটা ব্যবস্থাপনা:{' '}
          </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            উত্তরাঞ্চলের মাটিতে মাঝে মাঝে গমে চিটা দেখা যায় এবং এর ফলে ফলন কমে
            যায়। অনুমোদিত মাত্রায় জৈব ও রাসায়নিক সার প্রয়োগ এবং বিঘা প্রতি
            ৮০০ গ্রাম বরিক এসিড বা ১ কেজি ৩০০ গ্রাম বোরাক্স প্রয়োগ করে চিটা দূর
            হয়।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">ফসল সংগ্রহ</h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            গম পেকে হলুদ বর্ণ ধারণ করলে চৈত্র মাসের প্রথম থেকে মধ্য চৈত্র
            (মার্চের শেষ থেকে এপ্রিলের প্রথম) পর্যন্ত কেটে গম সংগ্রহ করতে হয়।
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-5">
        <div className="col-span-4 flex items-center">
          {' '}
          <h1 className="text-3xl  flex gap-x-3 items-center">ফলন </h1>
        </div>
        <div className="col-span-1 text-3xl  flex gap-x-3 items-center">
          <FaArrowRight />
        </div>
        <div className="col-span-7 text-xl border-2 border-white py-4 px-8">
          <p>
            উপযুক্ত যত্ন নিলে একর প্রতি ১৫০০ থেকে ২০০০ কেজি পর্যন্ত গমের ফলন
            পাওয়া যায়।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wheat;
