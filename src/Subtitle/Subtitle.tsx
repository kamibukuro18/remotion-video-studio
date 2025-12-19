import React from 'react';
import {VIDEO_SETTINGS, zIndex} from '../constants'; // VIDEO_SETTINGSをインポート

const baseSubtitleStyle: React.CSSProperties = {
  fontFamily: VIDEO_SETTINGS.subtitleFontFamily,
  fontSize: VIDEO_SETTINGS.subtitleFontSizePx,
  fontWeight: VIDEO_SETTINGS.subtitleFontWeight,
  lineHeight: VIDEO_SETTINGS.subtitleLineHeight,
  letterSpacing: VIDEO_SETTINGS.subtitleLetterSpacing,
  textRendering: 'optimizeLegibility',
  textAlign: 'left',
  position: 'absolute',
  top: VIDEO_SETTINGS.subtitleTop,
  left: VIDEO_SETTINGS.subtitleLeft,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: `${VIDEO_SETTINGS.subtitlePaddingTop}px`,
  paddingLeft: `${VIDEO_SETTINGS.subtitlePaddingLeft}px`,
  zIndex: zIndex.anyValue,
};

const strokeSubtitleStyle: React.CSSProperties = {
  ...baseSubtitleStyle,
  color: VIDEO_SETTINGS.subtitleColor,
  WebkitTextStroke: `${VIDEO_SETTINGS.subtitleStrokeWidthPx}px ${VIDEO_SETTINGS.subtitleStrokeColor}`,
};

const fillSubtitleStyle: React.CSSProperties = {
  ...baseSubtitleStyle,
  color: VIDEO_SETTINGS.subtitleColor,
};

type Props = {
  children: string;
};

export const Subtitle: React.FC<Props> = ({children}) => {
  return (
    <div style={{position: 'relative', width: '100%', height: '100%'}}>
      <p style={strokeSubtitleStyle} dangerouslySetInnerHTML={{ __html: children }}></p>
      <p style={fillSubtitleStyle} dangerouslySetInnerHTML={{ __html: children }}></p>
    </div>
  );
};
