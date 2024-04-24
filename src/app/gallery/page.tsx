'use client'

import { useDragToScroll } from '@/app/gallery/useDragToScroll.hook'

const Gallery: React.FC = () => {
  const { containerRef, onMouseDown, onMouseMove, onMouseUp, onMouseLeave, isGrabbing } = useDragToScroll();

  return (
    <div className={`px-8 py-24 bg-gold-100 min-h-screen flex justify-center h-[2400px] sm:h-[2800px] md:h-[3200px] lg:h-auto scrollable-grab ${isGrabbing ? 'scrollable-grabbing' : ''}`}
         ref={containerRef}
         onMouseDown={onMouseDown}
         onMouseUp={onMouseUp}
         onMouseMove={onMouseMove}
         onMouseLeave={onMouseLeave}>
      <div className={`relative w-full h-auto max-w-6xl lg:flex lg:items-center`}>
        <div className={'grid grid-cols-12 grid-rows-auto-fill-gallery lg:grid-cols-auto-fill-gallery lg:grid-rows-12 gap-4 h-full lg:h-auto top-0 left-0 lg:gap-8'}>
          <div className={`bg-green-500 col-start-4 col-end-10 row-start-1 row-end-6 lg:col-start-2 lg:col-end-[6] lg:row-start-1 lg:row-end-[7] mb-[5vw] lg:mb-[48px]`}></div>
          <div className={`bg-green-500 col-start-1 col-end-7 row-start-5 row-end-[10]  mt-[5vw] lg:col-start-1 lg:col-end-[5] lg:row-start-6 lg:row-end-[12] lg:my-[48px]`}></div>
          <div className={`col-start-8 col-end-13 row-start-5 row-end-[11] bg-green-500 ml-[calc((100%-4rem)*1/5)] my-[5vw] lg:col-start-[6] lg:col-end-[8] lg:row-start-[3] lg:row-end-[8] lg:mx-0 lg:my-0`}></div>
          <div className={`col-start-2 col-end-[11] row-start-[10] row-end-[16] bg-green-500 mx-[calc((100%-8rem)*1/9)] mt-[5vw] lg:col-start-[8] lg:col-end-[13] lg:row-start-[1] lg:row-end-[8] lg:mb-[48px] lg:mt-0 lg:mx-0`}></div>
          <div className={`col-start-6 col-end-[13] row-start-[16] row-end-[21] bg-red-500 ml-[calc((100%-6rem)*1/7)] mt-[5vw] lg:col-start-[8] lg:col-end-[12] lg:row-start-[7] lg:row-end-[13] lg:my-[48px] lg:mx-0`}></div>
          <div className={`col-start-2 col-end-[7] row-start-[19] row-end-[24] bg-red-500 mr-[calc((100%-4rem)*1/5)] lg:col-start-[13] lg:col-end-[15] lg:row-start-[3] lg:row-end-[8] lg:mx-0 lg:my-0`}></div>
          <div className={`col-start-7 col-end-[12] row-start-[21] row-end-[26] bg-red-500 mx-[calc((100%-4rem)*1/5)] lg:col-start-[15] lg:col-end-[17] lg:row-start-[1] lg:row-end-[6] lg:mx-0 lg:my-0`}></div>
          <div className={`col-start-2 col-end-[7] row-start-[25] row-end-[29] bg-green-500 mt-[5vw] lg:col-start-[16] lg:col-end-[19] lg:row-start-[6] lg:row-end-[10] lg:mt-[48px] lg:mr-[calc((100%-4rem)*1/3)]`}></div>
          <div className={`col-start-8 col-end-[13] row-start-[26] row-end-[31] bg-red-500  mr-[calc((100%-4rem)*1/5)] lg:col-start-[17] lg:col-end-[20] lg:row-start-[2] lg:row-end-[7] lg:mt-0 lg:mr-[calc((100%-4rem)*1/3)] mb-[48px] ml-[48px]`}></div>
          <div className={`col-start-3 col-end-[8] row-start-[30] row-end-[36] bg-green-500  mr-[calc((100%-4rem)*1/5)] my-[5vw] lg:col-start-[19] lg:col-end-[22] lg:row-start-[5] lg:row-end-[11] lg:m-0 lg:ml-[calc((100%-4rem)*1/3)] lg:my-[48px]`}></div>
          <div className={`col-start-7 col-end-[12] row-start-[32] row-end-[37] bg-green-500  ml-[calc((100%-4rem)*1/5)]  lg:col-start-[22] lg:col-end-[24] lg:row-start-[5] lg:row-end-[10] lg:m-0 lg:ml-[48px] lg:my-[48px]`}></div>
          <div className={`col-start-2 col-end-[9] row-start-[37] row-end-[42] bg-green-500 mr-[calc((100%-6rem)*1/7)] mb-[5vw] lg:col-start-[19] lg:col-end-[23] lg:row-start-[1] lg:row-end-[6] lg:mr-[48px] lg:ml-[calc((100%-6rem)*1/4)] lg:mb-[48px]`}></div>
          <div className={`col-start-8 col-end-[13] row-start-[37] row-end-[43] bg-green-500 ml-[calc((100%-4rem)*1/5)] my-[5vw] lg:col-start-[24] lg:col-end-[26] lg:row-start-[3] lg:row-end-[8] lg:m-0 lg:mb-[48px]`}></div>
          <div className={`col-start-1 col-end-[13] row-start-[43] row-end-[52] bg-green-500 lg:col-start-[26] lg:col-end-[29] lg:row-start-[4] lg:row-end-[8] lg:m-0`}></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;