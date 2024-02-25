
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      {children}
    </div>
  );
}
