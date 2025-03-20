import { LuBookOpenText } from "react-icons/lu";
type VerseProps = {
  verse: string;
  surah: string;
};

function Verse({ verse, surah }: VerseProps) {
  return (
    <div className="bg-[url('/src/assets/purple.png')] contrast-100 p-4 rounded-2xl  bg-center min-h-[200px] flex flex-col text-left justify-between gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <LuBookOpenText className="text-2xl text-light" />
          <p className="text-xs text-light md:text-base">Your daily verse</p>
        </div>
        <p className="text-sm text-light font-semibold md:text-xl">{verse}</p>
      </div>
      <p className="text-xs text-light font-extralight md:text-xl">{surah}</p>
    </div>
  );
}
export default Verse;
