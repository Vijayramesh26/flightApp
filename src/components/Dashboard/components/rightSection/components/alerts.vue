<template>
    <v-card class="rounded-lg" elevation="2" min-height="400">
        <v-card-title class="text-h6 font-weight-bold">Alerts</v-card-title>

        <v-list dense two-line>
            <div v-for="(alert, index) in alerts" :key="index">
                <v-list-item>
                    <v-list-item-avatar tile size="36">
                        <v-icon color="red">{{ alert.icon }}</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">{{ alert.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ alert.subtitle }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <span class="grey--text">{{ alert.time }}</span>
                    </v-list-item-action>
                </v-list-item>

                <v-divider />
            </div>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            //
        };
    },
    props: {
        alerts: []
    },
};
</script>
