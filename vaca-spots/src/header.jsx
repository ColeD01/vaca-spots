import { useState } from "react";

export default function header() {
    return (
        <div className="header">
            <nav className="nav-bar">
                <h2>Budget Vacations</h2>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Scheduling</h3>
            </nav>
            <h1>Plan your dream Vacation Today !</h1>
        </div>
    )
}