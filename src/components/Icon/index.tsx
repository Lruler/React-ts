import React from 'react';

interface IconProps {
  name?: string;
}

const Icon: React.FC<IconProps> = ({ name = '' }) => {
  return <span>Icon</span>;
};

export default Icon;
