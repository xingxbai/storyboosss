import xxbStep from '../src/step.vue'

export default {
  title: 'xxbStep',
  component: xxbStep
}

export const Step = _ => ({
  components: { xxbStep },
  template: `
    <div>
      <xxb-step></xxb-step>
    </div>
  `
})