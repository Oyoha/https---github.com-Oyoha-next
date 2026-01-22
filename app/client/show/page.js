import Link from "next/link";

export default function Show() {
  return (
    <div>
      <h1>Страница</h1>
      <Link href="/">Главная</Link>
      <br />
      <Link href="/client/12345">Клиент 12345</Link>
    </div>
  );
}
