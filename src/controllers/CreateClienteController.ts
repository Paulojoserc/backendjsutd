import { FastifyRequest, FastifyReply } from "fastify";
import {CreateClienteService} from'../services/CreateClienteService'

class CreateClienteController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{name, idade, email} = request.body as {name: any, idade: any, email: any};
       
        const clienteService = new CreateClienteService()
        const cliente = await clienteService.execute({name, idade, email});
        reply.send(cliente)
    }
}
export{CreateClienteController}