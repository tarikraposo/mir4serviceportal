import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import CardItem from "./card_item";

const Services = () => {
  return (
    <div
      className="flex h-[900px] justify-center items-center gap-40"
      id="services"
    >
      <div className="max-w-[500px]">
        <div className="max-w-[500px]">
          <p className="text-cyan-500">Services</p>
          <p className="text-3xl text-white">
            lorem ipsam dolor sit amet consectetur
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            officia pariatur excepturi et illum sint quaerat ipsam quo nesciunt
            maiores expedita quasi consectetur saepe, quia, nostrum omnis
            accusantium tempore id.
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-[500px] gap-5">
        <div className="flex  gap-5 text-center justify-center items-center">
          <CardItem name="Praça" />
          <CardItem name="Pico"/>
        </div>
        <div className="flex  gap-5 text-center justify-center items-center">
          <CardItem name="Texas"/>
          <CardItem name="Full Time"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
