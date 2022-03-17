![npm](https://img.shields.io/npm/v/saved-panel-animations)

# saved-panel-animations
A small library for an easy 'Saved Successful!' toast using Bootstrap modals.

## Install
### NPM
`npm i saved-panel-animations`
### CDN

```
<link rel="stylesheet" href="https://unpkg.com/saved-panel-animations/dist/index.min.css">
<script src="https://unpkg.com/saved-panel-animations/dist/index.min.js"></script>
```

## Usage
### savedPanel
**index.html**
```
<div class="modal fade savedPanel" id="savedPanel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content savedPanel contentModal">
			<div class="modal-body text-center">
				<p>
					Saved Successful!
				</p>
			</div>
		</div>
	</div>
</div>
```
**index.js**
```
import { savedPanel } from 'saved-panel-animations'

savedPanel()
```
