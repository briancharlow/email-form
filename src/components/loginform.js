import React, { useState, useEffect } from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [selectedTheme, setSelectedTheme] = useState(
        localStorage.getItem('selectedTheme') || 'light'
    );

    useEffect(() => {
        document.querySelector('body').setAttribute('dark-theme', selectedTheme);
        localStorage.setItem('selectedTheme', selectedTheme);
    }, [selectedTheme]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs
        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all fields');
        } else {
            // Perform form submission logic here
            setError('');
            // Reset form inputs
            setEmail('');
            setPassword('');
        }
    };

    const toggleTheme = () => {
        setSelectedTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <form onSubmit={handleSubmit} className={selectedTheme === 'dark' ? 'dark-theme' : ''}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Submit</button>

            <div className="dark_mode">
                <input
                    className="light_change_input"
                    type="checkbox"
                    id="darkmode-toggle"
                    checked={selectedTheme === 'dark'}
                    onChange={toggleTheme}
                />
                <label className="light_change_label" htmlFor="darkmode-toggle">
                    <Sun />
                    <Moon />
                </label>
            </div>
        </form>
    );
}

export default LoginForm;
