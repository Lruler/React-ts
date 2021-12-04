import React from 'react';
import classNames from 'classnames'
import { ReactSVG } from 'react-svg';
import './index.less'

interface Props {
  src: string;
  width?: number;
  height?: number;
  classname?: string;
}

const Icon: React.FC<Props> = ({
  src,
  width = 22,
  height = 22,
  classname = '',
}) => {
  const classes = classNames('icon', classname)
  return (
    <>
      <ReactSVG
        src={src}
        className={classes}
        beforeInjection={(svg) => {
          svg.setAttribute('width', `${width}`);
          svg.setAttribute('height', `${height}`);
        }}
      />
    </>
  );
};

export default Icon;
