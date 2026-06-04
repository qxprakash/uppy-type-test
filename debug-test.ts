import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import type { PluginTypeRegistry } from '@uppy/core'

const uppy = new Uppy()

// Check what keys are in the registry
type Keys = keyof PluginTypeRegistry<any, any>

// Check if 'Dashboard' is assignable to Keys
type Test = 'Dashboard' extends Keys ? true : false

const dashboard = uppy.getPlugin('Dashboard')
