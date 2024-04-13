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


// TODO this is workaround solution, to make it works properly, safelist in next.config.js should be improved
const cachedClassSoItNotPurgedByTailwind = [getUtilityArbitaryMarginX(5), getUtilityArbitaryMarginX(8)].flat();
// const a = [
//   'mx-[calc((100%-4rem)*1/5)]',
//   'ml-[calc((100%-4rem)*1/5)]',
//   'mr-[calc((100%-4rem)*1/5)]',
//   'mx-[calc((100%-7rem)*1/8)]',
//   'ml-[calc((100%-7rem)*1/8)]',
//   'mr-[calc((100%-7rem)*1/8)]'
// ]

const Gallery: React.FC = () => {

  return (
    <div className={`px-8 py-24 bg-gold-100 min-h-screen flex justify-center lg:overflow-auto`}>
      <div className={'relative w-full h-auto max-w-6xl '}>
        <div className={'grid grid-cols-12 grid-rows-auto-fill-1rem gap-4 lg:w-screen h-full lg:absolute top-0 left-0'}>
          <div className="col-start-4 col-end-10 row-start-1 row-end-7 bg-green-500 mb-4"></div>
          <div className="col-start-1 col-end-7 row-start-6 row-end-[11] bg-green-500 mt-4"></div>
          <div className={`col-start-8 col-end-13 row-start-6 row-end-[12] bg-green-500 ${getUtilityArbitaryMarginX(5, 'ml')} mt-4 mb-4`}></div>
          <div className={`col-start-2 col-end-[11] row-start-[11] row-end-[17] bg-green-500 ${getUtilityArbitaryMarginX(8, 'mx')} mt-4`}></div>

          <div className={'bg-red-500'}></div>
          <div className={'bg-red-500'}></div>
          <div className={'bg-red-500'}></div>
          <div className={'bg-red-500'}></div>
          <div className={'bg-red-500'}></div>
          <div className={'bg-red-500'}></div>
        </div>
      </div>

      {/* Content goes here */}
    </div>
  );
};

export default Gallery;