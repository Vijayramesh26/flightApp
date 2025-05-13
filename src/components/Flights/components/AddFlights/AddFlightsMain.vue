
<template>
    <div>
        <Stepper @moveToFlight="moveToFlight" :addFlights="addFlights" />
    </div>
</template>

<script>
import Stepper from './components/stepper.vue';
export default {
    components: {
        Stepper
    },
    methods: {
        moveToFlight() {
            this.$emit('moveToAddFlight')
        },
    }, props: {
        addFlights: {}
    }
}
</script>
