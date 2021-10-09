declare module '*.svg' {
   import {SvgProps} from 'react-native-svg';
   const content: React.FC<SvgProps>;
   export default content;
}

declare module '*.png' {
   import {ImageProps} from 'react-native';
   const content: ImageProps;
   export default content;
}
