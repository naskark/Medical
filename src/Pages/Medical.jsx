import React from "react";
import frame from "../Assets/Frame.png";
import frames from "../Assets/Frames.png";
import group from "../Assets/Group.png";
import ireland from "../Assets/Ireland.png";
import medicaltourism from "../Assets/MedicalTourism.png";
import objects from "../Assets/OBJECTS.png";
import poland from "../Assets/Poland.png";
import rating from "../Assets/Rating.png";

const Medical = () => {
  return (
    <div>
      <div className="flex flex-row justify-between bg-[#372F62] w-[100%] h-[11vh] m-auto rounded-br-[60px]">
        <img src={group} />
        <img src={medicaltourism} className="pb-[18px]" />
        <img src={objects} className="rounded-br-[60px] " />
      </div>
      <div className="flex flex-col bg-[#F2F2F2] mt-[2rem] mr-auto mb-auto ml-auto w-[70%] h-[33vh] rounded-[40px]">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img src={frames} class="block w-full" alt="Wild Landscape" />
              <div className="flex flex-row justify-around content-around m-auto ">
                <img src={ireland} className="w-[20vw] h-[2rem]" />
                <img src={rating} className="w-[20vw] h-[2rem]" />
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img src={frame} class="block w-[35%]" alt="Camera" />
              <div className="flex flex-row justify-around content-around m-auto ">
                <img src={poland} className="w-[20vw] h-[2rem]" />
                <img src={rating} className="w-[20vw] h-[2rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#E7C985] w-[93%] mt-[4rem] ml-auto mr-auto mb-auto h-[23rem] rounded-[40px]">
        <div className="mt-[2rem] ml-[2rem] font-body font-extrabold text-[#372F62] text-[20px]">
          <p>Medical Tourism</p>
        </div>
        <div className="flex flex-col mt-[2rem] ml-auto mb-auto mr-auto">
          <input type="text" placeholder="Enter name" className="placeholder:bg-[#E7C985] bg-[#E7C985] rounded-[50px] w-[80vw] h-[6vh] shadow-inner placeholder:text-[#A5894A] pl-[1rem] placeholder:font-body placeholder:font-extrabold placeholder:text-[17px]" />
          <input type="text" placeholder="Enter phone number" className="placeholder:bg-[#E7C985] bg-[#E7C985] rounded-[50px] w-[80vw] h-[6vh] shadow-inner mt-[1rem] placeholder:text-[#A5894A] pl-[1rem] placeholder:font-body placeholder:font-extrabold placeholder:text-[17px] " />
          <input type="text" placeholder="Enter email" className="placeholder:bg-[#E7C985] bg-[#E7C985] rounded-[50px] w-[80vw] h-[6vh] shadow-inner mt-[1rem] placeholder:text-[#A5894A] pl-[1rem] placeholder:font-body placeholder:font-extrabold placeholder:text-[17px] " />
        </div>
        <div className="flex flex-row pb-[25px] pl-[20px] font-body font-extrabold text-[#372F62] text-[13px]">
          <ul className="list-disc list-inside">
            <li>Our healthcare assistant willl contact you</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Medical;
