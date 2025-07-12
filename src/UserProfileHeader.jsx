import React from "react";

const UserProfileHeader = ({
  name,
  profilePic,
  email,
  phone,
  linkedin,
  github,
}) => {
  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center px-6">
      {/* Profile Picture */}
      <img
        src={profilePic}
        alt={`${name} Profile`}
        className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
      />

      {/* Name */}
      <h1 className="ml-4 text-lg font-semibold text-gray-900 flex-shrink-0">
        {name}
      </h1>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Contact Info */}
      <nav className="flex space-x-6 text-sm text-gray-600">
        <a
          href={`mailto:${email}`}
          className="hover:text-blue-600"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          {email}
        </a>

        <a
          href={`tel:${phone}`}
          className="hover:text-blue-600"
          title="Phone"
          target="_blank"
          rel="noopener noreferrer"
        >
          {phone}
        </a>

        <a
          href={linkedin}
          className="hover:text-blue-600"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href={github}
          className="hover:text-blue-600"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
};

export default UserProfileHeader;
