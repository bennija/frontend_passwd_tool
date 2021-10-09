import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function LangSwitch() {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const [lang, setLang] = useState('English');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newLang: string,
    ) => {
        setLang(newLang);
    };

    return (
        <ToggleButtonGroup
            size='small'
            color='primary'
            value={lang}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value='English' onClick={() => changeLanguage('en')}>
                {t('English')}
            </ToggleButton>
            <ToggleButton value='German' onClick={() => changeLanguage('de')}>
                {t('German')}
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
