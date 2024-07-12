// ProfileDropdown.tsx
import React from 'react';

interface ProfileDropdownProps {
    isOpen: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute top-[36px] right-6 bg-white shadow-lg rounded-md mt-6">
            <ul>
                <li className="py-2 px-4 hover:bg-gray-100 text-black cursor-pointer">My profile</li>
                <li className="py-2 px-4 hover:bg-gray-100 text-black cursor-pointer">Settings</li>
                <li className="py-2 px-4 hover:bg-gray-100 text-black cursor-pointer">Log out</li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;
