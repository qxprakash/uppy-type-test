import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import type { PluginTypeRegistry, Meta, Body } from '@uppy/core'

// Explicitly check what's in the registry
type MyRegistry = PluginTypeRegistry<Meta, Body>

// This should error if 'Dashboard' is NOT in the registry
type Test1 = MyRegistry['Dashboard']

// This should NOT error if 'Dashboard' IS in the registry  
const testKey: keyof MyRegistry = 'Dashboard'

console.log(testKey)
