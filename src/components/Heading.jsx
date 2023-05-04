/* eslint-disable react/prop-types */
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
export default function Heading({ title }) {
  return (
    <div className='flex justify-between my-5'>
      <h1>{title}</h1>
      <MdOutlineDarkMode size={32} className='dark:hidden' />
      <MdOutlineLightMode size={32} className='hidden dark:block' />
    </div>
  );
}
