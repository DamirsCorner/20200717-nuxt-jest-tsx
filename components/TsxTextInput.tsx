import Component from 'vue-class-component'
import { VueComponent } from './VueComponent'

export interface TsxTextInputProps {
  id: string
  label: string
  value?: string
  valueChanged?: (value: string) => void
}

@Component({
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, required: false, default: '' },
    valueChanged: { type: Function, required: false }
  },
  render(this: TsxTextInput): Vue.VNode {
    return (
      <div>
        <label for={this.$props.id}>{this.$props.label}</label>
        <input
          id={this.$props.id}
          name={this.$props.id}
          type="text"
          value={this.$props.value}
          onInput={(event: InputEvent) => this.handleInput(event)}
        />
      </div>
    )
  }
})
export default class TsxTextInput extends VueComponent<TsxTextInputProps> {
  private handleInput(event: InputEvent): void {
    this.$props.valueChanged?.((event.target as HTMLInputElement).value)
  }
}
