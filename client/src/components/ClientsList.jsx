import { useEffect, useState } from "react"
import { getAllClients } from "../api/clients.api"
import { ClientCard } from "./ClientCard";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from '@mui/icons-material/Search';

export function ClientsList() {

    const [clients, setClients] = useState([]);
    const [clientsB, setClientsB] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = clientsB.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.created_date.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setClients(resultadosBusqueda);
    }


    useEffect(() => {
        async function loadClients() {
            const res = await getAllClients();
            setClients(res.data);
            setClientsB(res.data);
        }
        loadClients();
    }, [])


    return <div style={{ background: '#fff', margin: '0px 70px' }}>
        <div className="containerInput" style={{display:'flex', margin:'20px 30px', height:'50px'}}>
            <button className="btn ">
                <SearchIcon />
            </button>
            <input
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Búsqueda por Nombre o Fecha de Creación"
                onChange={handleChange}
            />

        </div>
        {clients.map(client => (
            <ClientCard key={client.id} client={client} />
        ))}
    </div>
}