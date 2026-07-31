const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Imports
content = content.replace(
  ""import React, { useState } from 'react';\r\nimport './index.css';"",
  import React, { useState } from 'react';\nimport './index.css';\nimport settingsData from '../data/settings.json';\nimport categoriesList from '../data/categories.json';\nimport productsList from '../data/products.json';
);

// 1.5 Windows fallback for line endings
content = content.replace(
  ""import React, { useState } from 'react';\nimport './index.css';"",
  import React, { useState } from 'react';\nimport './index.css';\nimport settingsData from '../data/settings.json';\nimport categoriesList from '../data/categories.json';\nimport productsList from '../data/products.json';
);

// 2. categoriesData
content = content.replace(
  /const categoriesData = \[[\s\S]*?\];\s*(?=\r?\nexport default function App)/,
  const categoriesData = categoriesList.map(cat => ({\n  ...cat,\n  products: productsList.filter(p => p.category_id === cat.id)\n}));\n
);

// 3. openWhatsApp
content = content.replace(
  /https:\/\/wa\.me\/212694569123/g,
  ""https://wa.me/""
);

// 4. Hero
content = content.replace(
  ""<h1>Les plus belles <span className=\""serif\"">broderies artisanales</span></h1>"",
  ""<h1>{settingsData.hero_heading}</h1>""
);
content = content.replace(
  ""<p>Découvrez nos créations uniques et faites la différence avec un travail de qualité.</p>"",
  ""<p>{settingsData.hero_subheading}</p>""
);
content = content.replace(
  ""src=\""/images/hero_embroidery_1785360243227.png\"""",
  ""src={settingsData.hero_image}""
);

// 5. CTA
content = content.replace(
  ""<img src=\""/images/spool-image.jpg\"" alt=\""Sur mesure\"" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '12px' }} />"",
  ""<img src={settingsData.cta_image} alt=\""Sur mesure\"" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '12px' }} />""
);
content = content.replace(
  ""<h2>Une idée ? Un projet ?</h2>"",
  ""<h2>{settingsData.cta_heading}</h2>""
);
content = content.replace(
  ""<p>Nous réalisons vos broderies sur mesure, selon vos envies.</p>"",
  ""<p>{settingsData.cta_text}</p>""
);

// 6. images loops
content = content.replace(
  /src=\{\\/images\/\$\{cat\.img\}\\}/g,
  ""src={cat.img}""
);
content = content.replace(
  /src=\{\\/images\/\$\{selectedProduct\.img\}\\}/g,
  ""src={selectedProduct.img}""
);
content = content.replace(
  /src=\{\\/images\/\$\{prod\.img\}\\}/g,
  ""src={prod.img}""
);
content = content.replace(
  /src=\{\\/images\/\$\{thumb\}\\}/g,
  ""src={thumb}""
);

// 7. Footer socials
content = content.replace(
  /href=\""https:\/\/instagram\.com\/broderieouazzane\""/g,
  ""href={settingsData.instagram_link}""
);
content = content.replace(
  /href=\""https:\/\/tiktok\.com\/@broderieouazzane\""/g,
  ""href={settingsData.tiktok_link}""
);

// 8. Contact text
content = content.replace(
  /<span>Broderieouazzane<\/span>/g,
  ""<span>{settingsData.instagram_handle}</span>""
);
content = content.replace(
  /<span>@broderieouazzane<\/span>/g,
  ""<span>{settingsData.tiktok_handle}</span>""
);
content = content.replace(
  /<span>0694569123<\/span>/g,
  ""<span>{settingsData.phone_number}</span>""
);
content = content.replace(
  /<span>50030 Ouazzane, Maroc<\/span>/g,
  ""<span>{settingsData.location}</span>""
);

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx updated with UTF-8');
