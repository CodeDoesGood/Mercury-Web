import { Router } from 'express';
import { projs } from './routing.table';

import * as authentication from '../middleware/authentication';
import * as database from '../middleware/database';
import * as projects from '../middleware/projects';

const router: Router | any = Router();

/**************************************************************************************************
                                          Projects Routes
**************************************************************************************************/

/******************
      Projects
******************/

router[projs.ACTIVE.method](projs.ACTIVE.link, [
  database.validateConnectionStatus.bind(this),
  projects.getAllActiveProjects.bind(this),
]);

router[projs.ALL.method](projs.ALL.link, [
  database.validateConnectionStatus.bind(this),
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  projects.getAllProjects.bind(this),
]);

router[projs.CATEGORY.method](projs.CATEGORY.link, [
  database.validateConnectionStatus.bind(this),
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  projects.validateProjectCategory.bind(this),
  projects.getAllProjectsByCategory.bind(this),
]);

router[projs.HIDDEN.method](projs.HIDDEN.link, [
  database.validateConnectionStatus.bind(this),
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  projects.getAllHiddenProjects.bind(this),
]);

router[projs.STATUS.method](projs.STATUS.link, [
  database.validateConnectionStatus.bind(this),
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  projects.validateProjectStatus.bind(this),
  projects.getAllProjectsByStatus.bind(this),
]);

export default router;
