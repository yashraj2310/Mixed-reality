import React from 'react';
import { ShoppingBag } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const RetailPage: React.FC = () => {
  const application = {
    title: "Retail & E-commerce",
    icon: <ShoppingBag className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is transforming the retail experience by bridging the gap between online and physical shopping. MR technologies enable customers to visualize products in their own environments, try on items virtually, and interact with products in ways previously impossible. For retailers, MR offers new ways to engage customers, reduce returns, and create memorable brand experiences that drive sales and loyalty.",
    keyFeatures: [
      "Virtual Try-Ons for clothing, accessories, makeup, and eyewear",
      "Interior Design visualization with virtual furniture placement in real spaces",
      "Enhanced product visualization with interactive 3D models and information overlays",
      "Immersive brand experiences that tell product stories and build emotional connections",
      "Smart store navigation and personalized shopping assistance"
    ],
    sections: [
      {
        title: "Virtual Try-On Solutions",
        content: "Mixed Reality try-on solutions allow customers to see how products look on them without physically trying them on. Virtual mirrors enable shoppers to try different clothing styles, colors, and sizes instantly. AR applications let customers see how glasses frames, jewelry, or makeup would look on their faces. These technologies not only enhance the shopping experience but also reduce return rates by helping customers make more confident purchasing decisions.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Home and Interior Visualization",
        content: "One of the most widely adopted MR retail applications is furniture and home décor visualization. Customers can place virtual furniture in their actual living spaces to see how items fit, how colors match existing décor, and how different products look together. This eliminates the uncertainty of traditional furniture shopping and gives customers the confidence to make larger purchases online without seeing items in person first.",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Interactive Product Experiences",
        content: "Mixed Reality transforms static products into interactive experiences. By scanning products with MR-enabled devices, customers can access detailed information, see demonstrations, view customer reviews, or experience the product's story. For example, scanning a wine bottle might reveal its origin, tasting notes, food pairings, and the winemaking process. These rich experiences create deeper connections between customers and products.",
        image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Smart Retail Environments",
        content: "In physical stores, Mixed Reality is creating smart shopping environments that combine the convenience of online shopping with the tangibility of in-person retail. MR wayfinding helps customers navigate stores and find products. Virtual shopping assistants provide personalized recommendations. Digital price tags update in real-time. These technologies enhance the in-store experience while providing retailers with valuable data about customer behavior and preferences.",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Revolutionizing Eyewear Shopping",
        company: "Vision Innovations",
        description: "Implemented virtual try-on for eyeglasses, increasing online sales by 45% and reducing returns by 25% through more confident purchasing decisions.",
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Transforming Home Furnishing",
        company: "Modern Living",
        description: "Developed MR furniture visualization app that increased conversion rates by 35% and reduced product returns by 22% compared to traditional online shopping.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhancing Cosmetic Sales",
        company: "Beauty Innovations",
        description: "Created virtual makeup try-on experience that increased customer engagement by 78% and drove a 40% increase in online cosmetic sales.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "Virtual Try-On Systems",
      "Spatial Mapping",
      "3D Product Visualization",
      "Face Tracking",
      "Body Measurement",
      "Product Recommendation AI",
      "Customer Analytics"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default RetailPage;