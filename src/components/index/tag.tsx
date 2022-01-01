import React from "react";
import { Tag as AntTag } from "antd";
interface TagProps {
  tag: {
    tag: string;
    theme: string;
  };
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return <AntTag color={tag.theme}>{tag.tag}</AntTag>;
};
