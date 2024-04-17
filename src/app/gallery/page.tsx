// const getUtilityArbitaryMarginX = (blockNumber: number, marginType: string = 'mx', gapSize: string = '1rem') => {
//   // Determine the margin value
//   const marginValue = `calc((100%-${(blockNumber - 1) * parseFloat(gapSize)}${gapSize.replace(/[0-9.-]/g, '')})*1/${blockNumber})`;
//   // Return the full Tailwind CSS class with arbitrary value
//   return `${marginType}-[${marginValue}]`;
// };

// TODO this is workaround solution, to make it works properly, safelist in next.config.js should be improved
const getUtilityArbitaryMarginX = (blockNumber: number, marginType: string = 'all', gapSize: string = '1rem') => {
  // Determine the margin value
  const marginValue = `calc((100%-${(blockNumber - 1) * parseFloat(gapSize)}${gapSize.replace(/[0-9.-]/g, '')})*1/${blockNumber})`;

  // work around solution to keep JIT and prevent purge when dynamic declare arbitary class
  if (marginType === 'all') {
    return [`mx-[${marginValue}]`, `ml-[${marginValue}]`, `mr-[${marginValue}]`];
  }
  // Return the full Tailwind CSS class with arbitrary value
  return `${marginType}-[${marginValue}]`;
};

const getUtilityArbitraryMargin = (blockNumber: number, marginType = 'all', gapSize = '1rem') => {
  const marginValue = `calc((100%-${(blockNumber - 1) * parseFloat(gapSize)}${gapSize.replace(/[0-9.-]/g, '')})*1/${blockNumber})`;
  if (marginType === 'all') {
    return {
      mx: `mx-[${marginValue}]`,
      my: `my-[${marginValue}]`,
      ml: `ml-[${marginValue}]`,
      mr: `mr-[${marginValue}]`,
      mt: `mt-[${marginValue}]`,
      mb: `mb-[${marginValue}]`
    };
  }
  return `${marginType}-[${marginValue}]`;
};

// const margins = [
//   getUtilityArbitraryMargin(0, 'all', '2rem' ),
//   getUtilityArbitraryMargin(1, 'all', '2rem' ),
//   getUtilityArbitraryMargin(2, 'all', '2rem' ),
//   getUtilityArbitraryMargin(3, 'all', '2rem' ),
//   getUtilityArbitraryMargin(4, 'all', '2rem' ),
//   getUtilityArbitraryMargin(5, 'all', '2rem' ),
//   getUtilityArbitraryMargin(6, 'all', '2rem' ),
//   getUtilityArbitraryMargin(7, 'all', '2rem' ),
//   getUtilityArbitraryMargin(8, 'all', '2rem' ),
//   getUtilityArbitraryMargin(9, 'all', '2rem' ),
//   getUtilityArbitraryMargin(10, 'all', '2rem')
// ];

// const flattenedMargins = margins.flatMap(margin => Object.values(margin));
// console.log(flattenedMargins)


// TODO this is workaround solution, to make it works properly, safelist in next.config.js should be improved
const cachedClassSoItNotPurgedByTailwind = [getUtilityArbitaryMarginX(5), getUtilityArbitaryMarginX(8)].flat();
const a = [
  'mx-[calc((100%-2rem)*1/3)]',
  'my-[calc((100%-2rem)*1/3)]',
  'ml-[calc((100%-2rem)*1/3)]',
  'mr-[calc((100%-2rem)*1/3)]',
  'mt-[calc((100%-2rem)*1/3)]',
  'mb-[calc((100%-2rem)*1/3)]',
  'mx-[calc((100%-3rem)*1/4)]',
  'my-[calc((100%-3rem)*1/4)]',
  'ml-[calc((100%-3rem)*1/4)]',
  'mr-[calc((100%-3rem)*1/4)]',
  'mt-[calc((100%-3rem)*1/4)]',
  'mb-[calc((100%-3rem)*1/4)]',
  'mx-[calc((100%-4rem)*1/5)]',
  'my-[calc((100%-4rem)*1/5)]',
  'ml-[calc((100%-4rem)*1/5)]',
  'mr-[calc((100%-4rem)*1/5)]',
  'mt-[calc((100%-4rem)*1/5)]',
  'mb-[calc((100%-4rem)*1/5)]',
  'mx-[calc((100%-5rem)*1/6)]',
  'my-[calc((100%-5rem)*1/6)]',
  'ml-[calc((100%-5rem)*1/6)]',
  'mr-[calc((100%-5rem)*1/6)]',
  'mt-[calc((100%-5rem)*1/6)]',
  'mb-[calc((100%-5rem)*1/6)]',
  'mx-[calc((100%-6rem)*1/7)]',
  'my-[calc((100%-6rem)*1/7)]',
  'ml-[calc((100%-6rem)*1/7)]',
  'mr-[calc((100%-6rem)*1/7)]',
  'mt-[calc((100%-6rem)*1/7)]',
  'mb-[calc((100%-6rem)*1/7)]',
  'mx-[calc((100%-7rem)*1/8)]',
  'my-[calc((100%-7rem)*1/8)]',
  'ml-[calc((100%-7rem)*1/8)]',
  'mr-[calc((100%-7rem)*1/8)]',
  'mt-[calc((100%-7rem)*1/8)]',
  'mb-[calc((100%-7rem)*1/8)]',
  'mx-[calc((100%-8rem)*1/9)]',
  'my-[calc((100%-8rem)*1/9)]',
  'ml-[calc((100%-8rem)*1/9)]',
  'mr-[calc((100%-8rem)*1/9)]',
  'mt-[calc((100%-8rem)*1/9)]',
  'mb-[calc((100%-8rem)*1/9)]',
  'mx-[calc((100%-9rem)*1/10)]',
  'my-[calc((100%-9rem)*1/10)]',
  'ml-[calc((100%-9rem)*1/10)]',
  'mr-[calc((100%-9rem)*1/10)]',
  'mt-[calc((100%-9rem)*1/10)]',
  'mb-[calc((100%-9rem)*1/10)]',
  'mx-[calc((100%-0rem)*1/1)]',
  'my-[calc((100%-0rem)*1/1)]',
  'ml-[calc((100%-0rem)*1/1)]',
  'mr-[calc((100%-0rem)*1/1)]',
  'mt-[calc((100%-0rem)*1/1)]',
  'mb-[calc((100%-0rem)*1/1)]',
  'mx-[calc((100%-2rem)*1/2)]',
  'my-[calc((100%-2rem)*1/2)]',
  'ml-[calc((100%-2rem)*1/2)]',
  'mr-[calc((100%-2rem)*1/2)]',
  'mt-[calc((100%-2rem)*1/2)]',
  'mb-[calc((100%-2rem)*1/2)]',
  'mx-[calc((100%-4rem)*1/3)]',
  'my-[calc((100%-4rem)*1/3)]',
  'ml-[calc((100%-4rem)*1/3)]',
  'mr-[calc((100%-4rem)*1/3)]',
  'mt-[calc((100%-4rem)*1/3)]',
  'mb-[calc((100%-4rem)*1/3)]',
  'mx-[calc((100%-6rem)*1/4)]',
  'my-[calc((100%-6rem)*1/4)]',
  'ml-[calc((100%-6rem)*1/4)]',
  'mr-[calc((100%-6rem)*1/4)]',
  'mt-[calc((100%-6rem)*1/4)]',
  'mb-[calc((100%-6rem)*1/4)]',
  'mx-[calc((100%-8rem)*1/5)]',
  'my-[calc((100%-8rem)*1/5)]',
  'ml-[calc((100%-8rem)*1/5)]',
  'mr-[calc((100%-8rem)*1/5)]',
  'mt-[calc((100%-8rem)*1/5)]',
  'mb-[calc((100%-8rem)*1/5)]',
  'mx-[calc((100%-10rem)*1/6)]',
  'my-[calc((100%-10rem)*1/6)]',
  'ml-[calc((100%-10rem)*1/6)]',
  'mr-[calc((100%-10rem)*1/6)]',
  'mt-[calc((100%-10rem)*1/6)]',
  'mb-[calc((100%-10rem)*1/6)]',
  'mx-[calc((100%-12rem)*1/7)]',
  'my-[calc((100%-12rem)*1/7)]',
  'ml-[calc((100%-12rem)*1/7)]',
  'mr-[calc((100%-12rem)*1/7)]',
  'mt-[calc((100%-12rem)*1/7)]',
  'mb-[calc((100%-12rem)*1/7)]',
  'mx-[calc((100%-14rem)*1/8)]',
  'my-[calc((100%-14rem)*1/8)]',
  'ml-[calc((100%-14rem)*1/8)]',
  'mr-[calc((100%-14rem)*1/8)]',
  'mt-[calc((100%-14rem)*1/8)]',
  'mb-[calc((100%-14rem)*1/8)]',
  'mx-[calc((100%-16rem)*1/9)]',
  'my-[calc((100%-16rem)*1/9)]',
  'ml-[calc((100%-16rem)*1/9)]',
  'mr-[calc((100%-16rem)*1/9)]',
  'mt-[calc((100%-16rem)*1/9)]',
  'mb-[calc((100%-16rem)*1/9)]',
  'mx-[calc((100%-18rem)*1/10)]',
  'my-[calc((100%-18rem)*1/10)]',
  'ml-[calc((100%-18rem)*1/10)]',
  'mr-[calc((100%-18rem)*1/10)]',
  'mt-[calc((100%-18rem)*1/10)]',
  'mb-[calc((100%-18rem)*1/10)]'

]


const Gallery: React.FC = () => {

  return (
    <div className={`px-8 py-24 bg-gold-100 min-h-screen flex justify-center lg:overflow-auto h-[calc(3200px)] lg:h-auto`}>
      <div className={'relative w-full h-auto max-w-6xl '}>
        <div className={'grid grid-cols-12 grid-rows-auto-fill-gallery lg:grid-cols-auto-fill-gallery lg:grid-rows-12 gap-4 lg:w-screen h-full lg:absolute top-0 left-0 lg:gap-8'}>
          <div className={`col-start-4 col-end-10 row-start-1 row-end-6 lg:col-start-2 lg:col-end-[6] lg:row-start-1 lg:row-end-[7] bg-green-500 mb-[5vw] lg:mb-[calc((100%-10rem)*1/6)]`}></div>
          <div className={`col-start-1 col-end-7 row-start-5 row-end-[10] bg-green-500 mt-[5vw]`}></div>
          <div className={`col-start-8 col-end-13 row-start-5 row-end-[11] bg-green-500 ${getUtilityArbitraryMargin(5, 'ml')} my-[5vw]`}></div>
          {/*<div className={`col-start-2 col-end-[11] row-start-[10] row-end-[16] bg-green-500 ${getUtilityArbitraryMargin(9, 'mx')} mt-[5vw]`}></div>*/}
          {/*<div className={`col-start-6 col-end-[13] row-start-[16] row-end-[21] bg-red-500 ${getUtilityArbitraryMargin(7, 'ml')} mt-[5vw]`}></div>*/}
          {/*<div className={`col-start-2 col-end-[7] row-start-[19] row-end-[24] bg-red-500 ${getUtilityArbitraryMargin(5, 'mr')}`}></div>*/}
          {/*<div className={`col-start-7 col-end-[12] row-start-[21] row-end-[26] bg-red-500 ${getUtilityArbitraryMargin(5, 'mx')}`}></div>*/}
          {/*<div className={`col-start-2 col-end-[7] row-start-[25] row-end-[29] bg-green-500 mt-[5vw]`}></div>*/}
          {/*<div className={`col-start-8 col-end-[13] row-start-[26] row-end-[31] bg-red-500 ${getUtilityArbitraryMargin(5, 'mr')}`}></div>*/}
          {/*<div className={`col-start-3 col-end-[8] row-start-[30] row-end-[36] bg-green-500 ${getUtilityArbitraryMargin(5, 'mr')} my-[5vw]`}></div>*/}
          {/*<div className={`col-start-7 col-end-[12] row-start-[32] row-end-[37] bg-green-500 ${getUtilityArbitraryMargin(5, 'ml')}`}></div>*/}
          {/*<div className={`col-start-2 col-end-[9] row-start-[37] row-end-[42] bg-green-500 ${getUtilityArbitraryMargin(7, 'mr')} mb-[5vw]`}></div>*/}
          {/*<div className={`col-start-8 col-end-[13] row-start-[37] row-end-[43] bg-green-500 ${getUtilityArbitraryMargin(5, 'ml')} my-[5vw]`}></div>*/}
          {/*<div className={`col-start-1 col-end-[13] row-start-[43] row-end-[52] bg-green-500`}></div>*/}
        </div>
      </div>

      {/* Content goes here */}
    </div>
  );
};

export default Gallery;