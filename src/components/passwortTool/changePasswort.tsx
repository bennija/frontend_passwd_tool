import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Avatar,
	Box,
	Button,
	Card,
	CssBaseline,
	Grid,
	Typography,
} from '@mui/material';

import InputField from './inputField';

//mach abstände schön                                                   //!CHECK
//validiereung                                                          //!CHECK
//tooltip                                                               //!CHECK
//englisch/Deutsch                                                      //!CHECK
//toolbar von Tilman                                                    //!CHECK
//(!) hover für error                                                   //!CHECK
//invisble icon                                                         //!CHECK
//wie am besten nix unter topbar? Frag Tilman                           //!CHECK
// mach die tooltipps überstzung iwie anders                            //!CHECK
// Erroranzeige von anfang an                                           //!CHECK
//  \Sprache in TopBar--> Tilman ändert was
//mach mal echte form nein weil so die error nicht getriggert werden
//recoil wo?
//mach git local und frag wohin
//googlechrom ändert sprachen! wie knopf reageren lassen?

export default function ChangePasswort() {
    const {t} = useTranslation();
    const [username, setUsername] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');
    const [oldPassword, setOldPassword] = useState<string>('');
    const [oldError, setOldError] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [newError, setNewError] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
    const [confirmError, setConfirmError] = useState<string>('');

    const send = () => {
        //fetch
        setUsername('');
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username === '') {
            setNameError('Is required.');
        }
        if (oldPassword === '') {
            setOldError('Is required.');
        }
        if (newPassword === '') {
            setNewError('Is required.');
        }
        if (confirmNewPassword === '') {
            setConfirmError('Is required.');
        }
        if (
            nameError === '' &&
            oldError === '' &&
            newError === '' &&
            confirmError === ''
        ) {
            console.log({
                user: username,
                oldPw: oldPassword,
                newPw: newPassword,
                confirm: confirmNewPassword,
            });
            send();
        }
    };

    const handleChange = (e: any) => {
        //type Probleme
        //React.FormEvent<HTMLFormElement> //event: {currentTarget: [{id: string; value: string}]}
        setNameError('');
        setOldError('');
        setNewError('');
        setConfirmError('');
        //username testen?
        //let currentUserName = e.currentTarget[0].value;
        let currentOldPassword = e.currentTarget[2].value;
        let currentNewPassword = e.currentTarget[4].value;
        let currentConfirmPassword = e.currentTarget[6].value;
        //teste value auf id
        //console.log(e.currentTarget[0].id, e.currentTarget[0].value); //rest auf [2][4][6]

        //START form Error Test

        //is in DB fehlt
        //test oldPw
        //match DB fehlt
        //test newPw
        //ist es zu simpel? scheck liste mit typschen pws, aA-zZ mehr als 3 in folge, 0-9 mehr als 3 in folge

        if (currentNewPassword !== '') {
            if (currentOldPassword === currentNewPassword) {
                setNewError('Old and new password must not be the same.');
            }
            if (currentNewPassword !== currentNewPassword.trim()) {
                setNewError('Password cannot have leading or trailing spaces.');
            }
            if (currentNewPassword < 8) {
                setNewError('Password needs to be at least 8 characters long.');
            }
            if (!/\d/.test(currentNewPassword)) {
                setNewError(
                    'Password must contain at least one letter and one number.',
                );
            }
            if (!/[a-zA-Z]/.test(currentNewPassword)) {
                setNewError(
                    'Password must contain at least one letter and one number.',
                );
            }
        }
        //test confirmNewPw
        if (currentNewPassword !== currentConfirmPassword) {
            setConfirmError('Passwords do not match.');
        }

        //END form Error Test
    };

    const resetHandler = () => {
        setUsername('');
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setNameError('');
        setOldError('');
        setNewError('');
        setConfirmError('');
    };

    return (
        <>
            <CssBaseline />
            <Grid
                component='main'
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
            >
                <Card elevation={6}>
                    <Box
                        sx={{
                            mt: 1,
                            mb: 1,
                            mr: 1,
                            ml: 1,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Box
                            sx={{
                                marginTop: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography
                                variant='h6'
                                component='div'
                                align='center'
                            >
                                {t('Change password')}
                            </Typography>
                        </Box>
                        <Box
                            component='form'
                            noValidate
                            onSubmit={handleSubmit}
                            onChange={handleChange}
                            sx={{mt: 2}}
                        >
                            <InputField
                                errorText={nameError}
                                setValue={setUsername}
                                tooltip='Username of the user whose password you want to change.'
                                value={username}
                                label='Username'
                                type='username'
                                id='username'
                                autocomplete='username'
                            ></InputField>
                            <InputField
                                errorText={oldError}
                                setValue={setOldPassword}
                                tooltip='Old password of the user whose password you want to change.'
                                value={oldPassword}
                                label='Old password'
                                type='password'
                                id='oldPassword'
                                autocomplete='current-password'
                            ></InputField>
                            <InputField
                                errorText={newError}
                                setValue={setNewPassword}
                                tooltip='New password of the user whose password you want to change.'
                                value={newPassword}
                                label='New password'
                                type='password'
                                id='newPassword'
                                autocomplete='new-password'
                            ></InputField>
                            <InputField
                                errorText={confirmError}
                                setValue={setConfirmNewPassword}
                                tooltip='Confirm the new password.'
                                value={confirmNewPassword}
                                label='Confirm new password'
                                type='password'
                                id='confirmPassword'
                                autocomplete='new-password'
                            ></InputField>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    size='small'
                                    type='submit'
                                    variant='contained'
                                    sx={{mt: 1}}
                                >
                                    {t('confirm')}
                                </Button>
                                <Button
                                    size='small'
                                    onClick={resetHandler}
                                    variant='outlined'
                                    sx={{ml: 1, mt: 1}}
                                >
                                    {t('reset')}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </>
    );
}
