<!-- <template>
    <div id="map" style="height: 400px;"></div>
</template>

<script>
export default {
    mounted() {
        // Load Google Maps API script
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?keyAIzaSyDRL4y2_cSzAcP0bedr-67CkG1kifDKYfg&callback=initMap`;
        script.defer = true;
        script.async = true;
        script.onerror = () => {
            console.error("Failed to load Google Maps API!");
        };
        window.initMap = this.initMap;
        document.head.appendChild(script);
    },
    methods: {
        initMap() {
            // Initialize map
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 0, lng: 0 },
                zoom: 8,
            });

            // Example: Update car position
            const carPosition = { lat: 37.7749, lng: -122.4194 }; // Example position
            const carMarker = new google.maps.Marker({
                position: carPosition,
                map: map,
                title: "Car",
            });

            // Example: Update car position dynamically (replace with your live data)
            setInterval(() => {
                carMarker.setPosition({
                    lat: carPosition.lat + Math.random() * 0.01 - 0.005,
                    lng: carPosition.lng + Math.random() * 0.01 - 0.005,
                });
            }, 1000); // Update every second
        },
    },
};
</script> -->
