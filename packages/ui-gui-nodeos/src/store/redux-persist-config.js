//Ref: https://github.com/edy/redux-persist-transform-filter

import storage from 'redux-persist/lib/storage';
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';

const reduxPersistFilters = [
  createFilter(
    'blocklistPage',
    ['blocklist.filter']
  ),
  createFilter(
    'endpoint',
    ['path']
  ),
  createFilter(
    'deploymentPage',
    [
      'deployContainer.path', 'deployContainer.stdoutLog', 'deployContainer.stderrLog',
      'deployContainer.wasmPath', 'deployContainer.abiPath', 'deployContainer.abiContents',
      'deployContainer.errors'
    ]
  )
]

export default {
  key: 'root',
  storage,
  whitelist: ['blocklistPage', 'deploymentPage', 'permission', 'endpoint'],
  transforms: [
    ...reduxPersistFilters
  ]
}
