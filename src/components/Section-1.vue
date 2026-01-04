<template>
  <section class="section">
    <div class="inner">
      <h2>Plan</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, nisi illum. Eius nesciunt harum, minima soluta ea assumenda provident molestias dignissimos id. Quo deleniti veniam impedit debitis pariatur similique obcaecati!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionOne'
}
</script>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.inner {
  padding: 0 4rem;
  max-width: 520px;
}

.label {
  color: #9fb06b;
  font-size: 14px;
  display: block;
  margin-bottom: 12px;
}

h2 {
  font-size: 48px;
  color: #c7ff3d;
  margin-bottom: 16px;
}

p {
  color: #9fb06b;
  line-height: 1.6;
}
</style>
