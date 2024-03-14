import { FastifyRequest, FastifyReply } from "fastify"
import{ListClenteService} from '../services/ListClienteService'

class ListClienteController{
async handle (request: FastifyRequest, reply: FastifyReply){
    const listClenteService =  new ListClenteService();

    const clientes = await listClenteService.execute();

    reply.send(clientes)
}
 
}

export{ListClienteController}