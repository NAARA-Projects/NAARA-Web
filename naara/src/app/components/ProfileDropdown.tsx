import React from 'react';
import styles from './ProfileDropdown.module.css';

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
                <li className="py-2 px-4 hover:bg-gradient-to-r from-[#5ABBDC] to-[#2457B5] text-white text-center cursor-pointer">My profile</li>
                <li className="py-2 px-4 hover:bg-gradient-to-r from-[#CA8F36] to-[#D04C00] text-white text-center cursor-pointer">Settings</li>
                <li className="py-2 px-4 hover:bg-gradient-to-r from-[#ADE572] to-[#6EB79D] text-[#B60000] text-center cursor-pointer"><b>Log out</b></li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;
