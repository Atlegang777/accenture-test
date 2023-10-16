// Create a file (e.g., IconList.js) in the same directory where your icons folder is located.
// Import the icons using require.context and export them as an array.

const iconContext = require.context('./brands', true, /\.(svg|png|jpg)$/);


const icons = iconContext.keys().map((iconPath, index) => {
    const iconName = iconPath.replace('./', '').replace('.svg', '');
    const IconComponent = iconContext(iconPath).default;
    
    return {
      id: index, // Assign a unique ID to each icon
      name: iconName,
      component: () => <IconComponent />,
    };
  });

export default icons;
