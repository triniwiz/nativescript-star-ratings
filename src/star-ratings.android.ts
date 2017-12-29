import {
  StarRatingBase,
  maxProperty,
  valueProperty,
  fillModeProperty,
  FillMode
} from './star-ratings.common';
import { layout } from 'tns-core-modules/ui/core/view';
import { fromObject } from 'tns-core-modules/data/observable';
import { Color } from 'tns-core-modules/color';
export class StarRating extends StarRatingBase {
  nativeView: android.widget.RatingBar;
  private _stars;
  private _filledColor = 'blue';
  private _emptyColor = 'white';
  public createNativeView() {
    const nativeView = new android.widget.RatingBar(this._context);
    this._stars = nativeView.getProgressDrawable() as android.graphics.drawable.LayerDrawable;
    return nativeView;
  }

  public initNativeView() {
    if (this._filledColor) {
      this.filledColor = this._filledColor;
    }
    if (this._emptyColor) {
      this.emptyColor = this._emptyColor;
    }
    const ref = new WeakRef(this);
    this.nativeView.setOnRatingBarChangeListener(
      new android.widget.RatingBar.OnRatingBarChangeListener({
        onRatingChanged: function(
          ratingBar: android.widget.RatingBar,
          rating: number,
          fromUser: boolean
        ) {
          const owner = ref.get();
          if (fromUser) {
            valueProperty.nativeValueChange(owner, rating);
          }
        }
      })
    );
  }

  set emptyColor(color: string) {
    this._emptyColor = color;
    if (this._stars) {
      const emptyDrawable = this._stars.getDrawable(0);
      emptyDrawable.setColorFilter(
        new Color('white').android,
        android.graphics.PorterDuff.Mode.SRC_ATOP
      );
    }
  }

  set filledColor(color: string) {
    this._filledColor = color;
    if (this._stars) {
      const leftDrawable = this._stars.getDrawable(
        1
      ) as android.graphics.drawable.Drawable;
      const rightDrawable = this._stars.getDrawable(
        2
      ) as android.graphics.drawable.Drawable;
      leftDrawable.setColorFilter(
        new Color(color).android,
        android.graphics.PorterDuff.Mode.CLEAR
      );
      rightDrawable.setColorFilter(
        new Color(color).android,
        android.graphics.PorterDuff.Mode.SRC_ATOP
      );
    }
  }

  [fillModeProperty.defaultValue]() {
    this.nativeView.setStepSize(1);
  }

  [fillModeProperty.setNative](value: FillMode) {
    if (this.nativeView) {
      switch (value) {
        case FillMode.HALF:
          this.nativeView.setStepSize(0.5);
          break;
        case FillMode.PRECISE:
          this.nativeView.setStepSize(0.1);
          break;
        default:
          this.nativeView.setStepSize(1.0);
          break;
      }
    }
  }

  public onLoaded() {
    super.onLoaded();
    if (this.nativeView && this.value) {
      this.nativeView.setRating(Number(this.value));
    }
  }

  public disposeNativeView() {
    if (!this.nativeView) return;
    this.nativeView.setOnRatingBarChangeListener(null);
  }
  [valueProperty.setNative](value: number) {
    if (this.nativeView) {
      this.nativeView.setRating(Number(this.value));
    }
  }
  [maxProperty.setNative](max: number) {
    if (this.nativeView) {
      this.nativeView.setMax(Number(max));
      this.nativeView.setNumStars(Number(max));
    }
  }
}
