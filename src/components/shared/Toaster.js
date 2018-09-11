import { Intent, Position, Toaster } from '@blueprintjs/core';

const ApplicationToaster = Toaster.create({ position: Position.BOTTOM_RIGHT });

const successToaster = message => ApplicationToaster.show({
  message,
  intent: Intent.SUCCESS,
  icon: 'ticket',
});

const errorToaster = message => ApplicationToaster.show({
  message,
  intent: Intent.DANGER,
  icon: 'warning-sign',
  timeout: 0,
});

export { successToaster, errorToaster };
