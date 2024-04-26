import image1 from '../../public/assets/gallery/1.png';
import image10 from '../../public/assets/gallery/10.png';
import image11 from '../../public/assets/gallery/11.png';
import image12 from '../../public/assets/gallery/12.png';
import image13 from '../../public/assets/gallery/13.png';
import image14 from '../../public/assets/gallery/14.png';
import image2 from '../../public/assets/gallery/2.png';
import image3 from '../../public/assets/gallery/3.png';
import image4 from '../../public/assets/gallery/4.png';
import image5 from '../../public/assets/gallery/5.png';
import image6 from '../../public/assets/gallery/6.png';
import image7 from '../../public/assets/gallery/7.png';
import image8 from '../../public/assets/gallery/8.png';
import image9 from '../../public/assets/gallery/9.png';

export interface GalleryImageProps {
  id: string;
  src: any;
  alt: string;
  number: number;
}
export const images: GalleryImageProps[] = [
  {
    id: '1',
    src: image1,
    alt: 'alt-placeholder',
    number: 1,
  },
  {
    id: '10',
    src: image10,
    alt: 'alt-placeholder',
    number: 10,
  },
  {
    id: '11',
    src: image11,
    alt: 'alt-placeholder',
    number: 11,
  },
  {
    id: '12',
    src: image12,
    alt: 'alt-placeholder',
    number: 12,
  },
  {
    id: '13',
    src: image13,
    alt: 'alt-placeholder',
    number: 13,
  },
  {
    id: '14',
    src: image14,
    alt: 'alt-placeholder',
    number: 14,
  },
  {
    id: '2',
    src: image2,
    alt: 'alt-placeholder',
    number: 2,
  },
  {
    id: '3',
    src: image3,
    alt: 'alt-placeholder',
    number: 3,
  },
  {
    id: '4',
    src: image4,
    alt: 'alt-placeholder',
    number: 4,
  },
  {
    id: '5',
    src: image5,
    alt: 'alt-placeholder',
    number: 5,
  },
  {
    id: '6',
    src: image6,
    alt: 'alt-placeholder',
    number: 6,
  },
  {
    id: '7',
    src: image7,
    alt: 'alt-placeholder',
    number: 7,
  },
  {
    id: '8',
    src: image8,
    alt: 'alt-placeholder',
    number: 8,
  },
  {
    id: '9',
    src: image9,
    alt: 'alt-placeholder',
    number: 9,
  },
];
