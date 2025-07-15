import { Article } from "../models/article.model.js";

// 👤 USER: Create article (default status: pending)
export const createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user.id;

    const article = await Article.create({ title, content, author });
    return res.status(201).json({ message: "Article submitted for review", article });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// 👤 USER: View own articles (pending/approved/rejected)
export const seeMyArticles = async (req, res) => {
  try {
    const articles = await Article.find({ author: req.user.id });
    return res.status(200).json({ articles });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// 👥 PUBLIC / ADMIN: View only approved articles
export const getAllApprovedArticles = async (req, res) => {
  try {
    const articles = await Article.find({ status: "approved" }).populate("author", "name email");
    return res.status(200).json({ articles });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// 🛡️ ADMIN: Get all pending articles
export const getPendingArticles = async (req, res) => {
  try {
    const articles = await Article.find({ status: "pending" }).populate("author", "name email");
    return res.status(200).json({ articles });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// 🛡️ ADMIN: Approve or Reject article
export const changeArticleStatus = async (req, res) => {
  try {
    const { articleId } = req.params;
    const { status } = req.body; // "approved" or "rejected"

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    await Article.findByIdAndUpdate(articleId, { status });
    return res.status(200).json({ message: `Article ${status} successfully` });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// 🛡️ ADMIN: Delete article
export const deleteArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    await Article.findByIdAndDelete(articleId);
    return res.status(200).json({ message: "Article deleted" });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
