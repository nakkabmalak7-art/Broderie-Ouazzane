import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

imports = '''import React, { useState } from \\'react\\';
import \\'./index.css\\';
import settingsData from \\'../data/settings.json\\';
import categoriesList from \\'../data/categories.json\\';
import productsList from \\'../data/products.json\\';'''

content = re.sub(r\"import React, \\{ useState \\} from 'react';\\nimport '\\./index\\.css';\", imports.replace(\"\\\\'\", \"'\"), content)

dynamic_categories = '''const categoriesData = categoriesList.map(cat => ({
  ...cat,
  products: productsList.filter(p => p.category_id === cat.id)
}));'''

content = re.sub(r'const categoriesData = \\[\\s*\\{.*?\\];', dynamic_categories, content, flags=re.DOTALL)

content = re.sub(r'https://wa\\.me/212694569123', 'https://wa.me/', content)

content = re.sub(r'<h1>Les plus belles <span className=\"serif\">broderies artisanales</span></h1>', '<h1>{settingsData.hero_heading}</h1>', content)
content = re.sub(r'<p>Découvrez nos créations uniques et faites la différence avec un travail de qualité\\.</p>', '<p>{settingsData.hero_subheading}</p>', content)
content = re.sub(r'src=\"/images/hero_embroidery_1785360243227\\.png\"', 'src={settingsData.hero_image}', content)

# Since we lost the spool image tag during checkout, it's back to <SpoolIcon />
content = re.sub(r'<div className=\"cta-icon\">\\s*<SpoolIcon />\\s*</div>', '<div className=\"cta-icon\">\\n                <img src={settingsData.cta_image} alt=\"Sur mesure\" style={{ width: \\'60px\\', height: \\'60px\\', objectFit: \\'cover\\', borderRadius: \\'12px\\' }} />\\n              </div>', content)
content = re.sub(r'<h2>Une idée \\? Un projet \\?</h2>', '<h2>{settingsData.cta_heading}</h2>', content)
content = re.sub(r'<p>Nous réalisons vos broderies sur mesure, selon vos envies\\.</p>', '<p>{settingsData.cta_text}</p>', content)

content = re.sub(r'src={/images/\\$\\{cat\\.img\\}}', 'src={cat.img}', content)
content = re.sub(r'src={/images/\\$\\{selectedProduct\\.img\\}}', 'src={selectedProduct.img}', content)
content = re.sub(r'src={/images/\\$\\{prod\\.img\\}}', 'src={prod.img}', content)
content = re.sub(r'src={/images/\\$\\{thumb\\}}', 'src={thumb}', content)

content = re.sub(r'href=\"https://instagram\\.com/broderieouazzane\"', 'href={settingsData.instagram_link}', content)
content = re.sub(r'href=\"https://tiktok\\.com/@broderieouazzane\"', 'href={settingsData.tiktok_link}', content)

content = re.sub(r'<span>Broderieouazzane</span>', '<span>{settingsData.instagram_handle}</span>', content)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print(\"App.jsx updated successfully!\")
