/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ToolCard = ({ tool }) => {
  const { name, description, image, features, published_in, links } = tool;
  return (
    <div className="p-3 border border-gray-500 rounded-lg text-left">
      <div className="w-full h-52 ">
        <img
          className="rounded-lg shadow-md shadow-slate-600 h-full w-full"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-3">
        <h4 className="text-xl font-semibold italic">Features </h4>
        {features?.map((feature, index) => (
          <p key={index}>{`${index + 1}.  ${feature}`}</p>
        ))}
      </div>
      <hr className="my-2" />
      <h4 className="texl-lg font-bold">{name}</h4>
      <p>Published : {published_in}</p>
      <hr className="my-2" />
      <div>
        <h4 className="text-lg font-semibold">Links :</h4>
        {links.map((link) => (
          <div className="mt-2">
            <p className="font-semibold">{link.name}</p>
            <a
              href={link.url}
              target="_blank"
              className="hover:text-blue-400"
            >
              {link.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolCard;
