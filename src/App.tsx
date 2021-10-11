import React from 'react';
import { useTranslation } from 'react-i18next';
import { RecoilRoot } from 'recoil';

import { Toastyfier, TopBar, useToasty } from '@b1-systems/react-components';
import { Link, Toolbar } from '@mui/material';

import ChangePasswort from './components/passwortTool/changePasswort';

function InnerApp() {
    const {toasty} = useToasty();
    const {t, i18n} = useTranslation();

    return (
        <RecoilRoot>
            <TopBar
                menuEntries={[]}
                logoutAction={() => toasty.success('Logout complete!')}
                applicationTitle={
                    <Link href='' color='inherit' underline='hover'>
                        {t('Change password')}
                    </Link>
                }
                notificationHistory={{
                    pastNotifications: 'Past Notifications',
                    noNotificationsYet: 'No notifications yet',
                    createdAtFormat: (v: number) => new Date(v).toString(),
                }}
                languageMenu={{
                    entries: [
                        {key: 'de', display: 'Deutsch'},
                        {key: 'en', display: 'English'},
                    ],
                    onLanguageChange: (key: string) => {
                        const msg =
                            key === 'en'
                                ? 'Switched to English'
                                : 'Sprache auf Deutsch gestellt';
                        toasty.success(msg);
                        i18n.changeLanguage(key);
                    },
                    currentLanguage: 'en',
                }}
            />
            <Toolbar />
            <ChangePasswort></ChangePasswort>
        </RecoilRoot>
    );
}

export default function App() {
    return (
        <Toastyfier position={'bottom-right'} gutter={8}>
            <InnerApp />
        </Toastyfier>
    );
}
