# NativeScript Star Ratings

[![npm](https://img.shields.io/npm/v/nativescript-star-ratings.svg)](https://www.npmjs.com/package/nativescript-star-ratings)
[![npm](https://img.shields.io/npm/dt/nativescript-star-ratings.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-star-ratings)
[![Build Status](https://travis-ci.org//triniwiz/nativescript-star-ratings.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-star-ratings)

## Installation

```
tns plugin add nativescript-star-ratings
```

# Configuration

IMPORTANT: Make sure you include xmlns:ui="nativescript-star-ratings" on the
Page element

```xml
<ui:StarRating emptyBorderColor="white" emptyColor="white" filledBorderColor="black" filledColor="red" value="2" max="5"/>
```

#### Angular

```
import { registerElement } from 'nativescript-angular/element-registry';
registerElement('StarRating', () => require('nativescript-star-ratings').StarRating);
```

```xml
<StarRating emptyBorderColor="white" emptyColor="white" filledBorderColor="black" filledColor="red" value="{{value}}" max="{{max}}"></StarRating>
```


# API


## Properties

| Property | Default | Type | Required | Description  |
| --- | --- | --- | ---| ---|
| emptyBorderColor | blue | string | <ul><li>- [ ] </li></ul> | *IOS only*|
| emptyColor | white | string | <ul><li>- [ ] </li></ul> |  |
| filledBorderColor | blue | string | <ul><li>- [ ] </li></ul> | *IOS only*|
| filledColor | blue | string | <ul><li>- [ ] </li></ul> |  |
| value | 0 | number | <ul><li>- [ ] </li></ul> |  |
| max | 5 | number | <ul><li>- [ ] </li></ul> |  |



## ScreenShots
| IOS | Android|
| --- | ---|
|![IOS](https://i.imgur.com/KCI4lXA.gif) | ![Android](https://i.imgur.com/nS0Ag8V.gif)|



# TODO

* [ ] Custom images
