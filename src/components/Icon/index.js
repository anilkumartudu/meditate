import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Theme from '../../theme';

const Icon = (props) => {
  const {name} = props;

  if (name === 'play') {
    return (
      <Svg
        viewBox="0 0 512 512"
        fill={Theme.colors.THEME}
        width="60px"
        height="60px">
        <Path
          d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80
     c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176
     c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57
     S349.156,266.641,344.48,269.57z"
        />
      </Svg>
    );
  } else if (name === 'pause') {
    return (
      <Svg
        viewBox="0 0 275.725 275.725"
        fill={Theme.colors.THEME}
        width="60px"
        height="60px">
        <Path
          d="M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862
               C275.725,61.726,214.001,0,137.862,0z M114.26,188.856c0,11.967-7.925,21.655-17.704,21.655c-9.776,0-17.704-9.688-17.704-21.655
               V100.65c0-11.957,7.927-21.655,17.704-21.655c9.779,0,17.704,9.698,17.704,21.655V188.856z M196.877,188.856
               c0,11.967-7.933,21.655-17.704,21.655c-9.771,0-17.698-9.688-17.698-21.655V100.65c0-11.957,7.928-21.655,17.698-21.655
               c9.776,0,17.704,9.698,17.704,21.655V188.856z"
        />
      </Svg>
    );
  } else if (name === 'close') {
    return (
      <Svg
        viewBox="0 0 93.934 93.934"
        fill={Theme.colors.THEME}
        width="30px"
        height="30px">
        <Path
          d="M80.178,13.757c-18.341-18.342-48.08-18.342-66.421,0c-18.342,18.341-18.342,48.08,0,66.421
		c18.341,18.342,48.08,18.342,66.421,0C98.52,61.836,98.52,32.098,80.178,13.757z M71.576,61.737l-9.838,9.838l-14.771-14.77
		l-14.771,14.77l-9.838-9.838l14.77-14.771l-14.77-14.771l9.838-9.838l14.771,14.771l14.771-14.771l9.838,9.838l-14.77,14.772
		L71.576,61.737z"
        />
      </Svg>
    );
  }
};

export default Icon;