import React from 'react';
import { useTranslation } from 'react-i18next';

import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Grid, TextField, Tooltip } from '@mui/material';

type InputProps = {
    tooltip: string;
    errorText: string;
    setValue: Function;
    value: string;
    label: string;
    type: string;
    id: string;
    autocomplete: string;
};

export default function InputField(props: InputProps) {
    const {t} = useTranslation();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        //console.log(newValue);
        props.setValue(newValue);
    };

    return (
        <Grid>
            <Tooltip
                title={
                    props.errorText === ''
                        ? (t(props.tooltip) as string) //https://github.com/mui-org/material-ui/issues/20701
                        : (t(props.errorText) as string)
                }
            >
                <TextField
                    margin='dense'
                    size='small'
                    required
                    fullWidth
                    onChange={changeHandler} //{(e)=>props.setValue(e.target.Value)}
                    value={props.value}
                    label={t(props.label)}
                    error={Boolean(props.errorText)}
                    type={props.type}
                    id={props.id}
                    autoComplete={props.autocomplete}
                    InputProps={
                        props.errorText === ''
                            ? {
                                  endAdornment: (
                                      <ErrorOutlineRoundedIcon
                                          sx={{
                                              color: 'transparent',
                                          }}
                                      />
                                  ),
                              }
                            : {
                                  endAdornment: (
                                      <ErrorOutlineRoundedIcon
                                          sx={{
                                              color: 'red',
                                          }}
                                      />
                                  ),
                              }
                    }
                ></TextField>
            </Tooltip>
        </Grid>
    );
}

// alter mist für tooltip überstzung
// title=`{t('Username of the user whose password you want to change.')}`>
// title={()=>t('Blabla.')} -> meckert nicht aber TT leer
// title={tooltippUsername} -> geht ist aber scheiße

//alter mist für einzelne inputs im parent
/* <Grid>
                            {/* title=`{t('Username of the user whose password you want to change.')}`>
                            {/* title={()=>t('Blabla.')} -> meckert nicht aber TT leer
                            {/* title={tooltippUsername} -> geht ist aber scheiße
                            <Tooltip
                                title={
                                    nameError === ''
                                        ? tooltippUsername
                                        : nameError
                                }
                            >
                                <TextField
                                    margin='dense'
                                    size='small'
                                    required
                                    fullWidth
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    value={username}
                                    id='username'
                                    label={t('Username')}
                                    name='username'
                                    error={Boolean(nameError)}
                                    InputProps={
                                        nameError === ''
                                            ? {endAdornment: ''}
                                            : {
                                                  endAdornment: (
                                                      <ErrorOutlineRoundedIcon
                                                          sx={{
                                                              color: 'red',
                                                          }}
                                                      />
                                                  ),
                                              }
                                    }
                                    //autoComplete from BE
                                ></TextField>
                            </Tooltip>
                        </Grid> */
