import { Link, useLocation } from 'react-router-dom'

export function Navigation() {

    let location = useLocation();
    /*console.log(location.pathname)*/
    if (location.pathname == '/client/list') {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50px',
                margin: '30px 70px'
            }}>
                <Link to="/client/list" style={{
                    textDecoration: 'none',
                    color: '#fff',
                    alignSelf: 'center'
                }}><h1>Listado Clientes</h1></Link>

                <Link to="/client/create" style={{
                    borderStyle: 'none',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    transition: 'background-color .15s ease-in-out',
                    alignSelf: 'end',
                    textAlign:'center',
                    cursor: 'pointer',
                    fontSize: '25px',
                    textDecoration: 'none',
                    fontWeight: 'bolder',
                    padding: '5px',
                    alignItems: 'center'
                }}>+ Nuevo Cliente</Link>
            </div>
        )
    }
    else{
        return(
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50px',
                margin: '30px 70px'
            }}>
               <Link to="/client/list" style={{
                        textDecoration: 'none',
                        color: '#fff',
                        alignSelf: 'center'
                    }}><h1>Nuevo Cliente</h1></Link> 
            </div>
        )
        
    }

}