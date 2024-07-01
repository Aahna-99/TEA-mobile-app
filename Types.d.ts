declare module 'react-native-onesignal';
declare module 'react-native-progress/Bar';
declare module '*.svg' {
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}
