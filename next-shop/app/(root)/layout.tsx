export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="bg-red-600 text-2xl font-bold text-black">
        Navigation Header
      </h1>
      {children}
      <h2 className="bg-red-600 text-xl font-semibold text-black">Footer</h2>
    </div>
  );
}
