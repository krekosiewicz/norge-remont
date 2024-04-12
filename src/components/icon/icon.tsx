// import cn from 'classnames';
// import React, { CSSProperties } from 'react';

// import icoClone from './icons/ico-clone.svg';
// import { ReactComponent as IcoPlus } from './icons/ico-plus.svg';
//
// const icons = {
//   'ico-plus': IcoPlus
// };
//
// export type IconName = keyof typeof icons;
// type Props = {
//   icon: IconName;
//   className?: string;
//   onClick?: () => void;
//   width?: number;
//   height?: number;
//   title?: string;
//   style?: CSSProperties;
//   'data-test'?: string;
// };
//
// export function Icon({ icon, className, style, ...rest }: Props) {
//   const IconPath = icons[icon];
//   if (typeof IconPath === 'string') {
//     return (
//       <Image
//         src={IconPath}
//         alt={icon}
//         inline
//         style={style}
//         className={cn(
//           {
//             [styles.pointer]: !!rest.onClick,
//           },
//           className
//         )}
//         {...rest}
//       />
//     );
//   }
//
//   return (
//     <IconPath
//       style={style}
//       className={cn(
//         {
//           [styles.pointer]: !!rest.onClick,
//         },
//         className
//       )}
//       {...rest}
//     />
//   );
// }