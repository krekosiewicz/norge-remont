const Gallery: React.FC = () => {
  return (
    <div className={`px-8 py-24 bg-gold-100 min-h-screen flex justify-center overflow-auto`}>
      <div className={'relative w-full h-auto max-w-6xl '}>
        <div className={'grid grid-cols-12 grid-auto-rows-[1rem] gap-4 w-screen h-full absolute top-0 left-0'}>
          <div className="col-start-1 col-end-5 row-start-2 row-span-4 bg-green-500 ml-40"></div>
          <div className="col-start-1 col-end-4 row-start-7 row-span-9 bg-green-500"></div>
          <div className={'bg-red-500'}></div>
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