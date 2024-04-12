import Link from 'next/link'

const Offer: React.FC = () => {
  return (
    <div className={`px-8 py-24 bg-green-50 min-h-screen flex justify-center`}>
      <article className={'flex flex-col justify-center max-w-6xl'}>
        <p className={'text-xl sm:text-2xl md:text-4xl leading-normal tracking-widest my-12'}>Our offer includes
          high-pressure washing of various surfaces and elevations, reliable and efficient washing of the façade, which
          can also be combined with painting.</p>
        <p className={'text-xl sm:text-2xl md:text-4xl leading-normal tracking-widest  mb-12'}>We clean surfaces of
          stone, brick, wood of dirt, moss, dust. We offer various types of roof washing and impregnation.</p>
        <p className={'text-xl sm:text-2xl md:text-4xl leading-normal tracking-widest  mb-12'}>Our services will ensure
          that your roof or façade regains its former glory and colors.</p>
        <p className={'text-xl sm:text-2xl md:text-4xl leading-normal tracking-widest  mb-6 sm:mb-12 font-bold'}>They
          will look like new.</p>
        <Link href={"/contact"} className="text-2xl text-black underline font-bold">
          contact us
        </Link>
      </article>
    </div>
  );
};

export default Offer;