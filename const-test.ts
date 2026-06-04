import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'

const uppy = new Uppy()

// Without const assertion
const d1 = uppy.getPlugin('Dashboard')

// With const assertion (ensure it's a string literal)
const dashboardId = 'Dashboard' as const
const d2 = uppy.getPlugin(dashboardId)

// Direct literal
const d3 = uppy.getPlugin('Dashboard' as 'Dashboard')

// Check types
const t1: never = d1
const t2: never = d2
const t3: never = d3
