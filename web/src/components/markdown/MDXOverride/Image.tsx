import React from 'react';
import styled from 'styled-components';
import {HNDS_BUCKET_IMAGE_URL} from '@shared/constants';

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

function StyledImage({src, alt, className}: ImageProps) {
  const imageUrl = !src.startsWith('https') ? `${HNDS_BUCKET_IMAGE_URL}${src}` : src;
  return <img className={className} alt={alt} src={imageUrl} />;
}

const Image = styled(StyledImage)`
  width: 100%;
  border: 1px solid #ccc;
`;

export default Image;
