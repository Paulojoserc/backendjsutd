import prismaClient from "../prisma";

class ListClenteService{
async execute(){
    const cliente = await prismaClient.cliente.findMany()

    return cliente;
}
}

export{ListClenteService}