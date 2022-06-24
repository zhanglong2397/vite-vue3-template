import { h } from 'vue'
import { NIcon, NTag } from 'naive-ui'
/**
 * render 图标
 * */
export function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
