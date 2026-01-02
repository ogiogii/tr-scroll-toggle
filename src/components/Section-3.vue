<template>
  <section id="section-3" class="section">
    <h2 ref="title">Thanks for Scrolling</h2>
    <p ref="text">This section marks the end of the experience.</p>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'SectionThree',
  mounted() {
    gsap.from([this.$refs.title, this.$refs.text], {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: this.$el,
        start: 'top 75%'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.section {
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #0e0e0e;
  text-align: center;
}

h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  color: #aaa;
  font-size: 1.2rem;
}
</style>
