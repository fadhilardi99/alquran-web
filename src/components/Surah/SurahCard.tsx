import { Link } from "react-router-dom";
import type { Surah } from "../../types/surah";
import Number from "../Number";
import { useBookmark } from "../../contexts/BookmarkContext";
import { FaBookmark } from "react-icons/fa";

type SurahCardProps = {
  surah: Surah;
};

function SurahCard({ surah }: SurahCardProps) {
  const { isRead } = useBookmark();
  const hasBeenRead = isRead(surah.nomor);
  return (
    <Link to={`/surah/${surah.nomor}`}>
      <div className="bg-dark p-4 rounded-lg flex justify-between gap-3 hover:bg-accent transition-all duration-300 ease-in-out  ">
        <div className="flex text-left gap-3">
          <Number nomor={surah.nomor} />
          <div className=" text-light ">
            <p className="flex font-bold text-base dark:text-dark-primary hover:text-dark-primary dark:hover:text-dark ">
              {surah.namaLatin}
              {hasBeenRead && (
                <FaBookmark className="m-1 text-light dark:text-dark-primary hover:text-dark-primary dark:hover:text-dark" />
              )}
            </p>
            <p className="text-light dark:text-dark-primary hover:text-dark-primary dark:hover:text-dark">
              {surah.arti}
            </p>
            <p className=" text-light dark:text-dark-primary hover:text-dark-primary dark:hover:text-dark">
              {surah.tempatTurun} * {surah.jumlahAyat} Ayat
            </p>
          </div>
        </div>
        <p className="font-bold text-3xl text-light dark:text-dark-primary hover:text-dark-primary dark:hover:text-dark">
          {surah.nama}
        </p>
      </div>
    </Link>
  );
}
export default SurahCard;
