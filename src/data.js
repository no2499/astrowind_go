import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '創業格言',
      href: '/mme/about',
    },
    {
      text: '理事長的話',
      href: '/aboutboss',
    },
    {
      text: '最新消息',
      href: '/mme/news',
    },
    {
      text: '活動花絮',
      links: [
        {
          text: '建構中',
          href: getPermalink('/landing/saas'),
        },
      ],
    },
    {
      text: '檔案下載',
      href: '#',
    },
    {
      text: '分析師名單',
      href: '#',
    },
    {
      text: '#',
      links: [
        {
          text: 'Features',
          href: '#',
        },
        {
          text: 'Pricing',
          href: '#',
        },
        {
          text: 'About us',
          href: '#',
        },
        {
          text: 'Contact',
          href: '#',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: '所有文章',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: '線上報名', href: '#' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: '聯絡我們',
      links: [
        { text: '電話 02-2322-5018', href: '#' },
        { text: '傳真 02-2321-5506', href: '#' },
        { text: '台北市中正區重慶南路二段57-2號9樓', href: '#' },
      ],
    },
    {
      title: '各地駐點',
      links: [
        { text: '台北市(MME)', href: '#' },
        { text: '香港研究團隊', href: '#' },
        { text: '廈門', href: '#' },
        { text: '貴陽', href: '#' },
        { text: '福建', href: '#' },
        { text: '廣州', href: '#' },
        { text: '濟康(上海、威海、新疆、蘇州)', href: '#' },
      ],
    },
    {
      title: '快速連結',
      links: [
        { text: '創業格言', href: '#' },
        { text: '理事長的話', href: '#' },
        { text: '最新消息', href: '#' },
        { text: '活動花絮', href: '#' },
      ],
    },
    {
      title: '相關資源',
      links: [
        { text: '檔案下載', href: '#' },
        { text: '分析師名單', href: '#' },
        { text: '所有文章', href: '#' },
        { text: '線上報名', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '', href: getPermalink('/terms') },
    { text: '', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    
    MME 2023 · All rights reserved.
  `,
};
