import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Roles } from "../entity/roles.entity";

@Injectable()
export class RolesService implements OnModuleInit {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}

  async onModuleInit() {
    const roles = [
      {
        name_fr: "ADMIN",
        name_eng: "ADMIN",
      },
      {
        name_fr: "SCRUM_MASTER",
        name_eng: "SCRUM_MASTER",
      },
      {
        name_fr: "DÉVELOPPEUR",
        name_eng: "DEVELOPER",
      },
      {
        name_fr: "Testeur_QA",
        name_eng: "QA_TESTER",
      },
      {
        name_fr: "MANAGÉR",
        name_eng: "MANAGER",
      },
    ];

    for (const name of roles) {
      const exists = await this.rolesRepository.findOne({
        where: { name_fr: name.name_fr },
      });
      if (!exists) {
        const role = this.rolesRepository.create({ ...name });
        await this.rolesRepository.save(role);
      }
    }
  }
}
