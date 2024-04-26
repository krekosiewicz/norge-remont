import React from 'react'
import Gallery from '@/app/gallery/gallery'
import { images } from '@lib/imageImports'

const GalleryPage: React.FC = () => {
  const sortedImages = images.sort((a, b) => a.number - b.number)

  return (
    <Gallery images={sortedImages}></Gallery>
  );
};

export default GalleryPage;
