// Background.tsx
import React from 'react';
import MapPin from "@/components/MapPin";
import ParkName from '@/components/ParkName';

const Background: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-emerald-100">
      <div className="relative ring bg-emerald-100">
        <img
          src="/img/map.png"
          className="block max-h-screen"
          alt="Map Image"
        />
        
        <div className="absolute top-[4.88%] left-[1.27%]">
          <img src="/map_images/dove_tree.png" alt="Dove Tree" width={160} />
        </div>
        <div className="absolute top-[14.94%] left-[25.42%]">
          <img src="/map_images/bonsai.png" alt="bonsai" width={90} />
        </div>
        <div className="absolute bottom-[27.80%] left-[27.97%]">
          <img src="/map_images/giraffe.png" alt="giraffe" width={170} />
        </div>
        <div className="absolute bottom-[25.61%] left-[42.37%]">
          <img src="/map_images/turtle.png" alt="turtle" width={80} />
        </div>
        <div className="absolute left-[16.94%] top-[17.07%]">
          <MapPin size={75} />
        </div>
        <div className="absolute left-[5.08%] top-[30.49%]">
          <ParkName name={"Arnold Arboretum"} modalTitle='Park info!' modalUrl= { "www.google.com" } />
        </div>
        <div className="absolute right-[13.98%] top-[51.83%]">
          <MapPin size={75} />
        </div>
        <div className="absolute right-[4.66%] top-[64.63%]">
          <ParkName name={"Back Bay Fens"}  modalTitle='Park info!' />
        </div>
        <div className="absolute bottom-[19%] left-[32.20%]">
          <MapPin size={75} />
        </div>
        <div className="absolute bottom-[8.54%] left-[32.20%]">
          <ParkName name={"Franklin Park"} modalTitle='Park info!' />
        </div>
        <div className="absolute left-[44.07%] top-[6.10%]">
          <MapPin size={75} />
        </div>
        <div className="absolute left-[16.94%] top-[4.88%]">
          <ParkName name={"Jamaica Pond"} modalTitle='Park info!' />
        </div>
        <div className="absolute top-[13.10%] left-[46.61%]">
          <img src="/map_images/sailboat.png" alt="sailboat" width={80} />
        </div>
        <div className="absolute top-[13.10%] left-[39.83%]">
          <img src="/map_images/camorant.png" alt="camorant" width={80} />
        </div>
        <div className="absolute right-[36.44%] top-[14.63%]">
          <MapPin size={75} />
        </div>
        <div className="absolute right-[29.66%] top-[27.44%]">
          <ParkName name={"Olmsted Park"} modalTitle='Park info!' />
        </div>
        <div className="absolute right-[13.56%] top-[16.83%]">
          <MapPin size={75} />
        </div>
        <div className="absolute right-[3.98%] top-[19.51%]">
          <img src="/map_images/blue_heron.png" alt="blue_heron" width={100} />
        </div>
        <div className="absolute right-[8.90%] top-[4.88%]">
          <ParkName name={"Riverway"} modalTitle='Park info!' />
        </div>


        
      </div>
    </div>
  );
};

export default Background;
