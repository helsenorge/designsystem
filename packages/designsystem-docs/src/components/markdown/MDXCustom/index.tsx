import React from 'react';
import Preamble from './Preamble';
import ComponentRenderer from './ComponentRenderer';
import IconWall from './IconWall/IconWall';
import ColorWall from './ColorWall/ColorWall';
import LiveComponent from '../../LiveComponent/LiveComponent';
import {ComponentProps} from '../../ComponentProps/ComponentProps';

const MDXCustom = () => <></>;

MDXCustom.ColorWall = ColorWall;
MDXCustom.Preamble = Preamble;
MDXCustom.ComponentRenderer = ComponentRenderer;
MDXCustom.IconWall = IconWall;
MDXCustom.LiveComponent = LiveComponent;
MDXCustom.ComponentProps = ComponentProps;

export default MDXCustom;

export const UIComponents = {
  ColorWall,
  Preamble,
  IconWall,
  LiveComponent,
};
