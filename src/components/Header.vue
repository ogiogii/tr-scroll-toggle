<template>
  <header class="header">
    <nav class="steps" ref="steps">
      <span v-for="(s, i) in steps" :key="i" :ref="el => stepEls[i]=el" @click="$emit('jump', i)">
        {{ s }}
      </span>
      <div class="underline" ref="underline"></div>
    </nav>
    <div class="counter">{{ active + 1 }} / {{ total }}</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    active: { type: Number, default: 0 },
    total: { type: Number, default: 3 }
  },
  data() {
    return {
      steps: ['Plan','Design','Build'],
      stepEls: []
    }
  },

  watch: {
    active() { this.updateUnderline() }
  },
  mounted() {
    window.addEventListener('resize', this.updateUnderline)
    this.$nextTick(() => this.updateUnderline())
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateUnderline)
  },
  methods: {
    updateUnderline() {
      const idx = this.active || 0
      const el = this.stepEls[idx]
      const underline = this.$refs.underline
      if (!el || !underline) return
      const stepsRect = this.$refs.steps.getBoundingClientRect()
      const rect = el.getBoundingClientRect()
      const left = rect.left - stepsRect.left
      underline.style.width = rect.width + 'px'
      underline.style.transform = `translateX(${left}px)`
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(1, 14, 1, 0.6);
}

.steps {
  position: relative;
  display: flex;
  gap: 32px;
  color: #c7ff3d;
  align-items: flex-end;
}

.steps span {
  cursor: pointer;
  font-size: 20px;
  opacity: .6;
  
}

.steps span:hover { opacity: 1 }

.underline {
  position: absolute;
  height: 2px;
  background: #c7ff3d;
  left: 0;
  bottom: -6px;
  transform: translateX(0);
  transition: transform 0.35s cubic-bezier(.22,.9,.39,1), width 0.35s;
  will-change: transform, width;
}

.counter {
  color: #c7ff3d;
  font-size: 14px;
}
</style>
