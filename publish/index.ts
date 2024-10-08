import { series } from 'gulp'
import { resolve } from 'path'

import run from './run'

const rootPath = resolve(__dirname, '../')

export const publishUtils = async () => {
  run('release-it', `${rootPath}/dist`)
}

export default series(async () => publishUtils())
