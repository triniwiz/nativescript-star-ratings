# NativeScript Star Ratings (iOS)
[![npm](https://img.shields.io/npm/v/nativescript-star-ratings.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/nativescript-star-ratings)
[![npm](https://img.shields.io/npm/dt/nativescript-star-ratings.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/nativescript-star-ratings)
This plugin contains the UI control for a star rating inside your NativeScript app. Currently this plugin is in development and only for iOS.

![Image](http://g.recordit.co/q47RovtwmM.gif)

## Usage
#### Define Plugin Element in Page
```
xmlns:TNSStarRatings="nativescript-star-ratings"
```
#### Use element inside view
```
<TNSStarRatings:StarRating width="300" height="40" value="1" />
```

## Options
|Property|Type|Default|
|---|---|---|
|max|number|10|
|min|number|0|
|value|number|0|
|starColor|UIColor|red|
|allowsHalfStars|boolean|false|
|accurateHalfStars|boolean|true|
|emptyStar|string|"heart-empty"|
|halfStar|string|"heart-half"|
|filledStar|string|"heart-full"

## Contributing
Feel free to submit a PR (pull-request) for new features, bug fixes, etc.


## Credits
* https://github.com/hsousa/HCSStarRatingView (POD Library)