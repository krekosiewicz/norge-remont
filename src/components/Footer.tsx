// components/Footer.tsx
import Image from 'next/image'
import Link from 'next/link'
import emailIcon from "../../public/assets/icons/email-icon.svg"
import phoneIcon from "../../public/assets/icons/phone-icon.svg"
import locationIcon from "../../public/assets/icons/location-icon.svg"


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-400 text-white p-8 sm:py-12">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="mb-16">
          <h2 className="text-5xl sm:text-8xl">high</h2>
          <h2 className="text-5xl sm:text-8xl">maintenance</h2>
          <p className="text-xl text-red-500">Kacper Marszałkowski</p>
        </div>
        <div className="grid grid-cols-3 ml-0 lg:ml-16">
          <div className="col-span-1">
            <h3 className="text-red-500 font-bold mb-2">menu</h3>
            <ul>
              <li className="my-2 hover:underline"><Link href={'./'}>home</Link></li>
              <li className="my-2 hover:underline"><Link href={'./offer'}>offer</Link></li>
              <li className="my-2 hover:underline"><Link href={'./about'}>about us</Link></li>
              <li className="my-2 hover:underline"><Link href={'./gallery'}>gallery</Link></li>
              <li className="my-2 hover:underline"><Link href={'./contact'}>contact</Link></li>
            </ul>
          </div>
          <div className={"col-span-2 ml-12"}>
            <h3 className="text-red-500 font-bold mb-2">contact</h3>
            <ul>
              <li className={'relative my-2'}>
                <Image src={emailIcon} height={16} width={16} className={'absolute flex items-center h-full -left-8 whitespace-break-spaces'} alt={'email to highmaintenance'}></Image>
                <span className={'break-words'}>highmaintenance@gmail.com</span>
              </li>
              <li className={'relative my-2'}>
                <Image src={phoneIcon} height={16} width={16} className={'absolute flex items-center h-full -left-8'} alt={'email to highmaintenance'}></Image>
                <span>+00 000 000 000</span>
              </li>
              <li className={'relative my-2'}>
                <Image src={locationIcon} height={16} width={16} className={'absolute flex items-center h-full -left-8'} alt={'email to highmaintenance'}></Image>
                <span>address placeholder</span>
              </li>
            </ul>
          </div>
          <div className={'col-span-3'}>
            <h3 className="text-red-500 font-bold mb-2 invisible">privacy policy</h3>
            <h3 className="font-bold">privacy policy</h3>
          </div>
        </div>
      </div>
      <p className="text-red-500">site designed by Paulina Gudzowska & Kacper Rekosiewicz</p>
    </footer>
  );
};

export default Footer;