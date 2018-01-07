import {
  View,
  Property,
  CssProperty,
  Style
} from 'tns-core-modules/ui/core/view';
import { booleanConverter } from "tns-core-modules/ui/frame/frame";

export enum FillMode {
  FULL = 'full',
  HALF = 'half',
  PRECISE = 'precise'
}

export class StarRatingBase extends View {
  max: number;
  value: number;
}
export const maxProperty = new Property<StarRatingBase, number>({
  name: 'max',
  defaultValue: 5
});
export const valueProperty = new Property<StarRatingBase, number>({
  name: 'value',
  defaultValue: 1
});
export const fillModeProperty = new Property<StarRatingBase, FillMode>({
  name: 'fillMode',
  defaultValue: FillMode.FULL
});
export const emptyBorderColorProperty = new CssProperty<Style, string>({
  name: 'emptyBorderColor',
  cssName: 'empty-border-color'
});
export const filledBorderColorProperty = new CssProperty<Style, string>({
  name: 'filledBorderColor',
  cssName: 'filled-border-color'
});
export const emptyColorProperty = new CssProperty<Style, string>({
  name: 'emptyColor',
  cssName: 'empty-color'
});
export const filledColorProperty = new CssProperty<Style, string>({
  name: 'filledColor',
  cssName: 'filled-color'
});
export const indicatorProperty = new Property<StarRatingBase, boolean>({
  name: "isindicator",
  defaultValue: true
});
indicatorProperty.register(StarRatingBase);
fillModeProperty.register(StarRatingBase);
emptyBorderColorProperty.register(Style);
filledBorderColorProperty.register(Style);
emptyColorProperty.register(Style);
filledColorProperty.register(Style);
maxProperty.register(StarRatingBase);
valueProperty.register(StarRatingBase);
