'use client';
import React from 'react';

const DropdownMenu: React.FC = () => {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
            <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
            </div>
        </div>
    );
};

export default DropdownMenu;
