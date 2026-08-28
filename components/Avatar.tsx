import Image from "next/image";
import Link from "next/link";

function Avatar() {
  return (
    <Link href="/" className="no-link-style">
      {/* <div className="h-8 w-8 bg-emerald-500 rounded-full cursor-pointer"></div> */}
      <Image src="/logo.svg" width={100} height={20} alt="Chimamanda Justus" />
    </Link>
  );
}

export default Avatar;
