import Link from 'next/link'
import Image from 'next/image'
import closeIcon from "../../public/assets/icons/close-icon.svg";



export const Menu: React.FC<{bgColor: string, isScrolledUp: boolean, onClose: () => void}> = ({bgColor, isScrolledUp, onClose}) => {
  return (
    <div className={`absolute top-24 left-0 w-screen flex justify-center ${bgColor} ${isScrolledUp ? "slide-up" : "slide-down"} bg-opacity-60 backdrop-blur-md`}>
      <ul>
        <li className="my-8"><Link onClick={onClose} href={'./offer'}>offer</Link></li>
        <li className="my-8"><Link onClick={onClose}  href={'./about'}>about us</Link></li>
        <li className="my-8"><Link onClick={onClose}  href={'./gallery'}>gallery</Link></li>
        <li className="my-8 "><Link onClick={onClose}  href={'./contact'}>contact</Link></li>
      </ul>
    </div>
  )
}