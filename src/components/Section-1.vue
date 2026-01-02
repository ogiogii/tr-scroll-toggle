<template>
  <section id="section-1" class="section">
    <div class="inner" ref="box">
      <h1 ref="title">Scroll Toggle</h1>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'SectionOne',
  mounted() {
    // Animasi teks masuk
    gsap.from(this.$refs.title, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.$el,
        start: 'top 70%'
      }
    })

    // Pin section + animasi berdasarkan scroll
    gsap.to(this.$refs.box, {
      xPercent: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: this.$el,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e0e0e;
  overflow: hidden;
}

.inner {
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 4rem;
  font-weight: 600;
}
</style>
