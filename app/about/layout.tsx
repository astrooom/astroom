
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-16 max-w-6xl mx-auto">
      {children}
    </div>
  );
}
