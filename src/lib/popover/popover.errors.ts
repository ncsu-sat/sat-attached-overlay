import { VALID_HORIZ_ALIGN, VALID_VERT_ALIGN, VALID_SCROLL } from './types';

export function getUnanchoredPopoverError(): Error {
  return Error('SatPopover does not have an anchor.');
}

export function getInvalidPopoverAnchorError(): Error {
  return Error(
    'SatPopover#anchor must be an instance of SatPopoverAnchor, ' +
    'ElementRef, or HTMLElement.'
  );
}

export function getInvalidSatPopoverAnchorError(): Error {
  return Error(
    `SatPopoverAnchor must be handed to a SatPopover ` +
    `component via that component's "anchor" input property. ` +
    `Example: [anchor]="anchorTemplateVariable"`
  );
}

export function getInvalidHorizontalAlignError(alignment): Error {
  return Error(generateGenericError('horizontalAlign/xAlign', alignment, VALID_HORIZ_ALIGN));
}

export function getInvalidVerticalAlignError(alignment): Error {
  return Error(generateGenericError('verticalAlign/yAlign', alignment, VALID_VERT_ALIGN));
}

export function getInvalidScrollStrategyError(strategy): Error {
  return Error(generateGenericError('scrollStrategy', strategy, VALID_SCROLL));
}

function generateGenericError(apiName: string, invalid: any, valid: string[]): string {
  return `Invalid ${apiName}: '${invalid}'. Valid options are ` +
    `${valid.map(v => `'${v}'`).join(', ')}.`;
}
