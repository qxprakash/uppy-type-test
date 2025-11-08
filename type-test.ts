import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'

const uppy = new Uppy()
const d = uppy.getPlugin('Dashboard')

// Force a type error to see what `d` is inferred as
const forceError: never = d
