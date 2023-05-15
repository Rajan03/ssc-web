import clsx from 'clsx';
import React from 'react';

type Props = {
  children: React.ReactNode;
  withContainer?: boolean;
  className?: string;
  rowFlex?: boolean;
  columnFlex?: boolean;
};

const SectionLayout: React.FC<Props> = ({
  children,
  withContainer = false,
  className = '',
  rowFlex = false,
  columnFlex = false,
}) => {
  const containerClass = clsx(
    'flex items-stretch justify-start',
    withContainer && 'container mx-auto',
    rowFlex && 'flex-row',
    columnFlex && 'flex-col',
    className
  );

  return <section className={containerClass}>{children}</section>;
};

export default SectionLayout;
