import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', external = false }) => {
  // Handle hash links for smooth scrolling
  if (href.startsWith('#')) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  // Handle external links
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Handle internal navigation with Next.js Link
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
};