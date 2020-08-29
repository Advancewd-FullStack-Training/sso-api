import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OauthClientRepository } from './oauth-client.repository';
import { OauthClientEntity } from "./oauth-client.entity";
import { ConsoleService } from 'nestjs-console';
import { CreateOauthClientDTO } from './oauth-client.dto';

@Injectable()
export class OauthClientService {
  constructor(
    @InjectRepository(OauthClientRepository) private oauthClientRepo: OauthClientRepository,
    private consoleService: ConsoleService
  ) {
    const cli = this.consoleService.getCli();

    this.consoleService.createCommand({
      command: "get-clients",
      description: "Get all clients",
    }, this.getClients, cli)

    this.consoleService.createCommand({
      command: "create-client <name> <url>",
      description: "Create client",
    }, this._createClient, cli)
  }

  getClients = async () => {
    const Clients = await this.oauthClientRepo.find();
    console.log(Clients)
    return Clients;
  }

  async createClient(data: CreateOauthClientDTO): Promise<OauthClientEntity> {
    return await this.oauthClientRepo.create(data).save()
  }

  _createClient = async (name: string, url: string): Promise<OauthClientEntity> => {
    return await this.createClient({ name, url })
  }
}