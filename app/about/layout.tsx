
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-24 lg:max-w-[76rem] max-w-[22rem] mx-auto">
      {children}
    </div>
  );
}
