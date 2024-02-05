import React from 'react';
import ComponentFactory, {
  ComponentConfig,
} from '../services/ComponentFactoryService';

type DynamicUIProps = {
  components: Array<ComponentConfig>;
};

const DynamicUIComponent: React.FC<DynamicUIProps> = ({components}) => {
  return (
    <div className=" max-w-md mb-8 mt-8 w-full space-y-2">
      {components.map((config, index) => (
        <div key={index}>{ComponentFactory(config)}</div>
      ))}
    </div>
  );
};

export default DynamicUIComponent;
