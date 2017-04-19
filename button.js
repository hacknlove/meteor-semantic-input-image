/* globals
  Template
  URL
*/

Template.inputImage.onRendered(function () {
  if (!this.$('input.inputImage').val() && this.data.default) {
    this.$('input.inputImage').val(this.data.default).trigger('change', this.data.default)
  }
})

Template.inputImage.events({
  'change input[type=file]': function (event, instance) {
    var hidden = instance.$('input.inputImage')

    var file = event.currentTarget.files[0]

    if (!file) {
      hidden.val(Template.currentData().default)
      return hidden.trigger('change')
    }
    if (!file.type.match('image.*')) {
      hidden.val(Template.currentData().default)
      return hidden.trigger('change')
    }

    hidden.val(URL.createObjectURL(file))
    hidden.data('file', file)
    return hidden.trigger('change', URL.createObjectURL(file), file)
  }
})
