import Image from "next/image";

const Home = () => {
  return (
    <div className="flex h-[900px] justify-center items-center gap-40" id="home">
      <div className="">
        <div className="max-w-[500px]">
        <p className="text-cyan-500">Welcome to Mir4 Service Portal</p>
        <p className="text-3xl text-white">lorem ipsam dolor sit amet consectetur</p>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          officia pariatur excepturi et illum sint quaerat ipsam quo nesciunt
          maiores expedita quasi consectetur saepe, quia, nostrum omnis
          accusantium tempore id.
        </p>
        </div>
        

      </div>
      <div className="max-w-[500px]">
        <Image src="/cyano_warrior-1.jpg" alt="warrior image" width={800} height={600}/>
      </div>
    </div>
  );
};

export default Home;
