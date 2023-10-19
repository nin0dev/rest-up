import Image from 'next/image';

export default function Header() {
  return (
    <nav className="flex justify-center mt-5">
      <Image src="/images/logo.svg" alt="logo" width="70" height="50" />
    </nav>
  );
}
