export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center bg-blue-800 justify-center h-screen">
      {children}
    </div>
  );
}
