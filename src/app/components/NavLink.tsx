import Link from 'next/link'

interface NavLinkProps {
    href: string
    title: string
}

const NavLink = (props: NavLinkProps) => {
  return (
      <Link
        href={props.href}
        className='block py-12 pl-3 pr-4 text-[#FFC0CB] sm:text-xl rounded md:p-0 hover:text-[#FFD700]'
      >
        {props.title}
      </Link>
  )
}

export default NavLink
