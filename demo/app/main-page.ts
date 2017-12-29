import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
let page;
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();
  page.bindingContext.set('rating', 0);
  const rating = page.getViewById('rating');
  if (rating) {
    rating.on('valueChange', args => {
      const value = args.object.get('value');
      page.bindingContext.set('rating', value);
    });
  }
}

export function full() {
  page.getViewById('rating').fillMode = 'full';
}

export function half() {
  page.getViewById('rating').fillMode = 'half';
}

export function precise() {
  page.getViewById('rating').fillMode = 'precise';
}
