import React from 'react';

export default ifTrue => component => Boolean(ifTrue) && component;