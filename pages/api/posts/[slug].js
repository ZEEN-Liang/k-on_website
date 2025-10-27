import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content'); // 指向 content 文件夹

export async function handler(req, res) {
  const { slug } = req.query;  // 获取 URL 中的 slug 参数

  // 确定目标 Markdown 文件路径
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    // 读取 Markdown 文件
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // 使用 remark 解析 Markdown 内容并转换为 HTML
    const processedContent = await remark().use(html).process(fileContent);
    const contentHtml = processedContent.toString();

    // 返回 HTML 内容作为响应
    res.status(200).json({ content: contentHtml });
  } catch (error) {
    res.status(404).json({ error: 'Post not found' });
  }
}

export default handler;
