import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `font-semibold block text-grey-500 bg-red-700 text-white rounded py-2 px-4`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
