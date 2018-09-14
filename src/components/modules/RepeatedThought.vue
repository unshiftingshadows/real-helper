<template>
  <q-card>
    <div>
      <q-card-title>
        Repeated Thought
      </q-card-title>
      <q-card-main>
        <p>{{ lesson.mainIdea }}</p>
      </q-card-main>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'mod-repeated-thought',
  props: {
    seriesid: {
      type: String,
      required: true
    },
    lessonid: {
      type: String,
      required: true
    },
    fiery: {
      required: true
    },
    firebasse: {
      required: true
    }
  },
  fiery: true,
  data () {
    return {
      lesson: this.fiery(this.firebase.lessonsRef(this.seriesid).doc(this.lessonid))
    }
  }
}
</script>

<style>
</style>
