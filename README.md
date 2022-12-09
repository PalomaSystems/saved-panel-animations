![npm](https://img.shields.io/npm/v/saved-panel-animations)
[![Release new version to NPMJS](https://github.com/kylescudder/saved-panel-animations/actions/workflows/publish.yml/badge.svg)](https://github.com/kylescudder/saved-panel-animations/actions/workflows/publish.yml)
[![Create new GitHub Release](https://github.com/kylescudder/saved-panel-animations/actions/workflows/github_release.yml/badge.svg)](https://github.com/kylescudder/saved-panel-animations/actions/workflows/github_release.yml)

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
**index.js**
```
import { savedPanel } from 'saved-panel-animations'

savedPanel()
```
### deletedPanel
**index.js**
```
import { deletedPanel } from 'saved-panel-animations'

deletedPanel()