<template>
  <div>
    <Header
      :active="activeIndex"
      :total="slides.length"
      @jump="scrollToIndex"
      ref="header"
    />

    <!-- ===== HOME SECTION ===== -->
    <main class="page" ref="page">
      <div class="left-column">
        <SectionOne ref="s1" />
        <SectionTwo ref="s2" />
        <SectionThree ref="s3" />
      </div>

      <aside class="right-panel" ref="rightPanel">
        <img
          :src="current.image"
          class="panel-image"
          :key="current.image"
        />
        <img
          :src="current.logo"
          class="panel-logo"
          :key="current.logo"
        />
      </aside>
    </main>

    <!-- ========== -->
    <section class="zoom-sections">
      
      <div
        class="zoom-item"
        v-for="(item, i) in slides"
        :key="'zoom-' + i"
        ref="zoomItems"
      >
        <img :src="item.image" />
        <div class="zoom-text">
          
          <h1>{{ item.title }}</h1>
        </div>
      </div>
    </section>
    <!-- ========== -->
    <section class="thank-you">
      <h1>Thank you</h1>
    </section>
  </div>
</template>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SectionOne from '@/components/Section-1.vue'
import SectionTwo from '@/components/Section-2.vue'
import SectionThree from '@/components/Section-3.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'HomePage',
  components: { Header, SectionOne, SectionTwo, SectionThree },

  data() {
    return {
      activeIndex: 0,
      slides: [
        {
          title: 'Plan',
          image: require('@/assets/images/imgi_2_638e3f15b3ed3463ebe6038b_pexels-wendy-wei-14397945.jpg'),
          logo: require('@/assets/images/imgi_1_638e411bd0e9dd70ed4f30e8_plan.svg')
        },
        {
          title: 'Design',
          image: require('@/assets/images/imgi_4_638e4092e9575c0f9629ae01_walls.jpg'),
          logo: require('@/assets/images/imgi_3_638e3f259cd4ab766024d0e3_icon.svg')
        },
        {
          title: 'Build',
          image: require('@/assets/images/imgi_6_638e45c467fd8f44a5687f97_pexels-cottonbro-studio-5474032.jpg'),
          logo: require('@/assets/images/imgi_5_638e45c4ee2e7c91334d22ba_code.svg')
        }
      ]
    }
  },

  computed: {
    current() {
      return this.slides[this.activeIndex]
    }
  },

  mounted() {
    /* ===== EXISTING SCROLL  ===== */
    const total = this.slides.length
    ScrollTrigger.create({
      trigger: this.$refs.page,
      start: 'top top',
      end: `+=${total * 100}%`,
      scrub: true,
      onUpdate: self => {
        const idx = Math.min(
          total - 1,
          Math.floor(self.progress * total)
        )
        if (idx !== this.activeIndex) {
          this.activeIndex = idx
        }
      }
    })

    this.$watch('activeIndex', () => {
      const img = this.$refs.rightPanel.querySelector('.panel-image')
      const logo = this.$refs.rightPanel.querySelector('.panel-logo')

      gsap.fromTo(
        img,
        { autoAlpha: 0, scale: 1.02 },
        { autoAlpha: 1, scale: 1, duration: 0.6 }
      )
      gsap.fromTo(
        logo,
        { autoAlpha: 0, scale: 0.95 },
        { autoAlpha: 1, scale: 1, duration: 0.6 }
      )
    })

    /* ========== */
    this.$refs.zoomItems.forEach(section => {
      const img = section.querySelector('img')

      gsap.fromTo(
        img,
        { scale: 0.6 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top top',
            scrub: true
          }
        }
      )
    })
  },

  methods: {
    scrollToIndex(i) {
      const top =
        this.$refs.page.getBoundingClientRect().top +
        window.scrollY
      const target = top + i * window.innerHeight
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
/* ===== EXISTING STYLES ===== */
.page {
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 40px;
  align-items: start;
}

.left-column {
  min-width: 0;
}

.right-panel {
  position: sticky;
  top: 120px;
  width: 520px;
  height: 72vh;
  border-radius: 28px;
  overflow: hidden;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel-image {
  position: absolute;
  width: 100%;
  height: 72vh;
  object-fit: cover;
}

.panel-logo {
  position: relative;
  z-index: 2;
  width: 120px;
}

/* ===== ===== */
.zoom-item {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.zoom-item img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.zoom-text {
  position: absolute;
  inset: 0;
  z-index: 2;
  color: #c7ff3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.zoom-text span {
  font-size: 14px;
  margin-bottom: 12px;
}

.zoom-text h1 {
  font-size: 6rem;
  font-style: italic;
  margin: 0;
}

.zoom-text p {
  max-width: 420px;
  margin-top: 16px;
  color: #9fb06b;
}

</style>
