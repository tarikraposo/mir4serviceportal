import ContactItem from "./contact_item";

const Contact = () => {
  return (
    <div className="custom-bg pb-10 h-[900px]">
      <div className="pt-[20%] w-[1000px m-auto]">
        <h1 className="text-center text-white text-3xl mb-4 font-bold">
          Contact
        </h1>
        <div className="flex w-[500px] p-4 m-auto gap-10">
          <ContactItem
            name="Waka"
            email="email@email.com"
            discord="Wakalyapi"
            whatsapp="666666666"
          />
          <ContactItem
            name="Gekkou"
            email="email@email.com"
            discord="Gekkou"
            whatsapp="666666666"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
