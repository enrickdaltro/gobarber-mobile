import React, { useState } from 'react';

import Background from '~/components/Background';
import DateTimeInput from '~/components/DateTimeInput';

import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateTimeInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}
