import Link from "next/link";
// import Image from "next/image";   // importing the Image to place the image in the navbar

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Navbar</h1>
          {/* <Image src="/accionlabs.png" width={128} height={78} />  Image tag */}
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
