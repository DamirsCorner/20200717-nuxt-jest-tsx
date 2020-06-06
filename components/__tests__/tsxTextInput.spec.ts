import { shallowMount } from '@vue/test-utils'
import TsxTextInput, { TsxTextInputProps } from '../TsxTextInput'

describe('TsxTextInput component', () => {
  it('should render the input label', () => {
    const props: TsxTextInputProps = {
      id: 'id',
      label: 'Label:'
    }

    const wrapper = shallowMount(TsxTextInput, { propsData: props })

    expect(wrapper.find('label').text()).toBe(props.label)
  })
})
