import Uppy, { Meta, Body } from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import type { PluginTypeRegistry } from '@uppy/core'

// Test the exact scenario
type UppyDefaultBody = Record<string, never>
type Registry = PluginTypeRegistry<Meta, UppyDefaultBody>
type DashboardKey = 'Dashboard' extends keyof Registry ? true : false // Should be true

const uppy = new Uppy<Meta, UppyDefaultBody>()
const d1 = uppy.getPlugin('Dashboard')

// Try without explicit generics
const uppy2 = new Uppy()
const d2 = uppy2.getPlugin('Dashboard')
