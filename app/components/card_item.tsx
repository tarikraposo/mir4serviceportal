interface CardItemProps {
  name?: string;
}
const CardItem = ({ name }: CardItemProps) => {
  return (
    <div className="flex justify-center items-center rounded-md text-white bg-cyan-900 px-5 py-10 w-[135px] h-[120px]">{name}</div>
  );
};

export default CardItem;
