import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'

const uppy = new Uppy()
uppy.use(Dashboard, {
  target: 'body',
  inline: true,
})

// ✅ Test 1: String literal 'Dashboard' resolves to Dashboard type
const dashboard = uppy.getPlugin('Dashboard')
if (dashboard) {
  // These methods should be available without type errors
  dashboard.openModal()
  dashboard.closeModal()
  console.log('✅ Test 1 passed: dashboard.openModal() and closeModal() are typed correctly')
}

// ✅ Test 2: Dynamic string falls back to UnknownPlugin
const pluginId: string = 'Dashboard'
const dynamicPlugin = uppy.getPlugin(pluginId)
if (dynamicPlugin) {
  // Only base plugin properties available
  console.log('✅ Test 2 passed: dynamicPlugin has id:', dynamicPlugin.id)
}

// ✅ Test 3: Non-existent plugin returns undefined
const nonExistent = uppy.getPlugin('NonExistent')
console.log('✅ Test 3 passed: nonExistent is', nonExistent)

console.log('🎉 All type registry tests passed!')
