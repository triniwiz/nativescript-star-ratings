import {
  StarRatingBase,
  maxProperty,
  valueProperty,
  emptyBorderColorProperty,
  filledBorderColorProperty,
  emptyColorProperty,
  filledColorProperty,
  fillModeProperty,
  FillMode
} from './star-ratings.common';
import { layout } from 'tns-core-modules/ui/core/view';
import { fromObject } from 'tns-core-modules/data/observable';
import { Color } from 'tns-core-modules/color/color';
export class StarRating extends StarRatingBase {
  nativeView: CosmosView;
  private _delegate: CosmosDelegateImpl;
  constructor() {
    super();
    this.nativeView = CosmosView.new();
    this._delegate = CosmosDelegateImpl.initWithOwner(new WeakRef(this));
    this.nativeView.settings = CosmosSettings.new();
    this.nativeView.settings.emptyBorderColor = new Color('blue').ios;
    this.nativeView.settings.emptyColor = new Color('white').ios;
    this.nativeView.settings.filledBorderColor = new Color('blue').ios;
    this.nativeView.settings.filledColor = new Color('blue').ios;
    this.nativeView.rating = 0;
    this.nativeView.settings.minTouchRating = 0;
  }
  public onLoaded() {
    super.onLoaded();
    this.nativeView.delegate = this._delegate;
  }
  public onUnloaded() {
    super.onUnloaded();
    this.nativeView.delegate = null;
  }
  public disposeNativeView() {
    this._delegate = null;
  }
  set emptyBorderColor(color: string) {
    if (this.nativeView) {
      this.nativeView.settings.emptyBorderColor = new Color(color).ios;
    }
  }
  set filledBorderColor(color: string) {
    if (this.nativeView) {
      this.nativeView.settings.filledBorderColor = new Color(color).ios;
    }
  }
  set emptyColor(color: string) {
    if (this.nativeView) {
      this.nativeView.settings.emptyColor = new Color(color).ios;
    }
  }
  set filledColor(color: string) {
    if (this.nativeView) {
      this.nativeView.settings.filledColor = new Color(color).ios;
    }
  }

  [fillModeProperty.setNative](value: FillMode) {
    if (this.nativeView) {
      switch (value) {
        case FillMode.HALF:
          this.nativeView.settings.fillMode = StarFillMode.Half;
          break;
        case FillMode.PRECISE:
          this.nativeView.settings.fillMode = StarFillMode.Precise;
          break;
        default:
          this.nativeView.settings.fillMode = StarFillMode.Full;
          break;
      }
    }
  }
  [valueProperty.setNative](value: number) {
    if (this.nativeView) {
      this.nativeView.rating = value;
    }
  }
  [maxProperty.setNative](max: number) {
    if (this.nativeView) {
      this.nativeView.settings.totalStars = max;
      this.nativeView.update();
      this.width = this.nativeView.intrinsicContentSize.width;
      this.height = this.nativeView.intrinsicContentSize.height;
    }
  }
}

class CosmosDelegateImpl extends NSObject implements CosmosDelegate {
  _owner: WeakRef<StarRating>;
  public static ObjCProtocols = [CosmosDelegate];
  public static initWithOwner(owner: WeakRef<StarRating>): CosmosDelegateImpl {
    const delegate = new CosmosDelegateImpl();
    delegate._owner = owner;
    return delegate;
  }
  didFinishTouchingCosmosWithRating(rating: number) {
    const owner = this._owner.get();
    owner.value = rating;
  }
}
