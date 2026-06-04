import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import type { PluginTypeRegistry } from '@uppy/core'

// Check if module augmentation works
type Reg = PluginTypeRegistry<any, any>
type Keys = keyof Reg

// Should include 'Dashboard' 
const test: Keys = 'Dashboard' // This should not error if augmentation works

const uppy = new Uppy()
const d = uppy.getPlugin('Dashboard')
