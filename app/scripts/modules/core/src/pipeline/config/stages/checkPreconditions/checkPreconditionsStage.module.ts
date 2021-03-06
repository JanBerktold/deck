import { module } from 'angular';

import { CHECK_PRECONDITIONS_STAGE } from './checkPreconditionsStage';
import { STAGE_COMMON_MODULE } from '../common/stage.common.module';

export const CHECK_PRECONDITIONS_STAGE_MODULE = 'spinnaker.pipelines.stage.checkPreconditions';
module(CHECK_PRECONDITIONS_STAGE_MODULE, [
  require('../stage.module').name,
  STAGE_COMMON_MODULE,
  CHECK_PRECONDITIONS_STAGE,
]);
