import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'

const uppy = new Uppy()
uppy.use(Dashboard, {
  target: 'body',
  inline: true,
})

// Test 1: String literal 'Dashboard' should resolve to Dashboard<Meta, Body> type
const dashboard = uppy.getPlugin('Dashboard')?.openModal

// Test 2: Dynamic string should fall back to UnknownPlugin
const pluginId: string = 'Dashboard'
const dynamicPlugin = uppy.getPlugin(pluginId)
if (dynamicPlugin) {
  // This should be UnknownPlugin, no specific methods available
  console.log(dynamicPlugin.id)
}

console.log('Type registry test successful!')
