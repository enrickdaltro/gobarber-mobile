import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container styles={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput ref={ref} {...rest} />
    </Container>
  );
}

export default forwardRef(Input);
