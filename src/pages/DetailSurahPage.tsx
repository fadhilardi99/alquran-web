import { Link } from "react-router-dom";
import DetailSurahContainer from "../components/DetailSurah/DetailSurahContainer";
import { FaArrowLeft } from "react-icons/fa";

function DetailSurahPage() {
  return (
    <>
      <div className="p-5 text-left">
        <Link to="/" className="text-light">
          <div className="flex flex-row items-center gap-3">
            <FaArrowLeft className="text-light" />
            Daftar Surah
          </div>
        </Link>
      </div>
      <DetailSurahContainer />
    </>
  );
}
export default DetailSurahPage;
