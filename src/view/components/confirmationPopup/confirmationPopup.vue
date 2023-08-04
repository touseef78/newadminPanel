<!-- ConfirmationPopup.vue -->
<template>
    <div class="confirmation-popup">
        <p>Are you sure?</p>
        <button @click="confirm">Yes</button>
        <button @click="cancel">No</button>
    </div>
</template>

<script>
export default {
    methods: {
        confirm() {
            // Emit an event to the parent component to perform the delete action
            this.$emit("confirmed");
        },
        cancel() {
            // Emit an event to the parent component to cancel the delete action
            this.$emit("canceled");
        },
    },
};
</script>

<style>
.confirmation-popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
}
</style>
