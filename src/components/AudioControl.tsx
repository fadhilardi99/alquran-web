import {
  CgPlayButton as PlayIcon,
  CgPlayPause as PauseIcon,
} from "react-icons/cg";

type AudioControlProps = {
  currentReciter: string;
  audioPlaying: boolean;
  changeReciter: (reciterId: string) => void;
  onPlay: () => void;
  onPause: () => void;
};

function AudioControl({
  currentReciter,
  changeReciter,
  audioPlaying,
  onPlay,
  onPause,
}: AudioControlProps) {
  const reciters = [
    { id: "01", name: "Abdullah Al-Juhany" },
    { id: "02", name: "Abdul Muhsin Al-Qasim" },
    { id: "03", name: "Abdurrahman as-Sudais" },
    { id: "04", name: "Ibrahim Al-Dossari" },
    { id: "05", name: "Misyari Rasyid Al-Afasi" },
  ];

  return (
    <div className="flex justify-between gap-4 items-center">
      <select
        value={currentReciter}
        onChange={(e) => changeReciter(e.target.value)}
        className="bg-dark text-light p-3 w-full rounded-lg"
      >
        {reciters.map((reciter) => (
          <option key={reciter.id} value={reciter.id}>
            {reciter.name}
          </option>
        ))}
      </select>

      <div
        className="bg-primary w-9 h-9 rounded-full flex flex-col justify-center items-center cursor-pointer"
        onClick={audioPlaying ? onPause : onPlay}
      >
        {audioPlaying ? (
          // <img src={PauseIcon} alt="Pause Icon" className="w-fit h-fit" />
          <PauseIcon className="w-10 h-10" />
        ) : (
          // <img src={PlayIcon} alt="Play Icon" className="w-fit h-fit" />
          <PlayIcon className="w-10 h-10" />
        )}
      </div>
    </div>
  );
}

export default AudioControl;
