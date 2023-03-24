import { Types } from "mongoose";

type CountryType = {
  flag: string;
  name: { common: string };
  currencies: {
    [key: string]: { name: string; label: string; }
  };
  languages: {
    [key: string]: string;
  };
  timezones: string[];
  prices: {
    item_name: string;
    avg: number;
  }[];
};

type UserType = {
  _id: Types.ObjectId;
  email: string;
  starredArticles: ArticleType[];
};
