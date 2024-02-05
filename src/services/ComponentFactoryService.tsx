import React from 'react';
import RMGText from '../components/core/RMGText';
import RMGInput from '../components/core/RMGInput';
import RMGImage from '../components/core/RMGImage';
import RMGHeader from '../components/core/RMGHeader';
import RMGButton from '../components/core/RMGButton';
import RMGLabel from '../components/core/RMGLabel';
import RMGSubtitle from '../components/core/RMGSubtitle';

export interface ComponentConfig {
  component: string;
  props: any;
}

const ComponentFactory = ({component, props}: ComponentConfig) => {
  switch (component) {
    case 'RMGText':
      return <RMGText {...props} />;
    case 'RMGLabel':
      return <RMGLabel {...props} />;
    case 'RMGInput':
      return <RMGInput {...props} />;
    case 'RMGImage':
      return <RMGImage {...props} />;
    case 'RMGSubtitle':
      return <RMGSubtitle {...props} />;
    case 'RMGHeader':
      return <RMGHeader {...props} />;
    case 'RMGButton':
      return <RMGButton {...props} />;
    default:
      return null;
  }
};

export default ComponentFactory;
