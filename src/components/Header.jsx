/* eslint-disable react/prop-types */
import ThemeToggle from './ThemeToggle';
export default function Heading({ title }) {
  return (
    <div className='flex justify-between my-5'>
      <h1>{title}</h1>
      <ThemeToggle />
    </div>
  );
}
