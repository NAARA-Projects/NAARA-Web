import React from 'react';
import styles from './ProfileDropdown.module.css'; // Adjust the path as needed

interface ProfileDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className={`${styles['profile-dropdown']} absolute top-[36px] right-0 bg-black shadow-lg rounded-md mt-4`}
            onMouseLeave={onClose}
        >
            <ul>
                <li className="py-2 px-4 hover:bg-gray-100 text-white text-center cursor-pointer">My profile</li>
                <li className="py-2 px-4 hover:bg-gray-100 text-white text-center cursor-pointer">Settings</li>
                <li className="py-2 px-4 hover:bg-gray-100 text-[#B60000] text-center cursor-pointer"><b>Log out</b></li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;
