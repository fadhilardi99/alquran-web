import { Link } from "react-router-dom";
import type { Surah } from "../../types/surah";

type DescriptionWithLinkProps = {
  surah: Surah;
};

const formatDescription = (html: string, maxLength: number) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent || "";
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

function DescriptionWithLink({ surah }: DescriptionWithLinkProps) {
  const shortDescription = formatDescription(surah.deskripsi, 1000);
  return (
    <div className="p-4 border rounded-lg bg-gray-100">
      <h2 className="text-lg font-bold">Deskripsi</h2>
      <p>
        {shortDescription}{" "}
        <Link
          to={`/surah/${surah.nomor}/${surah.deskripsi}`}
          className="text-blue-500 underline"
        >
          {surah.namaLatin}
        </Link>
      </p>
    </div>
  );
}

export default DescriptionWithLink;
