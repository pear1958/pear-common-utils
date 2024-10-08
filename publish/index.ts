import { series } from 'gulp'

import run from './run'

export const publishUtils = async () => {
  run('release-it', '../dist')
}

export default series(async () => publishUtils())
