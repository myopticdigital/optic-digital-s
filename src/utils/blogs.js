// Blog metadata configuration with team members as authors

const authors = [
  {
    name: "Abraham Segun",
    image: "/worker1.jpg"
  },
  {
    name: "Obafemi Abel",
    image: "/worker2.jpg"
  },
  {
    name: "Olaniyan John",
    image: "/worker3.jpg"
  }
];

// Helper to get author by index (rotates through authors)
const getAuthor = (index) => authors[index % authors.length];

export const blogs = [
  {
    id: "tiktok-ban-analysis",
    title: "The TikTok Ban: Political Moves, Digital Consequences, and Global Ripples",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "January 17, 2025",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
    file: "tiktok-ban-analysis.md"
  },
  {
    id: "social-media-2025",
    title: "Social Media is Changing in 2025: Are You Ready for the New Wave?",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "January 14, 2025",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    file: "social-media-2025.md"
  },
  {
    id: "exceptional-client-service",
    title: "How Exceptional Client Service Can Set You Apart in a Crowded Market",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "September 12, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    file: "exceptional-client-service.md"
  },
  {
    id: "psychology-of-conversion",
    title: "The Psychology of Conversion: How to Nudge Customers Towards Purchase",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "September 4, 2024",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=800&q=80",
    file: "psychology-of-conversion.md"
  },
  {
    id: "future-of-work-marketing",
    title: "The Future of Work: How Digital Marketing is Adapting",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "August 8, 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    file: "future-of-work-marketing.md"
  },
  {
    id: "short-form-video-marketing",
    title: "How Short Form Video is Changing the Digital Marketing Frontier",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "July 31, 2024",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
    file: "short-form-video-marketing.md"
  },
  {
    id: "privacy-personalization-balance",
    title: "How To Strike The Right Balance Between Privacy and Personalisation",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "July 23, 2024",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    file: "privacy-personalization-balance.md"
  },
  {
    id: "essential-marketing-keywords",
    title: "Essential Keywords Every Digital Marketer Should Know",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "July 17, 2024",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80",
    file: "essential-marketing-keywords.md"
  },
  {
    id: "clickworthy-headlines",
    title: "The Clickbait is Dead: Crafting Headlines that Captivate Without Being Cheesy",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "July 9, 2024",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    file: "clickworthy-headlines.md"
  },
  {
    id: "roi-of-curiosity",
    title: "The ROI of Curiosity: Why Digital Marketing Keeps Me Hooked",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "July 3, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    file: "roi-of-curiosity.md"
  },
  {
    id: "analytics-killer-campaigns",
    title: "How to Use Analytics to Craft Killer Digital Marketing Campaigns",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "June 25, 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    file: "analytics-killer-campaigns.md"
  },
  {
    id: "ethical-ugc-considerations",
    title: "Beyond the Hype: The Ethical Considerations of User-Generated Content",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "June 21, 2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    file: "ethical-ugc-considerations.md"
  },
  {
    id: "ai-reshaping-marketing",
    title: "The Rise of the Machines: How AI is Reshaping Digital Marketing",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "June 12, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    file: "ai-reshaping-marketing.md"
  },
  {
    id: "content-repurposing-strategy",
    title: "The Art of Content Repurposing: Maximize Your Marketing Impact",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "May 29, 2024",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    file: "content-repurposing-strategy.md"
  },
  {
    id: "evolving-digital-marketing",
    title: "The Ever-Evolving Landscape of Digital Marketing: Embracing Change for Growth",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "May 23, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    file: "evolving-digital-marketing.md"
  },
  {
    id: "debunking-marketing-myths",
    title: "Debunking Digital Marketing Myths: Let's Set the Record Straight",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c4d9?auto=format&fit=crop&w=800&q=80",
    file: "debunking-marketing-myths.md"
  },
  {
    id: "myth-digital-marketing-guru",
    title: "The Myth of the Digital Marketing Guru: Why Collaboration is Key",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "May 7, 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    file: "myth-digital-marketing-guru.md"
  },
  {
    id: "rise-of-micro-influencers",
    title: "The Rise of Micro-Influencers: Why They Matter and How to Partner with Them",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "May 3, 2024",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
    file: "rise-of-micro-influencers.md"
  },
  {
    id: "creative-content-strategies",
    title: "3 Creative Content Strategies for Busy Digital Marketers",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "April 23, 2024",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    file: "creative-content-strategies.md"
  },
  {
    id: "interactive-content-king",
    title: "The Future of Engagement: Why Interactive Content is King in Digital Marketing",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "April 16, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    file: "interactive-content-king.md"
  },
  {
    id: "lurker-to-leader-social-media",
    title: "From Lurker to Leader: Mastering Social Media Engagement for Professionals",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "April 8, 2024",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
    file: "lurker-to-leader-social-media.md"
  },
  {
    id: "conquering-digital-jungle",
    title: "Conquering the Digital Jungle: 5 Hacks to Level Up Your Marketing Game",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "April 2, 2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    file: "conquering-digital-jungle.md"
  },
  {
    id: "personalization-digital-marketing",
    title: "The Future of Digital Marketing: Personalisation or Bust",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "March 27, 2024",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=800&q=80",
    file: "personalization-digital-marketing.md"
  },
  {
    id: "future-influencer-marketing",
    title: "The Future of Influencer Marketing: Authenticity Over Hype",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "March 26, 2024",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
    file: "future-influencer-marketing.md"
  },
  {
    id: "digital-marketing-beyond-likes",
    title: "Why Digital Marketing is More Than Just Likes and Shares",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "March 20, 2024",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c4d9?auto=format&fit=crop&w=800&q=80",
    file: "digital-marketing-beyond-likes.md"
  },
  {
    id: "skyrocket-business-online",
    title: "10 Actionable Steps to Skyrocket Your Business Online in 30 Days",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "February 26, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    file: "skyrocket-business-online.md"
  },
  {
    id: "struggling-digital-industry",
    title: "Why You're Struggling in the Digital Industry",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "February 20, 2024",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    file: "struggling-digital-industry.md"
  },
  {
    id: "ai-human-reasoning-harmony",
    title: "The Harmony of AI and Human Reasoning: Key to Digital Industry Success",
    author: getAuthor(0).name,
    authorImage: getAuthor(0).image,
    date: "February 16, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    file: "ai-human-reasoning-harmony.md"
  },
  {
    id: "10-challenges-creatives",
    title: "10 Challenges Faced by Creatives and How To Overcome Them",
    author: getAuthor(1).name,
    authorImage: getAuthor(1).image,
    date: "February 5, 2024",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
    file: "10-challenges-creatives.md"
  },
  {
    id: "10-productivity-tips",
    title: "10 Productivity Tips to Elevate Your Team",
    author: getAuthor(2).name,
    authorImage: getAuthor(2).image,
    date: "February 1, 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    file: "10-productivity-tips.md"
  }
];

export default blogs;