type ProfileProps = {
  greeting: string;
  name: string;
  avatar: string;
};
export function Profile({ greeting, name, avatar }: ProfileProps) {
  return (
    <div className="flex items-center justify-between mt-4 ">
      <div className="flex items-start justify-center flex-col">
        <p className=" text-light text-2xl">{greeting}</p>
        <p className="text-light text-xl font-bold">{name}</p>
      </div>
      <img src={avatar} alt="Profile" className="w-10 h-10 rounded-full" />
    </div>
  );
}
