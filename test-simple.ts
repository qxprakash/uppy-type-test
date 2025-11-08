import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import type {Meta , Body } from '@uppy/core'
const uppy = new Uppy<Meta, Body>()
uppy.use(Dashboard)

const dashboard = uppy.getPlugin<Dashboard<Meta, Body>>('Dashboard')?.openModal()
// Hover over dashboard to see its type


/**
 *
 * (method) Uppy<Meta, Body>.getPlugin<Dashboard<Meta, Body>>(id: string): Dashboard<Meta, Body> | undefined (+1 overload)
 */