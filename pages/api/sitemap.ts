import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')

  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.prompland.com/</loc>
        <lastmod>2023-04-06</lastmod>
      </url>
      <url>
        <loc>https://www.prompland.com/authentication</loc>
        <lastmod>2023-04-06</lastmod>
      </url>
      <url>
        <loc>https://www.prompland.com/sign_up</loc>
        <lastmod>2023-04-06</lastmod>
      </url>
      <url>
        <loc>https://www.prompland.com/about</loc>
        <lastmod>2023-04-14</lastmod>
      </url>
      <url>
        <loc>https://www.prompland.com/privacy</loc>
        <lastmod>2023-04-14</lastmod>
      </url>
      <url>
        <loc>https://www.prompland.com/terms</loc>
        <lastmod>2023-04-14</lastmod>
      </url>
      <url>
        <loc>https://www.prompland.com/for-creators</loc>
        <lastmod>2023-04-15</lastmod>
      </url>
      <url>
        <loc>https://www.prompland.com/for-individuals</loc>
        <lastmod>2023-04-15</lastmod>
      </url>
      <url>
        <loc>https://www.prompland.com/for-companies</loc>
        <lastmod>2023-04-15</lastmod>
      </url>
    </urlset>`

  res.end(xml)
}
