"use client";

import React from 'react';

const ProfileCard = ({ avatar, title, name, age, occupation }) => {
  return (
    <div className="p-6 bg-white w-full max-w-lg rounded-lg shadow-xl text-center mx-auto">
      <h1 className="text-xl font-bold mb-4">Profile</h1>
      <img
        src={avatar}
        alt="profile"
        className="rounded-full w-24 h-24 mx-auto mb-4"
      />
      <h2 className="text-lg font-semibold">Title: {title}</h2>
      <h3 className="text-md">Name: {name}</h3>
      <p className="text-sm text-gray-600">Age: {age}</p>
      <p className="text-sm text-gray-600">Occupation: {occupation}</p>
    </div>
  );
};

export default ProfileCard;
