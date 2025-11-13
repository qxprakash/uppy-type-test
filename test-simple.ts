import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'

const uppy = new Uppy()
uppy.use(Dashboard)

// Case 1: literal string → typed as Dashboard<Meta, Body> | undefined
const literalDashboard = uppy.getPlugin('Dashboard')

// openModal exists and ts doesn't complain
literalDashboard?.openModal()

// Case 2: dynamic string → fallback overload, typed as UnknownPlugin<Meta, Body> | undefined
const pluginName: string = 'Dashboard'
const dynamicDashboard = uppy.getPlugin(pluginName)

// openModal does not exists , since the type is UnknownPlugin and ts complains
dynamicDashboard?.openModal()
// hover dynamicDashboard – TypeScript no longer knows it’s the Dashboard plugin