import { Router } from 'express';
import { email } from './routing.route';

import * as authentication from '../controllers/authentication.controller';
import * as emailService from '../controllers/email.controller';
import * as infrastructure from '../controllers/infrastructure.controller';

const router: Router | any = Router();

/**************************************************************************************************
                                        Email Routes
**************************************************************************************************/

/******************
    Service
******************/

router[email.SERVICE.RESTART.method](email.SERVICE.RESTART.link, [
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  emailService.reverifyTheService.bind(this),
]);

router[email.SERVICE.GET.method](email.SERVICE.GET.link, [
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  emailService.sendAdminServiceDetails.bind(this),
]);

router[email.SERVICE.UPDATE.method](email.SERVICE.UPDATE.link, [
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  emailService.validateUpdatedServiceDetails.bind(this),
  emailService.updateServiceDetails.bind(this),
]);

router[email.SERVICE.UPDATE_PASSWORD.method](email.SERVICE.UPDATE_PASSWORD.link, [
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  emailService.updateServicePassword.bind(this),
]);

/******************
    Stored
******************/

router[email.STORED.SEND.method](email.STORED.SEND.link, [
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  emailService.sendStoredLateEmails.bind(this),
]);

router[email.STORED.RETRIEVE.method](email.STORED.RETRIEVE.link, [
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  emailService.retrieveStoredLateEmails.bind(this),
]);

router[email.STORED.REMOVE.method](email.STORED.REMOVE.link, [
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  emailService.emailExistsById.bind(this),
  emailService.removeStoredEmailByIndex.bind(this),
]);

router[email.STORED.UPDATE.method](email.STORED.UPDATE.link, [
  authentication.checkAuthenticationToken.bind(this),
  authentication.checkAdminPortalAccess.bind(this),
  emailService.emailExistsById.bind(this),
  emailService.updateStoredEmailByIndex.bind(this),
]);

export default router;
