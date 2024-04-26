const fs = require('fs');
const path = require('path');

const galleryDirectory = path.join(__dirname, 'public', 'assets', 'gallery');
const outputFilePath = path.join(__dirname, 'src', 'lib', 'imageImports.ts');

fs.readdir(galleryDirectory, (err, files) => {
  if (err) {
    console.error('Error reading gallery directory:', err);
    return;
  }

  const pngFiles = files.filter(file => path.extname(file) === '.png');

  let imports = '';
  let exportEntries = 'export const images: GalleryImageProps[] = [\n';

  pngFiles.forEach(file => {
    const baseName = path.basename(file, '.png');
    const [id, altPlaceholder] = baseName.split('_');
    const variableName = `image${id}`;
    const alt = altPlaceholder ? altPlaceholder.replace(/-/g, ' ') : 'alt-placeholder';

    imports += `import ${variableName} from '../../public/assets/gallery/${file}';\n`;

    exportEntries += `  {\n    id: '${id}',\n    src: ${variableName},\n    alt: '${alt}',\n    number: ${parseInt(id, 10)},\n  },\n`;
  });

  exportEntries += '];\n';

  const interfaceDefinition = `
export interface GalleryImageProps {
  id: string;
  src: any;
  alt: string;
  number: number;
}
`;

  const fileContent = `${imports}${interfaceDefinition}${exportEntries}`;

  fs.writeFile(outputFilePath, fileContent, (err) => {
    if (err) {
      console.error('Error writing image imports file:', err);
    } else {
      console.log(`Image imports file was created at: ${outputFilePath}`);
    }
  });
});
