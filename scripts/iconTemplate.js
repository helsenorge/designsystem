function template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    componentName.name = componentName.name.replace('Svg', '');
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })
    return typeScriptTpl.ast`
      import React from 'react';
      import {IconProps} from './';
  
      const ${componentName} = React.forwardRef(({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => ${jsx})
  
      export default ${componentName};
    `
  }
  module.exports = template