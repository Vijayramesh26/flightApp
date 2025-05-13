<script>
import TabSection from './components/tabSection.vue';
export default {
    components: {
        TabSection
    },
    methods:{
        moveToAddFlight(){
            this.$emit('moveToAddFlight')
        },
    }
}
</script>

<template>
    <div>
        <TabSection @moveToAddFlight="moveToAddFlight"/>
    </div>
</template>