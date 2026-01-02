<template>
  <main>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </main>
</template>

<script>
import SectionOne from '@/components/SectionOne.vue'
import SectionTwo from '@/components/SectionTwo.vue'
import SectionThree from '@/components/SectionThree.vue'

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree
  }
}
</script>
