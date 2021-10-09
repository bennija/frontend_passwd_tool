import './App.css';

import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import { TopBar } from '@b1-systems/react-components';
import { Link, Toolbar } from '@mui/material';

import LangSwitch from './components/langSwitch';
import ChangePasswort from './components/passwortTool/changePasswort';

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RecoilRoot>
                <TopBar
                    menuEntries={[]}
                    logoutAction={() => console.log('Logout')}
                    applicationTitle={
                        <Link href='' color='inherit' underline='hover'>
                            Titel
                        </Link>
                    }
                    notificationHistory={false}
                />
                <Toolbar />
                <LangSwitch></LangSwitch>
                <ChangePasswort></ChangePasswort>
            </RecoilRoot>
        </Suspense>
    );
}
