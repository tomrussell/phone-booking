import React from 'react';
import { Intent, Popover, Tag } from '@blueprintjs/core';

import BookedDate from './BookedDate';

const Availability = ({ available, bookedDate }) => (
  <Popover
    content={<BookedDate date={bookedDate} />}
    disabled={available}
  >
    <Tag
      large
      round
      intent={available ? Intent.SUCCESS : Intent.NONE}
    >
      {available ? 'Available' : 'In Use'}
    </Tag>
  </Popover>
);

export default Availability;
