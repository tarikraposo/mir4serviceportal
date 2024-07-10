interface ContactItemProps {
  name: string;
  whatsapp: string;
  discord: string;
  email: string;
}

const ContactItem = ({ name, whatsapp, discord, email }: ContactItemProps) => {
  return (
    <div className="flex flex-col w-[50%] h-[50%] text-white justify-center bg-cyan-900 rounded-md items-center p-4">
      <p className="font-bold text-center mb-2">{name}</p>
      <div className="text-sm">
        <p>Whatsapp: {whatsapp}</p>
        <p>Discord: {discord}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default ContactItem;
