# Window Date Picker React
React integration for [Window Date Picker.](https://github.com/cevadtokatli/window-date-picker)

## NPM
```
npm install --save-dev window-date-picker-react
```

## Yarn
```
yarn add window-date-picker-react --dev 
```

## Installation
```
import React from 'react';
import WindowDatePicker from 'window-date-picker-react';

export default class extends React.Component {
  render() {
    return <WindowDatePicker />
  }
}
```

Add the css file.
```
<link rel="stylesheet" href="/node_modules/window-date-picker-react/dist/css/window-date-picker.min.css" />
```

## Settings
Option | Type | Default | Description
------ | ---- | ------- | -----------
value | String\|Number\|Date | null | The picker's initial value.
inputEl | String\|HTMLElement* | null | Input element.
toggleEl | String\|HTMLElement* | null | Toggle element.
type | String | "DATE" | Sets picker type. _(DATE, HOUR, DATEHOUR)_
dateType | String | "DD/MM/YYYY" | 	Sets date type. _(DD/MM/YYYY, MM/DD/YYYY)_
hourType | String | "12" | Sets hour type. _(12, 24)_
allowEmpty | Boolean | true | A boolean value that indicates whether null and empty value are allowed or not.
showButtons | Boolean | false | A boolean value that indicates whether the buttons are visible or not.
inputToggle | Boolean | true | If sets true, opens the picker when the input is clicked.
lang | String | "en" | Changes language of the picker. You have to create a language except _“en (English)”_ before use it.

<span style="font-size:.9rem;">*: You can give an HTML element or a CSS selector (like `#carousel`, `.container > div:first-child`)</span>

## Methods
Method | Params | Return | Description
------ | ------ | ------ | -----------
get | | { value: String, day: Number, month: Number, year: Number, hour: Number, minute: Number, am: Boolean } | Returns the value.
set | value: String\|Number\|Date | void | Sets the value.
open | | void | Opens the picker.
close | | void | Closes the picker.
toggle | | void | Toggles the picker.
save | | void | Saves the selection.
cancel | | void | Cancels the selection.
destroy | | void | 	Destroys the picker.

## Events
Event | Description
----- | -----------
onChange | Fires when the value changes.
onOpen | 	Fires when the picker opens.
onClose | Fires when the picker closes.
onSave | Fires when the selection is saved.
onCancel | Fires when the picker is closed without being saved.
onDestroy | Fires when the picker is destroyed.

```
import React from 'react';
import WindowDatePicker from 'window-date-picker-react';

export default class extends React.Component {
  open() {
    console.log('open');
  }

  close() {
    console.log('close');
  }

  render() {
    return(<WindowDatePicker onOpen={this.open} onClose={this.close} />)
  }
}
```

## IE Support
IE 10 is not supported and patches to fix problems will not be accepted.

## License
Window Date Picker React is provided under the [MIT License](https://opensource.org/licenses/MIT).