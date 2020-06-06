import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
    interface ElementAttributesProperty {
      $props: {}
    }
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $style: { [key: string]: string }
  }
}
