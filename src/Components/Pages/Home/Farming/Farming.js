import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Css/ImageStyle.css';
import './Farming.css';

const Farming = () => {
  const navigation = useNavigate();

  const handlePaddy = () => {
    navigation('/paddy');
  };
  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-10">
      {/* ধান */}

      <button
        onClick={handlePaddy}
        className="rounded-2xl shadow-2xl shadow-green-500 hover:shadow-inner hover:border-blue-500 border-[3px]"
      >
        <div class="containerSTyle">
          <img
            className="w-full rounded-t-2xl md:h-[320px] hover:animate-pulse "
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
        <div className="bg-green-200 rounded-b-lg">
          <h1 className="text-3xl font-semibold  p-[2px]">ধান</h1>
        </div>
      </button>
      {/*গম  */}
      <button
        onClick={() => navigation('/wheat')}
        className="rounded-2xl shadow-2xl shadow-green-500 hover:shadow-inner hover:border-blue-500 border-[3px]"
      >
        <div class="containerSTyle">
          <img
            className="w-full rounded-t-2xl md:h-[320px] hover:animate-pulse "
            src="https://static.wixstatic.com/media/4c57d3_039297005d6d44afa33d7585c900aa0a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
            alt=""
          />
          <div class="content">
            <p>
              গম (ইংরেজি: Wheat) বিশ্বব্যাপী উৎপাদিত একটি ঘাস জাতীয় উদ্ভিদ যার
              আদি উৎপত্তি মধ্যপ্রাচ্যের লেভান্ট অঞ্চলে, কিন্তু এখন গম সারাবিশ্বে
              চাষ করা হয়। ২০০৭ সনে গমের বিশ্ব উৎপাদন ছিল ৬০৭ মিলিয়ন টন, যা ছিল
              বিশ্বের ৩য় সর্বাধিক উৎপাদিত শস্য।
            </p>
          </div>
        </div>
        <div className=" bg-green-200 rounded-b-lg ">
          <h1 className="text-3xl font-semibold  p-[2px]">গম</h1>
        </div>
      </button>

      {/* ভুট্টা */}
      <button
        onClick={() => navigation('/corn')}
        className="rounded-2xl shadow-2xl shadow-green-500 hover:shadow-inner hover:border-blue-500 border-[3px]"
      >
        <div class="containerSTyle">
          <img
            className="w-full rounded-t-2xl md:h-[320px] hover:animate-pulse "
            src="https://orthosongbad.com/wp-content/uploads/2020/03/corn.png"
            alt=""
          />
          <div class="content">
            <p>
              ভুট্টা (বৈজ্ঞানিক নাম Zea mays) একপ্রকারের খাদ্য শস্য। এই শস্যটির
              আদি উৎপত্তিস্থল মেসোআমেরিকা। ইউরোপীয়রা আমেরিকা মহাদেশে পদার্পণ
              করার পর এটি পৃথিবীর অন্যত্র ছড়িয়ে পড়ে।
            </p>
          </div>
        </div>
        <div className="bg-green-200 rounded-b-lg">
          <h1 className="text-3xl font-semibold p-[2px]">ভুট্টা</h1>
        </div>
      </button>
      {/* মরিচ  */}
      <button
        onClick={() => navigation('/chilies')}
        className="rounded-2xl shadow-2xl shadow-green-500 hover:shadow-inner hover:border-blue-500 border-[3px]"
      >
        <div class="containerSTyle">
          <img
            className="w-full rounded-t-2xl md:h-[320px] hover:animate-pulse "
            src="https://www.nayashatabdi24.com/assets/news_photos/2022/01/09/image-37321-1641713060.jpg"
            alt=""
          />
          <div class="content">
            <p>
              মরিচ বা লঙ্কা আমাদের দেশের একটি গুরুত্বপূর্ণ অর্থকরী ফসল। মরিচকে
              ইংরেজিতে Chili বলা হয়। ক্যাপসিকাম (Capsicum) গণের সোলানেসি
              (Solaneceae) পরিবারের উদ্ভিদের ফলকে সাধারণভাবে মরিচ বলা হয়ে থাকে।
              মরিচের ফলকে মসলা হিসেবে ব্যবহার করা হয়।
            </p>
          </div>
        </div>
        <div className="bg-green-200 rounded-b-lg">
          <h1 className="text-3xl font-semibold p-[2px]">মরিচ </h1>
        </div>
      </button>
      {/* কলা */}
      <button
        onClick={() => navigation('/banana')}
        className="rounded-2xl shadow-2xl shadow-green-500 hover:shadow-inner hover:border-blue-500 border-[3px]"
      >
        <div class="containerSTyle">
          <img
            className="w-full rounded-t-2xl md:h-[320px] hover:animate-pulse "
            src="https://mzamin.com/news_image/189616_kolacase.jpg"
            alt=""
          />
          <div class="content">
            <p>
              উৎপত্তিগতভাবে এক, একই প্রকার অথবা একাধিক ধরনের কিছু কোষ সমষ্টি
              যারা একই স্থানে অবস্থান করে, একটি সাধারণ কাজে নিয়োজিত থাকে
              তাদেরকেই টিস্যু বা কলা বলা হয়।
            </p>
          </div>
        </div>
        <div className="bg-green-200 rounded-b-lg">
          <h1 className="text-3xl font-semibold p-[2px]">কলা</h1>
        </div>
      </button>
      {/* ফুল */}
      <button className="rounded-2xl shadow-2xl shadow-green-500 hover:shadow-inner hover:border-blue-500 border-[3px]">
        <div class="containerSTyle">
          <img
            className="w-full rounded-t-2xl md:h-[320px] hover:animate-pulse "
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjZXZEkTrrhayGnjBMusp8GhrVl5FuUSVQ1E-HUobegm0gmwAknelpvEzgM0Yep-X8RDfIetKEifOWIG9u_ku2lQPmZ1_2DzDVUv85jWH4kDSU5xDCtrW_H3TifZXS3L9Kzsdk4zTWdaMHjxbBG5fQhAWXobZrKgr95QVKPnx3HszW-N1H46qpsF3xBEA=w0"
            alt=""
          />
          <div class="content">
            <p>
              গোলাপ হল রোজেই পরিবারের রোসা গণের এক প্রকারের বহুবর্ষজীবী ফুলের
              গাছ। এখানে তিন শতাধিক প্রজাতি এবং কয়েক হাজার হাজার জাত রয়েছে।
              এগুলি এমন এক ধরনের গাছপালা গঠন করে যা ডালপালা খাড়া করে উঠতে বা
              পিছনে যেতে পারে, ডালপালাগুলির সাথে প্রায়শই তীক্ষ্ন কাঁটা সজ্জিত
              থাকে।
            </p>
          </div>
        </div>
        <div className="bg-green-200 rounded-b-lg">
          <h1 className="text-3xl font-semibold p-[2px]">গোলাপ ফুল</h1>
        </div>
      </button>
    </div>
  );
};

export default Farming;
