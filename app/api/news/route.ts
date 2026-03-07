import { NextResponse } from 'next/server'

const FEEDS = [
  { url: 'https://taxguru.in/feed/', source: 'Tax Guru' },
  { url: 'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3', source: 'PIB Finance' },
]

function extractCDATA(str: string): string {
  return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim()
}

function getTagContent(item: string, tag: string): string {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))
  return match ? extractCDATA(match[1]).trim() : ''
}

function parseRSS(xml: string, source: string) {
  const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || []
  return itemMatches.slice(0, 20).map((item) => {
    const rawDesc = getTagContent(item, 'description')
    const description = rawDesc.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, 220)
    return {
      title: getTagContent(item, 'title'),
      link: getTagContent(item, 'link').replace(/\s/g, ''),
      pubDate: getTagContent(item, 'pubDate'),
      description,
      source,
    }
  })
}

export async function GET() {
  const results = await Promise.allSettled(
    FEEDS.map(async ({ url, source }) => {
      const res = await fetch(url, {
        next: { revalidate: 3600 },
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CA-News-Fetcher/1.0)' },
      })
      if (!res.ok) throw new Error(`Feed ${source} returned ${res.status}`)
      const text = await res.text()
      return parseRSS(text, source)
    })
  )

  const allNews = results
    .filter((r): r is PromiseFulfilledResult<ReturnType<typeof parseRSS>> => r.status === 'fulfilled')
    .flatMap((r) => r.value)
    .filter((item) => item.title)
    .sort((a, b) => {
      const da = a.pubDate ? new Date(a.pubDate).getTime() : 0
      const db = b.pubDate ? new Date(b.pubDate).getTime() : 0
      return db - da
    })

  return NextResponse.json(allNews)
}
