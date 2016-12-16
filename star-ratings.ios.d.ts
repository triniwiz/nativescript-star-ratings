import { ContentView } from 'ui/content-view';
export declare class StarRating extends ContentView {
    private _ios;
    private _view;
    width: number;
    height: number;
    allowsHalfStars: boolean;
    accurateHalfStars: boolean;
    max: number;
    min: number;
    value: number;
    emptyStar: string;
    halfStar: string;
    filledStar: string;
    constructor();
    readonly ios: any;
    readonly _nativeView: any;
    onLoaded(): void;
    starColor: any;
}
