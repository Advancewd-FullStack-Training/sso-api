import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OauthServiceRepository } from './oauth-service.repository';
import { OauthServiceEntity } from './oauth-service.entity';
import { CreateOauthServiceDTO } from './oauth-service.dto';
import { ConsoleService } from "nestjs-console"

@Injectable()
export class OauthServiceService {
  constructor(
    @InjectRepository(OauthServiceRepository) private oauthServiceRepo: OauthServiceRepository,
    private readonly consoleService: ConsoleService
  ) {
    const cli = this.consoleService.getCli();

    this.consoleService.createCommand({
      command: "get-services",
      description: "Get all services",
    }, this.getServices, cli)
  }

  getServices = async () => {
    return await this.oauthServiceRepo.find();
  }

  async createService(data: CreateOauthServiceDTO): Promise<OauthServiceEntity> {
    return await this.oauthServiceRepo.create(data).save();
  }
}