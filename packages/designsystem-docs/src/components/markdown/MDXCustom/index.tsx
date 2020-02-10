import React from 'react';
import {Palette, ColorCard} from './Palette';
import Preamble from './Preamble';
import ComponentRenderer from './ComponentRenderer';
import IconWall from './IconWall/IconWall';
import LiveComponent from '../../LiveComponent/LiveComponent';
import {ComponentProps} from '../../ComponentProps/ComponentProps';

const MDXCustom = () => <></>;

MDXCustom.Palette = Palette;
MDXCustom.ColorCard = ColorCard;
MDXCustom.Preamble = Preamble;
MDXCustom.ComponentRenderer = ComponentRenderer;
MDXCustom.IconWall = IconWall;
MDXCustom.LiveComponent = LiveComponent;
MDXCustom.ComponentProps = ComponentProps;

export default MDXCustom;
