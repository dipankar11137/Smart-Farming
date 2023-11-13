import React from 'react';
import Banner from './Banner';

const HappyClient = () => {
  return (
    <div className="mt-32 text-white mx-20 pb-5 shadow-lg shadow-lime-200 bg-lime-700 rounded-lg pt-3 pl-4">
      <h1 className="text-2xl font-semibold mt-2">SOME HAPPY FACES</h1>
      <h1 className="text-4xl font-semibold mb-3 mt-3">
        প্রকৃত সুখী গ্রাহক, বাস্তব গল্প
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h1 className="text-2xl mt-28">
            এই ধরনের পরিষেবা প্ল্যাটফর্ম অন্যান্য দেশে উপলব্ধ। আমি যখন বিদেশে
            ছিলাম তখন আমি ব্যক্তিগতভাবে সেগুলি ব্যবহার করেছি। আমি খুবই খুশি যে
            বাংলাদেশেও এরকম একটি পোর্টাল এখানে পাওয়া যাচ্ছে। ধন্যবাদ
          </h1>
        </div>
        <div className="col-span-2">
          {/* <img
            className="h-80 ml-10 rounded-full"
            src="https://media.istockphoto.com/id/497226663/photo/bangladesh-people.jpg?s=170667a&w=0&k=20&c=2616b1FJmwqHxvIqrU3SEcYiEIMg2lBQog9Y-xdw5YU="
            alt=""
          /> */}
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
