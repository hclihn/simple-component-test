/*global Vue set_style_mixin */
Vue.component("test-comp", {
  mixins: [set_style_mixin],
  data: function () {
    return {};
  },
  template: `
    <div class="test-comp">
      <p>This is a test component</p>
      <v-btn>Test</v-btn><br/>
      <slot>Fallback this</slot>
    </div>
  `,
  styles: `
  .test-comp {
    border: 2px solid rgba(0, 0, 0, 0.2);
    padding: 5px;
  }
  .test-comp p {
    color: blue;
  }
  `
});
