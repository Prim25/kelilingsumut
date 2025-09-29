"use client";

import {
  ReactNode,
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";

type Destination = {
  id: number;
  title: string;
  description: string;
};

type Article = {
  id: number;
  image: string;
  category: string;
  title: string; // judul utama artikel
  date: string;
  readingTime: string;
  mainIntro: string;
  secIntro: string;
  destinations?: Destination[]; // opsional
  outro?: string;
};

type ArticleContextType = {
  articles: Article[];
  getArticleById: (id: string) => Article | undefined; // tanya
};
export const ArticleContext = createContext<ArticleContextType | undefined>(
  undefined
);

export function ArticleProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]); //tanya

  const getDatArticle = async () => {
    try {
      const ress = await fetch("/data/articles.json");
      const data = await ress.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDatArticle();
  }, []);

  const getArticleById = (id: string) => {
    return articles.find((article) => article.id.toString() === id);
  };

  return (
    <ArticleContext.Provider value={{ articles, getArticleById }}>
      {children}
    </ArticleContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticles harus digunakan di dalam ArticleProvider");
  }
  return context;
}
