import Link from 'next/link';

const About = () => (
    <div>
        <ul>
        <li>
            {/*Use the "a" tag without a href*/}
            <Link href="/"><a>Home</a></Link>
        </li>
        <li> 
            <Link href="/about"><a>About</a></Link>
        </li>
    </ul>
        <h1>About BitzPrice</h1>
        <p>Application to view Bitcoin prices</p>
    </div>
    );
    export default About;