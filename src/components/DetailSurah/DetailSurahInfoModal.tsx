import type { Surah } from "../../types/surah";

type DetailSurahInfoModalProps = {
  surah: Surah;
  onClose: () => void;
  isOpen: boolean;
};

const formatDescription = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

function DetailSurahInfoModal({
  surah,
  onClose,
  isOpen,
}: DetailSurahInfoModalProps) {
  if (!isOpen) {
    return null;
  }

  const deskripsi = formatDescription(surah.deskripsi);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
      <div className="bg-[url('/src/assets/hero.png')] rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">{surah.namaLatin}</h2>
        <p className="overflow-y-auto max-h-84 mb-4">{deskripsi}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DetailSurahInfoModal;
