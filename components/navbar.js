import Link from 'next/link';

const Navbar = () => (
    <ul>
        <li>
            {/*Use a tag without href*/}
            <Link href="/"><a>Home</a></Link>
        </li>
        <li>
            <Link href="/about"><a>About</a></Link>
        </li>
    </ul>
);

export default Navbar;