export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface INewsResponseModel {
  articles: IArticle[];
  status: string;
  totalResults: number;
}

