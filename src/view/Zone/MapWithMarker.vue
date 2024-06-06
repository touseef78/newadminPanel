<template>
    <div id="map" style="height: 300px; width: 100%;"></div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
    props: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            map: null
        };
    },
    watch: {
        latitude: 'initializeMap',
        longitude: 'initializeMap'
    },
    mounted() {
        this.initializeMap();
    },
    methods: {
        initializeMap() {
            const loader = new Loader({
                apiKey: 'AIzaSyDRL4y2_cSzAcP0bedr-67CkG1kifDKYfg', // Replace with your actual API key
                version: 'weekly',
            });

            loader.load().then(() => {
                const mapOptions = {
                    center: { lat: this.latitude, lng: this.longitude },
                    zoom: 14,
                };
                this.map = new google.maps.Map(this.$el, mapOptions);
                new google.maps.Marker({
                    position: { lat: this.latitude, lng: this.longitude },
                    map: this.map,
                });
            }).catch(e => {
                console.error('Error loading Google Maps API', e);
            });
        }
    }
};
</script>

<style>
#map {
    height: 300px;
    width: 100%;
}
</style>
