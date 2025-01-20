import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import { FooterDataType } from "@/types/footer";

export const footerData: FooterDataType = {
  companyName: "SHOP.CO",
  description:
    "We have clothes that suit your style and which you're proud to wear. From women to men.",
  socialIcons: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Github", href: "#", icon: Github },
  ],
  footerCards: [
    {
      title: "Company",
      links: ["About", "Our Team", "Careers", "Press"],
    },
    {
      title: "Products",
      links: ["New Arrivals", "Best Sellers", "Sale", "Collections"],
    },
    {
      title: "Support",
      links: ["FAQs", "Shipping & Returns", "Contact Us", "Size Guide"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility"],
    },
  ],
  copyright: "Shop.co © 2000-2023, All Rights Reserved",
  paymentMethods: [
    "/images/visa.png",
    "/images/Mastercard.png",
    "/images/GPay.png",
    "/images/Paypal.png",
    "/images/pay.png",
  ],
};

