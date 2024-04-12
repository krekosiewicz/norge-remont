import Link from 'next/link'

const About: React.FC = () => {
  return (
    <div className={`px-8 py-24 bg-gold-100 min-h-screen flex justify-center`}>
      <article className={'flex flex-col justify-center max-w-6xl'}>
        <p className={'text-xl sm:text-2xl md:text-4xl leading-normal tracking-widest my-12'}> We work with both individual customers and companies,
          and always offer the highest standard of our services,
          as well as efficient and modern methods for washing, cleaning and painting.
        </p>
        <p className={'text-xl sm:text-2xl md:text-4xl leading-normal tracking-widest  mb-6 sm:mb-12 font-bold'}> We act with care and we care about customer satisfaction.
          We want our cooperation with you to be excellent, from the first contact.</p>
        <Link href={"/contact"} className="text-2xl text-black underline font-bold">
          contact us
        </Link>
      </article>
    </div>
  );
};

export default About;