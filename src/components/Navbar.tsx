import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

export default function Navbar() {
    return (
        <>
            <nav className="bg-lime-700 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-white text-xl font-semibold">
                Vegerice
                </Link>

                <ul className="flex space-x-6">
                <li>
                    <Link href="/shops" className="text-white">
                    Shops
                    </Link>
                </li>
                <li>
                    <Link href="/prices" className="text-white">
                    Prices
                    </Link>
                </li>
                {/* Add more navigation links as needed */}
                </ul>
            </div>
            </nav>
        </>
    );
}
