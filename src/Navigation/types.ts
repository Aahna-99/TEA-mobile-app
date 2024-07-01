// import { FeedbackRowType } from 'components/Feedback/SectionRow/FeedbackWall';

export type RootStackParamList = {
    SubDomainView: { domainplace?: string; SubDomain?: string; url?: String };
    LoginView: {
        SubDomain?: string;
        Email?: string;
        BiometricToken?: string;
        emailplace?: string;
        password_policy?: any;
    };
    SsoLoginsView: { SsoLogins: string[] };
    HomeNav: undefined;
    IntermediateView: {
        SsoLogins: string;
        SubDomain: string;
        is_engagedly_login: boolean;
        password_policy?: string;
    };
    ForgotPassword: { email: string };
    ForgotPasswordView: { url: string };
    InAppBrowser: { url: string };
};


export type DrawerStackParamList = {
    HomeView: undefined;
    SettingsView: undefined;
};
