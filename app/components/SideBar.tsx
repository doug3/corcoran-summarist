export default function SideBar({ setLoggedIn }: { setLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <aside className="sidebar">
      <h2>Side Bar</h2>
      <button onClick={() => setLoggedIn(false)}>Log Out</button>
    </aside>
  );
}