import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OauthScopeEntity } from './oauth-scope.entity';
import { OauthScopeRepository } from './oauth-scope.repository';
import { Command, Console } from "nestjs-console";

@Injectable()
@Console()
export class OauthScopeService {
  constructor(
    @InjectRepository(OauthScopeRepository) private oauthScopeRepo: OauthScopeRepository
  ) { }

  @Command({
    command: "get-scopes",
    description: "Get all scopes"
  })
  getScopes() {
    return this.oauthScopeRepo.find()
  }

  @Command({
    command: "create-scope <oauthServiceId> <scope>",
    description: "Create scope"
  })
  createScope(oauthServiceId: string, scope: string) {
    console.log(oauthServiceId, scope)
  }
}