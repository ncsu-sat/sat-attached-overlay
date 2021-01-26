import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';
import {
  DEFAULT_CLOSE_ANIMATION_END_SCALE,
  DEFAULT_CLOSE_TRANSITION,
  DEFAULT_OPEN_ANIMATION_START_SCALE,
  DEFAULT_OPEN_TRANSITION
} from './popover.constants';

export const popoverAnimations: {
  readonly transformPopover: AnimationTriggerMetadata;
} = {
  /** Animation that shows and hides a bottom sheet. */
  transformPopover: trigger('transformPopover', [
    state('initial, void, hidden', style({ opacity: 0, transform: 'scale({{startAtScale}})' }), {
      params: { startAtScale: DEFAULT_OPEN_ANIMATION_START_SCALE }
    }),
    state('visible', style({ opacity: 1, transform: 'scale(1)' })),
    transition(':enter', [
      style({ opacity: 0, transform: 'scale({{startAtScale}})' }),
      animate('{{openTransition}}', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition(':leave', [animate('{{closeTransition}}', style({ opacity: 0, transform: 'scale({{endAtScale}})' }))])

    // state('initial, void, hidden', style({ opacity: 0, transform: 'scale({{startAtScale}})' }), {
    //   params: { startAtScale: DEFAULT_OPEN_ANIMATION_START_SCALE }
    // }),
    // state('visible', style({ opacity: 1, transform: 'scale(1)' })),
    // // transition('* => visible', animate('{{openTransition}}', style({ opacity: 1, transform: 'scale(1)' })), {
    // transition(':enter', animate('{{openTransition}}', style({ opacity: 1, transform: 'scale(1)' })), {
    //   params: { openTransition: DEFAULT_OPEN_TRANSITION }
    // }),
    // transition(
    //   ':leave',
    //   // '* => hidden',
    //   animate('{{closeTransition}}', style({ opacity: 0, transform: 'scale({{endAtScale}})' })),
    //   {
    //     params: { closeTransition: DEFAULT_CLOSE_TRANSITION, endAtScale: DEFAULT_CLOSE_ANIMATION_END_SCALE }
    //   }
    // )
  ])
};

// export const transformPopover: AnimationTriggerMetadata = trigger('transformPopover', [
//   transition(':enter', [
//     style({ opacity: 0, transform: 'scale({{startAtScale}})' }),
//     animate('{{openTransition}}', style({ opacity: 1, transform: 'scale(1)' }))
//   ]),
//   transition(':leave', [animate('{{closeTransition}}', style({ opacity: 0, transform: 'scale({{endAtScale}})' }))])
// ]);

//       openTransition: this.openTransition,
//       closeTransition: this.closeTransition,
//       startAtScale: this.openAnimationStartAtScale,
//       endAtScale: this.closeAnimationEndAtScale
