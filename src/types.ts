export interface Coupon {
  id: string;
  title: string;
  description: string;
  discountValue?: string; // e.g. "30%" or "2.50€ gespart"
  originalPrice?: number;
  couponPrice?: number;
  code?: string; // PLU code like "312"
  category: 'gutscheine' | 'app' | 'happy' | 'fruehstueck' | 'burger' | 'mccafe';
  expiryDate: string;
  verified: boolean;
  likes: number;
  dislikes: number;
  isAppRequired?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string[]; // array of paragraphs
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
