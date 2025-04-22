import DarkModeToggle from "./DarkModeToggle";

type ProfileProps = {
  greeting: string;
  name: string;
  avatar: string;
};
export function Profile({ greeting, name, avatar }: ProfileProps) {
  return (
    <div className="flex flex-col justify-between mt-0.5 gap-2">
      <div className="flex justify-end gap-2">
        <DarkModeToggle />
      </div>
      <div className="flex items-center justify-between px-4 py-2 rounded-2xl text-light">
        <div className="flex flex-col items-start justify-center gap-2">
          <p className=" text-light text-2xl">{greeting}</p>
          <p className="text-light text-xl font-bold">{name}</p>
        </div>
        <img src={avatar} alt="Profile" className="w-20 h-20 rounded-full" />
      </div>
    </div>
  );
}
