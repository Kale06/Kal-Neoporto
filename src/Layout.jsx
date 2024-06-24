import { Header } from "./components/Header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
