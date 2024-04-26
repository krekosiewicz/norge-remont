"use client";

import { useDragToScroll } from '@/app/gallery/useDragToScroll.hook'
import React from 'react'
import Image from 'next/image';
import { useModal } from '@/logic/modalContext'
import Link from 'next/link'

interface GalleryImageProps {
  id: string;
  src: any;
  alt: string;
  number: number;
}

const GalleryImage = ({image, className}: {image: GalleryImageProps, className: string}) =>
  <Image draggable={false}
         fill
         quality={100}
         className={`${className} rounded-sm`}
         src={image.src}
         alt={image.alt}
  />

const GalleryGrid: React.FC<{images: GalleryImageProps[]}> = ({images}) => {
  const { showModal, hideModal } = useModal()

    return (
      <>
        <div
          onClick={() => showModal(<GalleryImage image={images[0]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-4 col-end-10 row-start-1 row-end-6 mb-[5vw] bg-gray-100 lg:col-start-2 lg:col-end-[6] lg:row-start-1 lg:row-end-[7] lg:mb-[48px]`}>
          <GalleryImage image={images[0]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[1]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-1 col-end-7 row-start-5 row-end-[10] mt-[5vw]  bg-gray-100 lg:col-start-1 lg:col-end-[5] lg:row-start-6 lg:row-end-[12] lg:my-[48px]`}>
          <GalleryImage image={images[1]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[2]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-8 col-end-13 row-start-5 row-end-[11] my-[5vw] ml-[calc((100%-4rem)*1/5)] bg-gray-100 lg:col-start-[6] lg:col-end-[8] lg:row-start-[3] lg:row-end-[8] lg:mx-0 lg:my-0`}>
          <GalleryImage image={images[2]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[3]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-2 col-end-[11] row-start-[10] row-end-[16] mx-[calc((100%-8rem)*1/9)] mt-[5vw] bg-gray-100 lg:col-start-[8] lg:col-end-[13] lg:row-start-[1] lg:row-end-[8] lg:mx-0 lg:mb-[48px] lg:mt-0`}>
          <GalleryImage image={images[3]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[4]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-6 col-end-[13] row-start-[16] row-end-[21] ml-[calc((100%-6rem)*1/7)] mt-[5vw] bg-gray-100 lg:col-start-[8] lg:col-end-[12] lg:row-start-[7] lg:row-end-[13] lg:mx-0 lg:my-[48px]`}>
          <GalleryImage image={images[4]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[5]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-2 col-end-[7] row-start-[19] row-end-[24] mr-[calc((100%-4rem)*1/5)] bg-gray-100 lg:col-start-[13] lg:col-end-[15] lg:row-start-[3] lg:row-end-[8] lg:mx-0 lg:my-0`}>
          <GalleryImage image={images[5]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[6]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-7 col-end-[12] row-start-[21] row-end-[26] mx-[calc((100%-4rem)*1/5)] bg-gray-100 lg:col-start-[15] lg:col-end-[17] lg:row-start-[1] lg:row-end-[6] lg:mx-0 lg:my-0`}>
          <GalleryImage image={images[6]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[7]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-2 col-end-[7] row-start-[25] row-end-[29] mt-[5vw] bg-gray-100 lg:col-start-[16] lg:col-end-[19] lg:row-start-[6] lg:row-end-[10] lg:mr-[calc((100%-4rem)*1/3)] lg:mt-[48px]`}>
          <GalleryImage image={images[7]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[8]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-8 col-end-[13] row-start-[26] row-end-[31] mb-[48px]  ml-[48px] mr-[calc((100%-4rem)*1/5)] bg-gray-100 lg:col-start-[17] lg:col-end-[20] lg:row-start-[2] lg:row-end-[7] lg:mr-[calc((100%-4rem)*1/3)] lg:mt-0`}>
          <GalleryImage image={images[8]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[9]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-3 col-end-[8] row-start-[30] row-end-[36] my-[5vw]  mr-[calc((100%-4rem)*1/5)] bg-gray-100 lg:col-start-[19] lg:col-end-[22] lg:row-start-[5] lg:row-end-[11] lg:m-0 lg:my-[48px] lg:ml-[calc((100%-4rem)*1/3)]`}>
          <GalleryImage image={images[9]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[10]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-7 col-end-[12] row-start-[32] row-end-[37] ml-[calc((100%-4rem)*1/5)]  bg-gray-100 lg:col-start-[22] lg:col-end-[24] lg:row-start-[5] lg:row-end-[10] lg:m-0 lg:my-[48px] lg:ml-[48px]`}>
          <GalleryImage image={images[10]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[11]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-2 col-end-[9] row-start-[37] row-end-[42] mb-[5vw] mr-[calc((100%-6rem)*1/7)] bg-gray-100 lg:col-start-[19] lg:col-end-[23] lg:row-start-[1] lg:row-end-[6] lg:mb-[48px] lg:ml-[calc((100%-6rem)*1/4)] lg:mr-[48px]`}>
          <GalleryImage image={images[11]} className={'object-cover'}/>

        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[12]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-8 col-end-[13] row-start-[37] row-end-[43] my-[5vw] ml-[calc((100%-4rem)*1/5)] bg-gray-100 lg:col-start-[24] lg:col-end-[26] lg:row-start-[3] lg:row-end-[8] lg:m-0 lg:mb-[48px]`}>
          <GalleryImage image={images[12]} className={'object-cover'}/>
        </div>
        <div
          onClick={() => showModal(<GalleryImage image={images[13]} className={'object-contain'}/>)}
          className={`relative rounded-sm col-start-1 col-end-[13] row-start-[43] row-end-[52] bg-gray-100 lg:col-start-[26] lg:col-end-[29] lg:row-start-[4] lg:row-end-[8] lg:m-0`}
        >
          <GalleryImage image={images[13]} className={'object-cover'}/>
        </div>
        <Link href={"/contact"} className={'text-2xl text-black pt-4 col-start-5 col-end-[9] row-start-[52] row-end-[53] lg:col-start-[1] lg:col-end-[3] lg:row-start-[12] lg:row-end-[13] lg:sticky lg:left-0 lg:bottom-0'}>Contact us</Link>
      </>
    )
  };

const Gallery: React.FC<{images: any}> = ({ images }) => {
  const {
    containerRef,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    isGrabbing,
  } = useDragToScroll();


  return (
    <div
      className={`scrollable-grab flex h-[2400px] min-h-screen justify-center bg-gold-100 px-8 py-24 sm:h-[2800px] md:h-[3200px] lg:h-auto ${isGrabbing ? "scrollable-grabbing" : ""}`}
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`relative h-auto w-full max-w-6xl lg:flex lg:items-center`}
      >
        <div
          className={
            "left-0 top-0 grid h-full grid-cols-12 grid-rows-auto-fill-gallery gap-4 lg:h-auto lg:grid-cols-auto-fill-gallery lg:grid-rows-12 lg:gap-8"
          }
        >
          <GalleryGrid images={images}></GalleryGrid>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
