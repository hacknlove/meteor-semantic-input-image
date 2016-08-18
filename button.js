/* globals Template, FileReader  */

Template.inputImage.onRendered(function () {
  if (!this.$('input').data('dataURL')) {
    this.$('input').data('dataURL', this.data.default).trigger('fileloaded', this.data.default)
  }
})

Template.inputImage.events({
  'change input': function (event, instance) {
    var $this = instance.$(event.currentTarget)
    var file = event.currentTarget.files[0]

    if (!file) {
      $this.data('dataURL', Template.currentData().default)
      return $this.trigger('cancel')
    }
    if (!file.type.match('image.*')) {
      $this.data('dataURL', Template.currentData().default)
      return $this.trigger('badtype')
    }

    var reader = new FileReader()

    reader.onload = function (e) {
      $this.data('dataURL', e.target.result)
      return $this.trigger('fileloaded', e.target.result)
    }
    reader.readAsDataURL(file)
  }
})
