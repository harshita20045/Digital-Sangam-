import { Article } from "../models/article.model.js";

export const createArticle = async (request, response) => {
  try {
    const { title, content } = request.body;
    const author = request.user.id;

    const article = await Article.create({
      title,
      content,
      author,
    });

    return response.status(201).json({ message: "Article Added....", article });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

export const seeArticleByCurrentUser = async (request, response, next) => {
  try {
    let id = request.user.id;
    console.log(id);

    const article = await Article.find({ author: id } );
    if (!article)
      return response.status(400).json({ message: "No article are there" });

    return response
      .status(201)
      .json({ message: "Your Posted Articles", article });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllArticleIncludingUser= async (request,response,next)=>{
   try{
    const articles= await Article.find().populate("author")

    if(!articles)
      return response.status(400).json({message:"Articles are not available"});

    return response.status(201).json({message:"Articles are : ",articles})
   }catch(error){

    console.log(error)
    return response.status(500).json({message:"Internal Server Error"})
   }
}