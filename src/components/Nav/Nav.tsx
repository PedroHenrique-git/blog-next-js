import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="categories">
      <Link href="">
        <a>Python</a>
      </Link>
      <Link href="">
        <a>Javascript</a>
      </Link>
      <Link href="">
        <a>Typescript</a>
      </Link>
    </nav>
  );
}
