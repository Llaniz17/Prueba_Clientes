import { useNavigate } from 'react-router-dom';
import { deleteClient } from '../api/clients.api';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export function ClientCard({ client }) {

    const navigate = useNavigate()

    return (
        <div style={{}}>


            <div style={{ display: 'flex', color: 'black' }}
            >
                <div style={{flex: '1',display:'flex', justifyContent:'flex-end',alignItems:'center'}}>
                    <Avatar style={{marginRight:'40px', height:'70px',width:'70px',fontSize:'30px'}}>{client.name[0]}</Avatar>
                </div>
                <div style={{flex: '4'}}>
                    <h2>{client.name}</h2>
                    <p>{client.email}</p>
                </div>
                <div style={{flex: '1'}}>
                    <p> {client.birthdate} | {client.created_date} </p>
                    <Button  variant='contained' onClick={() => {
                        navigate(`/client/${client.id}`)
                    }}><EditIcon/></Button>
                    <Button style={{background:'#f84434', marginLeft:'20px'}} variant='contained' onClick={async () => {
                        const accepted = window.confirm('Estás seguro?');
                        if (accepted) {
                            await deleteClient(client.id);
                            window.location.reload();
                        }
                    }}><DeleteIcon/></Button>
                </div>

            </div>
            <hr style={{margin:'auto 25px auto 55px', color:'gray'}}></hr>
        </div>
    )
}
