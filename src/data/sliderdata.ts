export interface SliderItem {
  id: number;
  title: string;
  description: string;
  image: string;  
  link?: string;   
}

export const sliderItems: SliderItem[] = [
  {
    id: 1,
    title: "اسلاید اول",
    description: "توضیحات کوتاه برای اسلاید اول",
    image: "/images/slider/20241116_154140-min-scaled.jpg",
    link: "/projects/1",
  },
  {
    id: 2,
    title: "اسلاید دوم",
    description: "توضیحات کوتاه برای اسلاید دوم",
    image: "/images/slider/20241116_154140-min-scaled.jpg",
  },
  {
    id: 3,
    title: "اسلاید سوم",
    description: "توضیحات کوتاه برای اسلاید سوم",
    image: "/images/slider/20241116_154140-mn-scaled.jpg",
    link: "/projects/3",
  },
];
