import { ContentView } from 'ui/content-view';
import { Color } from 'color';
import * as imageSource from 'image-source';

declare var UIView, UIColor, UIImage, UIControlEvents, CGRectMake, WeakRef, interop;

declare var HCSStarRatingView: any;

export class StarRating extends ContentView {

    private _ios: any;
    private _view: any;
    // private _changeHandler: StarRatingChangeHandlerImpl;

    width: number = 100;
    height: number = 25;

    allowsHalfStars: boolean = false;
    accurateHalfStars: boolean = true;

    max: number = 10;
    min: number = 0;
    value: number = 0;

    emptyStar: string = 'heart-empty';
    halfStar: string = 'heart-half';
    filledStar: string = 'heart-full';

    constructor() {
        super();
        this._view = UIView.new();
    }

    get ios(): any {
        return this._ios;
    }

    get _nativeView(): any {
        return this._view;
    }

    onLoaded() {
        super.onLoaded();
        this._ios = HCSStarRatingView.alloc().initWithFrame(CGRectMake(0, 0, this.width, this.height));
        this._ios.maximumValue = this.max;
        this._ios.minimumValue = this.min;
        this._ios.value = this.value;
        this._ios.allowsHalfStars = this.allowsHalfStars;
        this._ios.accurateHalfStars = this.accurateHalfStars;

        this._ios.emptyStarImage = imageSource.fromResource(this.emptyStar);
        this._ios.filledStarImage = imageSource.fromResource(this.filledStar);
        if(this.halfStar) {
            this._ios.halfStarImage = imageSource.fromResource(this.halfStar);
        }

        // this._changeHandler = StarRatingChangeHandlerImpl.initWithOwner(new WeakRef(this));
        // this._ios.addTargetActionForControlEvents(this._changeHandler, 'didChangeValue', UIControlEvents.ValueChanged);

        this._view.addSubview(this._ios);
    }

    set starColor(tintColor: any) {
        this._ios.tintColor = tintColor.ios;
    }

}

// class StarRatingChangeHandlerImpl extends NSObject {

//     private _owner: WeakRef<StarRating>;

//     public static initWithOwner(owner: WeakRef<StarRating>): StarRatingChangeHandlerImpl {
//         let handler = <StarRatingChangeHandlerImpl> StarRatingChangeHandlerImpl.new();
//         handler._owner = owner;
//         return handler;
//     }

//     public didChangeValue(sender: any) {
//         let owner = this._owner.get();
//         if(!owner) {
//             return;
//         }
//         owner.didChangeValue(sender);
//     }

//     public static ObjCExposedMethods = {
//         'didChangeValue': { returns: interop.types.void, params: [] }
//     }

// }
