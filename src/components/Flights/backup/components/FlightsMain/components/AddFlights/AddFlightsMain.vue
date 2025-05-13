<script>
import Stepper from './components/stepper.vue';
export default {
    components: {
        Stepper
    },
    methods:{
        moveToFlight(){
            this.$emit('moveToAddFlight')
        },
    }
}
</script>

<template>
    <div>
        <Stepper @moveToFlight="moveToFlight" />
    </div>
</template>