
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-24 max-w-[76rem] mx-auto">
      {children}
    </div>
  );
}
