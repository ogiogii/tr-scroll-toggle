<template>
  <header class="header">
    <nav>
      <a href="#" @click.prevent="scrollTo('one')">Intro</a>
      <a href="#" @click.prevent="scrollTo('two')">Scroll</a>
      <a href="#" @click.prevent="scrollTo('three')">End</a>
    </nav>
  </header>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default {
  methods: {
    scrollTo(id) {
      gsap.to(window, {
        duration: 1,
        scrollTo: `#section-${id}`,
        ease: 'power2.out'
      })
    }
  }
}
</script>
