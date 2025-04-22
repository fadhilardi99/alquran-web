import { useState, useEffect } from "react";
import SurahList from "./SurahList";
import type { Surah } from "../../types/surah";
import Search from "../Search";

function SurahContainer() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [filteredSurahs, setFilteredSurahs] = useState<Surah[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("https://equran.id/api/v2/surat");
        if (!response.ok) {
          throw new Error("Failed to fetch surahs");
        }
        const data = await response.json();
        setSurahs(data.data);
        setFilteredSurahs(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
        setIsLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      setFilteredSurahs(surahs);
      return;
    }

    const filtered = surahs.filter(
      (surah) =>
        surah.namaLatin.toLowerCase().includes(query.toLowerCase()) ||
        surah.arti.toLowerCase().includes(query.toLowerCase()) ||
        surah.nama.includes(query) ||
        surah.nomor.toString() === query
    );

    setFilteredSurahs(filtered);
  };

  if (isLoading) {
    return <p className="text-center text-light p-5">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 p-5">{error}</p>;
  }

  return (
    <>
      <Search onSearch={handleSearch} />
      {/* <SurahList surahs={surahs} /> */}
      <SurahList surahs={filteredSurahs} />
    </>
  );
}

export default SurahContainer;
