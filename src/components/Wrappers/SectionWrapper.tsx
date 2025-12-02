import { forwardRef, type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, id, className = '' }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`w-full min-h-screen flex flex-col justify-center
        items-center scroll-mt-16 3xl:scroll-mt-24 mx-auto ${className}`}
      >
        {children}
      </section>
    );
  },
);
