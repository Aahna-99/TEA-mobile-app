import { StyleSheet } from 'react-native';

import constColors from '../utils/constants/constColors';

const styles = StyleSheet.create({
    nameStyle: {
        marginTop: 4,
        fontWeight: 'normal',
    },
    safeAreaViewStyle: {
        flexDirection: 'row',
        backgroundColor: constColors.bgWhite,
        elevation: 2,
        paddingVertical: 10,
    },
    segment: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    header: {
        flex: 0,
        backgroundColor: constColors.bgStatusBar,
    },
    mainHeader: {
        flex: 1,
        backgroundColor: constColors.bgWhite,
    },
    portrait: {
        paddingTop: 0,
    },
    landscape: {
        paddingRight: 0,
        paddingLeft: 0,
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 8,
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popoverContent: {
        minWidth: 230,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    quickAction: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
    },
    navMainView: {
        elevation: 5,
        borderColor: constColors.bgBorder,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        position: 'relative',
        alignItems: 'center',
    },
    plusIcon: {
        position: 'absolute',
        bottom: 50,
        elevation: 5,
        borderColor: constColors.bgBorder,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 20,
    },
    iconButton: {
        backgroundColor: constColors.brandOrange600,
        margin: 0,
    },
    progress: { flex: 1, justifyContent: 'center' },
});

export default styles;
