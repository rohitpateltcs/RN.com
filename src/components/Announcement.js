import React from "react";

const Announcement = () => {
  return (
    <div className="">
      <div className=" flex flex-col px-12 bg-yellow-100 py-3 space-x-6">
        <div>
          <h2 className="text-xl font-bold py-4 text-black">
            Best Wishes for the day
          </h2>
        </div>
        <div className="">
          <p className="font-sm text-red-500">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            consectetur nisi minus magnam, aliquid sit necessitatibus sequi vero
            inventore, vel dolor ipsum optio repudiandae non ratione molestias
            placeat excepturi quia?"
          </p>
          <img
            src="https://media.istockphoto.com/id/1220852136/photo/ajax-html-text-on-wooden-cubes-green-plant-in-black-pot-on-a-wooden-background.jpg?b=1&s=170667a&w=0&k=20&c=ZG3vU_pio8wmdwAFNrVxaKAn9T6bgxQRtvbAvVpiP8A="
            alt=""
            className=" w-full h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
