import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <div>
                <Link to="/">
                    Workout Buddy
                </Link>
            </div>
        </header>
    );
}