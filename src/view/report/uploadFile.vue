<!-- <template>
    <div class="col-md-4 col-12">
        <b-form-group id="input-group-2" label="Document Upload:" label-for="profile_picture">
            <div ref="dropZone"
                style="margin-left: 3px; margin-bottom: 15px; border: 2px dashed #ccc; padding: 20px; text-align: center; cursor: pointer"
                @drop="handleDrop" @dragover.prevent @click="showInfoMessage">
                <span>Click and drag to this area to upload</span>
            </div>
            <input type="file" accept="image/*" id="image[]" style="display: none" ref="fileInput"
                @change="handleFileInput" />
        </b-form-group>
    </div>
</template>

<script>

export default {
    methods: {
        handleDrop(event) {
            event.preventDefault();
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                this.handleFile(files[0]);
            }
        },
        handleFileInput(event) {
            const selectedFile = event.target.files[0];
            this.handleFile(selectedFile);
        },
        handleFile(file) {
            if (file) {
                // Handle the selected file, such as uploading or displaying
                console.log("Selected file:", file);
            }
        },
        showInfoMessage() {
            alert("Please do not cancel this process until it's complete.");
        }
    }
};
</script> -->
