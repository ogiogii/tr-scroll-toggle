<template>
  <section id="section-2" class="section">
    <div class="wrapper" ref="wrapper">
      <div class="panel" v-for="n in 4" :key="n">
        <h2>Panel {{ n }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'SectionTwo',
  mounted() {
    const panels = this.$el.querySelectorAll('.panel')

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: this.$el,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${this.$el.offsetWidth}`
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.section {
  height: 100vh;
  overflow: hidden;
}

.wrapper {
  display: flex;
  width: 400vw;
  height: 100%;
}

.panel {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: #111;
  border-right: 1px solid #222;
}
</style>
