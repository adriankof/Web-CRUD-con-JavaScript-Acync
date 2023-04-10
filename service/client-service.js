const listaClientes = async () => {
    const respuesta = await fetch("http://localhost:3000/perfil");
    const data = await respuesta.json();
    return data;
};

const crearCliente = async (nombre, email) => {
    const response = await fetch ("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify ({nombre,email, id:uuid.v4()}),
    });
    return response;
};

const eliminarCliente = async (id) => {
    const response = await fetch (`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
    return response;
};

const detalleCliente = async (id) => {
    const respuesta = await fetch (`http://localhost:3000/perfil/${id}`);
    const data = await respuesta.json();
    return data;
};

const actualizarCliente = async (nombre, email, id) => {
    const response = await fetch (`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify ({ nombre, email }),
    });
    return response;
};

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};
