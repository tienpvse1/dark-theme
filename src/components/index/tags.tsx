import React from "react";
import { Tag } from "./tag";

interface TagsProps {
  tags: { tag: string; theme: string }[];
}

// this components should return list of tags
export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Tag tag={tag} key={index} />
      ))}
    </>
  );
};
