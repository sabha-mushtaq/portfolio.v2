export function Slide({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-slide
      className={`relative flex min-h-screen w-full flex-none items-center justify-center px-5 py-20 sm:px-10 sm:py-24 lg:h-screen lg:px-16 lg:py-0 xl:px-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}