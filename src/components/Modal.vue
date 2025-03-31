<template>
    <div class="modal fade" :class="{'show': isVisible}" tabindex="-1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" :style="{ display: isVisible ? 'block' : 'none' }">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" aria-label="Close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-sm mr-2" @click="close">Close</button>
            <button type="button" class="btn btn-outline-success btn-sm">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false
      };
    },
    methods: {
      open() {
        this.isVisible = true;
        // Optionally, if you want to manually trigger jQuery's show/hide (if you're using it):
        // $(this.$refs.modal).modal('show');
      },
      close() {
        this.isVisible = false;
        // Optionally, you can also manually close it with jQuery:
        // $(this.$refs.modal).modal('hide');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Make sure the modal overlay is handled */
  .modal.show {
    display: block !important;
  }
  </style>
  