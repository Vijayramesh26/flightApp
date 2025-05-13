<script>
import TabSection from './components/tabSection.vue';
export default {
    components: {
        TabSection
    },
    methods: {
        moveToAddFlight() {
            this.$emit('moveToAddFlight')
        },
    }, props: {
        flightHome: {}
    }
}
</script>

<template>
    <div>
        <TabSection @moveToAddFlight="moveToAddFlight"  :flightHome="flightHome"/>
    </div>
</template>