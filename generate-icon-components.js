// Use this script to generate icon components from the icons folder.
// Inside `icons` folder, each subfolder will be treated as a 'Category'
// And each icon inside it will have a corresponding icon component as
// `<$CategoryName$PascalCaseIconFileName$Icon />
//
// For example, icon `raise-money.svg` under `icons/actions` folder
// will have a component named <ActionsRaiseMoneyIcon />

const fs = require('fs');
const path = require('path');

// Define the paths
const ICONS_DIR = path.join(__dirname, 'src/assets/icons');
const OUTPUT_DIR = path.join(__dirname, 'src/stories/atoms/icons');
const STORIES_FILE = path.join(__dirname, "src/stories/atoms/Icons.mdx")

// Utility to capitalize a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Create the output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Clear the contents in it
clearOutputDirectory(OUTPUT_DIR);

// Start processing the icons and collect generated components
const components = processDirectory(ICONS_DIR);

// Generate the Icons.stories.tsx file
generateStoriesFile(components);

console.log("Icon components and story file generated successfully.");

// ----------------------------------------------------------------------------------------

// Function to generate a component string
function generateComponent(category, iconName, relativePath) {
  const componentName = `${capitalize(category)}${capitalize(iconName)}Icon`;

  return `
import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "${relativePath}";

const ${componentName}: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="${iconName}" />
);

export default ${componentName};
  `.trim();
}

// Traverse the icons directory
function processDirectory(dir, category = '', components = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(fullPath, path.basename(file), components);
    } else if (path.extname(file) === '.svg') {
      // Process SVG files
      const iconFileName = path.basename(file, '.svg');
      const relativePath = path.relative(OUTPUT_DIR, fullPath).replace(/\\/g, '/');

      const iconPascalName = `${toPascalCase(iconFileName)}`; // convert from action-advocate to ActionAdvocate
      const componentContent = generateComponent(category, iconPascalName, relativePath);
      const componentName = `${capitalize(category)}${iconPascalName}Icon`;
      const outputFilePath = path.join(OUTPUT_DIR, `${componentName}.tsx`);

      fs.writeFileSync(outputFilePath, componentContent, 'utf8');
      console.log(`Generated: ${outputFilePath}`);

      // Add to the components array for the story
      components.push({ componentName, category, iconFileName })
    }
  });

  return components;
}

// Function to generate the Icons.stories.tsx file
function generateStoriesFile(components) {
  console.log(`Generate icon stories for ${components.length} components.`);

  const imports = components
    .map(({ componentName }) => `import ${componentName} from "./icons/${componentName}";`)
    .join("\n");

  const iconElements = components.map(({ componentName, category }) => {
    return `
  <IconItem name="<${componentName} />">
    <${componentName} />
  </IconItem>`
  }).join("\n");

  const storyMDX = `
import { IconGallery, IconItem, Meta } from "@storybook/blocks";
${imports}

<Meta title="atoms/Icons" />

# Icons

<IconGallery>
${iconElements}
</IconGallery>
`

  fs.writeFileSync(STORIES_FILE, storyMDX, "utf8");
  console.log(`Generated: ${STORIES_FILE}`);
}

// Function to clear the output directory
function clearOutputDirectory(outputDir) {
  if (fs.existsSync(outputDir)) {
    const files = fs.readdirSync(outputDir);
    files.forEach((file) => {
      const filePath = path.join(outputDir, file);
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath); // Delete file
      } else {
        fs.rmdirSync(filePath, { recursive: true }); // Delete subdirectory
      }
    });
    console.log(`Cleared the folder: ${outputDir}`);
  }
}

function toPascalCase(str) {
  return str
    .split("-")
    .map(capitalize)
    .join("")
}

