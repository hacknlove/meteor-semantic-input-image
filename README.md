# semantic-input-image

## use:

### Template:
    {{> inputImage name="foo" class="bar buz" default="/example.jpg"}}

where: `name`, `class` and `default` are optionals

* `name` sets the name of the `<input type="file"`
* `class` adds some clases to the `<div class="field">` wrapper
* `default` sets the default image src

### Events:

    Template.yourtemplate.events({
        'fileloaded input[name=foo]': function (event, instance, dataURL) {
          // image has been loaded
          // dataURL = "data:image/...;base64,iVBORw0KGgo..."
        },
        'cancel input[name=foo]': function (event, instance) {
          // user has canceled (and data was set to default)
        },
        'cancel input[name=foo]': function (event, instance) {
          // the file choosen is not an image (and data was set to default)
        },
    })

### Data:
    $('input[name=foo]').data('dataURL') => default or "data:image/...;base64,iVBORw0KGgo..."
