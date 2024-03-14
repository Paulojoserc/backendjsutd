import prismaClient from "../prisma";

interface CreateClienteProps{
    name: string;
    idade: number;
    email: string;
}

class CreateClienteService{
    async execute({name, idade, email}: CreateClienteProps){
        
            if(!name || !idade || !email)
            throw new Error("Todos os campos são obrigatorios")
        
        const cliente = await prismaClient.cliente.create({
         data:{
            name,
            idade,
            email
         }   
        })
        return cliente
    }
}
export {CreateClienteService}