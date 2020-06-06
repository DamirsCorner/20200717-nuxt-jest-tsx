import Vue from 'vue'
import Component from 'vue-class-component'
import TsxTextInput from '~/components/TsxTextInput'

@Component({
  components: { TsxTextInput },
  render(this: TsxPage): Vue.VNode {
    return (
      <div>
        <TsxTextInput
          id="input"
          label="Input: "
          valueChanged={(newValue: string) => (this.value = newValue)}
        />
        <div>{this.value}</div>
      </div>
    )
  }
})
export default class TsxPage extends Vue {
  value = ''
}
