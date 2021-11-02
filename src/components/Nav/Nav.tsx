import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="categories">
      <Link href="/categories/python">
        <a>Python</a>
      </Link>
      <Link href="/categories/javascript">
        <a>Javascript</a>
      </Link>
      <Link href="/categories/typescript">
        <a>Typescript</a>
      </Link>
    </nav>
  );
}
