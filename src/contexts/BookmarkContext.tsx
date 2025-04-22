// src/contexts/BookmarkContext.tsx
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type BookmarkContextType = {
  readSurahs: number[];
  toggleReadStatus: (surahId: number) => void;
  isRead: (surahId: number) => boolean;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [readSurahs, setReadSurahs] = useState<number[]>(() => {
    const saved = localStorage.getItem("readSurahs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("readSurahs", JSON.stringify(readSurahs));
  }, [readSurahs]);

  const toggleReadStatus = (surahId: number) => {
    setReadSurahs((prev) => {
      if (prev.includes(surahId)) {
        return prev.filter((id) => id !== surahId);
      } else {
        return [...prev, surahId];
      }
    });
  };

  const isRead = (surahId: number) => {
    return readSurahs.includes(surahId);
  };

  return (
    <BookmarkContext.Provider value={{ readSurahs, toggleReadStatus, isRead }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = (): BookmarkContextType => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error("useBookmark must be used within a BookmarkProvider");
  }
  return context;
};
