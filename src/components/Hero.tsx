import { Profile } from "./Profile";
import Verse from "./Verse";
import photo from "../assets/photo.png";

function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-60 bg-[url('/src/assets/hero.png')] bg-cover bg-center bg-no-repeat rounded-b-2xl"></div>
      <div className="relative z-10 px-5 pt-8 flex flex-col gap-8">
        <Profile greeting="Good Evening" name="Fadhil" avatar={photo} />
        <Verse
          verse="He said: 'Therein you shall live, and therein you shall die, and from it you shall  be brought out (i.e. resurrected).'"
          surah="AL-A'raaf (7:25)'"
        />
      </div>
    </div>
  );
}
export default Hero;
