import { CgChevronRight } from "react-icons/cg";
import { Surah } from "../../types/surah";
import { useState } from "react";
import DetailSurahInfoModal from "../DetailSurah/DetailSurahInfoModal";

type DetailSurahInfoProps = {
  surah: Surah;
};

function DetailSurahInfo({ surah }: DetailSurahInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[url('/src/assets/hero.png')] relative bg-cover bg-no-repeat py-5 px-4 rounded-2xl text-light text-left ">
      <div className="mb-8 flex flex-col gap-2">
        <p className="font-bold text-2xl">{surah.namaLatin}</p>
        <p className="font-light text-sm">{surah.arti}</p>
        <hr className="opacity-10" />
        <p className="font-semibold text-sm">
          {surah.tempatTurun} * {surah.jumlahAyat} Ayat
        </p>
      </div>
      <div className="flex items-center justify-between bg-accent-light-purple px-3 py-1 absolute bottom-0 left-0 w-full rounded-b-2xl">
        <p className="font-bold">Tentang Surah {surah.namaLatin}</p>
        <CgChevronRight className="text-light" onClick={openModal} />
        {/* <p className="font-light text-sm">{surah.deskripsi}</p> */}
      </div>
      <DetailSurahInfoModal
        surah={surah}
        onClose={closeModal}
        isOpen={isModalOpen}
      />
    </div>
  );
}
export default DetailSurahInfo;
