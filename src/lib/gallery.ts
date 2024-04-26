
// // lib/gallery.ts
// import fs from 'fs';
// import path from 'path';
//
// const galleryDirectory = path.join(process.cwd(), 'public', 'assets', 'gallery');
//
// export function geStatictSortedImagesData() {
//   // Get file names under /public/assets/gallery
//   const fileNames = fs.readdirSync(galleryDirectory);
//
//   const allImagesData = fileNames.map(fileName => {
//     // Remove file extension and extract the number for sorting
//     const id = fileName.replace(/\.png$/, '');
//     const number = parseInt(id, 10);
//     const alt = fileName.replace(/-\d+\.png$/, '').replace(/-/g, ' ');
//
//
//     // Combine the data with the id
//     return {
//       id,
//       src: `/assets/gallery/${fileName}`,
//       alt,
//       number,
//     };
//   });
//
//   // Sort images by number
//   return allImagesData.sort((a, b) => a.number - b.number);
// }
//
// export interface GalleryImageProps {
//   id: string;
//   src: any;
//   alt: string;
//   number: number;
//   // You can add more props as needed for styling, like order, etc.
// }
//