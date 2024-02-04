import React from 'react';
import RMGText from '../components/RMGText';
import RMGInput from '../components/RMGInput';
import RMGImage from '../components/RMGImage';
import RMGHeader from '../components/RMGHeader';
import RMGButton from '../components/RMGButton';
import RMGLabel from '../components/RMGLabel';

export interface ComponentFactoryConfig {
  component: string;
  props: any;
}

const ComponentFactory: React.FC<{components: ComponentFactoryConfig[]}> = ({
  components,
}) => {
  console.log('====================================');
  console.log('in components factory');
  console.log('====================================');
  const renderComponent = (config: ComponentFactoryConfig) => {
    const {component, props} = config;

    switch (component) {
      case 'RMGText':
        return <RMGText {...props} />;
      case 'RMGLabel':
        return <RMGLabel {...props} />;
      case 'RMGInput':
        return <RMGInput {...props} />;
      case 'RMGImage':
        return <RMGImage {...props} />;
      case 'RMGHeader':
        return <RMGHeader {...props} />;
      case 'RMGButton':
        return <RMGButton {...props} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {components.map((config, index) => (
        <div key={index}>{renderComponent(config)}</div>
      ))}
    </div>
  );
};

export default ComponentFactory;
