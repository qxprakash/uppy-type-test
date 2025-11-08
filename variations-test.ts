import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import type { Meta, Body } from '@uppy/core'

// Variation 1: Explicit generics everywhere
const uppy1 = new Uppy<Meta, Body>()
uppy1.use(Dashboard)  // Note: Dashboard is a class, not Dashboard<Meta, Body>
const dashboard1 = uppy1.getPlugin<Dashboard<Meta, Body>>('Dashboard')
if (dashboard1) {
  dashboard1.openModal()
}

// Variation 2: Explicit generic only on getPlugin
const uppy2 = new Uppy<Meta, Body>()
uppy2.use(Dashboard)
const dashboard2 = uppy2.getPlugin<Dashboard<Meta, Body>>('Dashboard')
if (dashboard2) {
  dashboard2.openModal()
}

// Variation 3: No explicit generics on getPlugin (Type Registry kicks in)
const uppy3 = new Uppy<Meta, Body>()
uppy3.use(Dashboard)
const dashboard3 = uppy3.getPlugin('Dashboard')
if (dashboard3) {
  dashboard3.openModal()
}

// Let's force type errors to see what types are inferred
const test1: never = dashboard1
const test2: never = dashboard2
const test3: never = dashboard3
