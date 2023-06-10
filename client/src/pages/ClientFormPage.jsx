import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createClient, updateClient, getClient } from '../api/clients.api';
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';




const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: 'theme.spacing(1),',
    borderStyle: 'none',
    height: '50px',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
}));

export function ClientFormPage() {

    const { register, handleSubmit, formState: {
        errors
    }, setValue } = useForm();
    const navigate = useNavigate()
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            console.log("actualizando...");
            updateClient(params.id, data)
        }
        else {
            const res = await createClient(data);
        }
        navigate("/client/list");
    });

    useEffect(() => {
        async function loadClient() {
            if (params.id) {
                const res = await getClient(params.id)
                setValue('name', res.data.name)
                setValue('document_number', res.data.document_number)
                setValue('birthdate', res.data.birthdate)
                setValue('email', res.data.email)
            }
        }
        loadClient()
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit} style={{ background: '#fff', margin: '25px 70px', padding: '5px' }}>
                <Box sx={{ flexGrow: 1, background: '#fff' }} >
                    <Grid container spacing={2} sx={{ margin: '2px 10px' }}>
                        <Grid xs={8}>
                            <Item>
                                <span style={{ fontWeight: 'bold' }}>Nombre completo</span>
                                <input
                                    style={{ height: '50px' }}
                                    type="text" placeholder="Nombre Completo"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span>Este campo es requerido</span>}
                            </Item>
                        </Grid>
                        <Grid xs={4}>
                            <Item>
                                <span style={{ fontWeight: 'bold' }}>Numero de documento</span>
                                <input
                                    style={{ height: '50px' }}
                                    type="text" placeholder="Numero Documento"
                                    {...register("document_number", { required: true })}
                                />
                                {errors.document_number && <span>Este campo es requerido</span>}
                            </Item>
                        </Grid>
                        <Grid xs={4}>
                            <Item>
                                <span style={{ fontWeight: 'bold' }}>Fecha de nacimiento</span>
                                <input
                                    style={{ height: '50px' }}
                                    type="text" placeholder="yyyy/mm/dd"
                                    {...register("birthdate", { required: true })}
                                />
                                {errors.birthdate && <span>Este campo es requerido</span>}
                            </Item>
                        </Grid>
                        <Grid xs={8}>
                            <Item>
                                <span style={{ fontWeight: 'bold' }}>Email</span>
                                <input
                                    style={{ height: '50px' }}
                                    type="text" placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span>Este campo es requerido</span>}
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <hr style={{color:'gray', margin:'15px 20px'}}/>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <a style={{
                        padding: '.375rem .75rem',
                        borderStyle: 'none',
                        backgroundColor: '#f84434',
                        color: '#fff',
                        transition: 'background-color .15s ease-in-out',
                        alignSelf: 'end',
                        marginRight: '10px',
                        height: '35px',
                        cursor: 'pointer'
                    }} onClick={() => {
                        navigate("/client/list");
                    }}>Cancelar</a>
                    <button style={{
                        padding: '.375rem .75rem',
                        borderStyle:'none',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        transition: 'background-color .15s ease-in-out',
                        alignSelf: 'end',
                        marginRight: '10px',
                        height: '35px',
                        cursor: 'pointer'
                    }}>Guardar</button>
                </Stack>
                <hr color='black'/>

            </form>
        </div>
    )
}