import React from 'react';
import './Farming.css';

const Farming = () => {
  return (
    <div className="grid grid-cols-3 gap-x-20">
      {/* ধান */}
      {/* <button>
        <div className="rounded-2xl shadow-2xl shadow-green-500 hover:shadow-inner">
          <img
            className="w-full rounded-t-2xl"
            src="https://t4.ftcdn.net/jpg/00/77/38/33/360_F_77383324_Xv9xT7OWsminUVzqI0hTrRgfnoRBpbvC.jpg"
            alt=""
          />
          <div className=" bg-lime-300 text-black  items-center    bottom-0">
            <p className="">
              ধান (বৈজ্ঞানিক নাম: Oryza sativa ওরিজা সাতিভা) পোয়াসি গোত্রের
              দানাশস্য জাতীয় উদ্ভিদ। ধান উষ্ণ জলবায়ুতে, বিশেষত পূর্ব-এশিয়ায়
              ব্যাপকভাবে চাষ হয়। ধান বা ধান্য শব্দের উৎপত্তি অজ্ঞাত। ধানবীজ বা
              চাল সুপ্রাচীনকাল থেকে লক্ষ লক্ষ মানুষের প্রধান খাদ্য।
            </p>
          </div>
          <div className="bg-white rounded-b-lg">
            <h1 className="text-3xl font-semibold">ধান</h1>
          </div>
        </div>
      </button> */}
      {/* gom */}
      <button>
        <div class="container">
          <img
            className="w-full rounded-t-2xl md:h-[370px]"
            src="https://t4.ftcdn.net/jpg/00/77/38/33/360_F_77383324_Xv9xT7OWsminUVzqI0hTrRgfnoRBpbvC.jpg"
            alt=""
          />
          <div class="content">
            <p>
              ধান (বৈজ্ঞানিক নাম: Oryza sativa ওরিজা সাতিভা) পোয়াসি গোত্রের
              দানাশস্য জাতীয় উদ্ভিদ। ধান উষ্ণ জলবায়ুতে, বিশেষত পূর্ব-এশিয়ায়
              ব্যাপকভাবে চাষ হয়। ধান বা ধান্য শব্দের উৎপত্তি অজ্ঞাত। ধানবীজ বা
              চাল সুপ্রাচীনকাল থেকে লক্ষ লক্ষ মানুষের প্রধান খাদ্য।
            </p>
          </div>
        </div>
        <div className="bg-white rounded-b-lg">
          <h1 className="text-3xl font-semibold">ধান</h1>
        </div>
      </button>
      <div className="rounded-2xl">
        <img
          className="w-full rounded-t-2xl"
          src="https://t4.ftcdn.net/jpg/00/77/38/33/360_F_77383324_Xv9xT7OWsminUVzqI0hTrRgfnoRBpbvC.jpg"
          alt=""
        />
        <div className="absolute bg-lime-500 text-black bottom-0 items-center ml-20">
          <h1 className="text-center">Dado</h1>
          <h1>KI Bal</h1>
        </div>
        <div className="bg-white">
          <h1>Hello</h1>
        </div>
      </div>
      <div className="rounded-2xl">
        <img
          className="w-full rounded-t-2xl"
          src="https://t4.ftcdn.net/jpg/00/77/38/33/360_F_77383324_Xv9xT7OWsminUVzqI0hTrRgfnoRBpbvC.jpg"
          alt=""
        />
        <div className="absolute bg-lime-500 text-black bottom-0 items-center ml-20">
          <h1 className="text-center">Dado</h1>
          <h1>KI Bal</h1>
        </div>
        <div className="bg-white">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Farming;