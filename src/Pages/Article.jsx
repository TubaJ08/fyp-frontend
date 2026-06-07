import React from "react";
import { useParams } from "react-router-dom";
import plumbingImg from "../assets/blog/plumbing.jpeg";
import electricImg from "../assets/blog/elec.png";
import cleaningImg from "../assets/blog/spring.jpeg";

const dummyArticles = [
  {
    _id: "1",
    title: "5 Signs You Need Emergency Plumbing Services",
    date: "March 15, 2024",
    image: plumbingImg,
    content: `Here are 5 signs to watch for:
    
1. Constant dripping sounds...
2. Water stains on the wall...
3. Sudden drop in pressure...
4. Gurgling drains...
5. Smell of sewage...
    
Call a plumber before it becomes an emergency!`,
  },
  {
    _id: "2",
    title: "Electrical Safety Tips Every Homeowner Should Know",
    date: "March 12, 2024",
    image: electricImg,
    content: "Always unplug devices when not in use. Check for frayed wires. Keep outlets dry. Use GFCI outlets near water. Safety first!",
  },
  {
    _id: "3",
    title: "Spring Cleaning Checklist: Room by Room Guide",
    date: "March 10, 2024",
    image: cleaningImg,
    content: "Start with bedrooms, move to kitchen, then living areas. Don't forget baseboards, fans, and windows!",
  },
];

const Article = () => {
  const { id } = useParams();
  const article = dummyArticles.find((a) => a._id === id);

  if (!article) return <div className="p-10 text-center">Article not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
      <img src={article.image} alt={article.title} className="w-full rounded-md mb-6" />
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{article.content}</p>
    </div>
  );
};

export default Article;
