import { prisma } from "../../src/database";
import { jest } from "@jest/globals";
import { ProjectData } from "../../src/services/maintenanceService.js";
import maintenanceRepository from "../../src/repositories/maintenanceRepository";
import * as maintenenceFactory from "../factories/maintenenceFactory.js";
import { Project } from "@prisma/client";

