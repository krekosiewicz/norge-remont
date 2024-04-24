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
  'mb-[48px]',
  'my-[48px]',
  'mt-[48px]',
  'mr-[calc((100%-4rem)*1/3)]'
]

