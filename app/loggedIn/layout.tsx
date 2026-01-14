export default function LoggedInLayout({
  children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="logged-in-layout">
            {children}
        </div>
    );
}