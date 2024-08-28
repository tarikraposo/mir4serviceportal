import Image from "next/image";

const Home = () => {
  return (
    <div className="flex h-[900px] justify-center items-center gap-40" id="home">
      <div className="">
        <div className="max-w-[500px]">
        <p className="text-cyan-500">Welcome to Mir4 Service Portal</p>
        <p className="text-3xl text-white">Do you want to hire our services?</p>
        <p className="text-white">
        We offer several types of services, contact one of our members and come and find out!
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
