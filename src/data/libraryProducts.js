// The library catalog with its card images, ready for <ProductGrid>.
import hvacBundleImage from '../assets/pages/shop-hvac-bundle.webp';
import hvacEquipmentImage from '../assets/pages/shop-hvac-equipment.webp';
import hvacEquipmentHoverImage from '../assets/pages/shop-hvac-equipment-hover.webp';
import hvacPipesImage from '../assets/pages/shop-hvac-pipes.webp';
import hvacPipeAccessoriesImage from '../assets/pages/shop-hvac-pipe-accessories.webp';
import hvacAhuDuctImage from '../assets/pages/shop-hvac-ahu-duct.webp';
import eboThemeDarkImage from '../assets/pages/shop-ebo-theme-dark.webp';
import eboThemeLightImage from '../assets/pages/shop-ebo-theme-light.webp';
import niagaraImage from '../assets/pages/shop-hvac-niagara.webp';
import niagaraHoverImage from '../assets/pages/shop-hvac-niagara-hover.webp';
import { libraryCatalog, formatPrice, NIAGARA } from './libraryCatalog.js';

// Card images are 1600 x 1200 (4:3) with a transparent background
const images = {
  'hvac-bundle': { image: hvacBundleImage },
  'hvac-equipment': { image: hvacEquipmentImage, hoverImage: hvacEquipmentHoverImage },
  'hvac-pipes': { image: hvacPipesImage, hoverImage: hvacPipeAccessoriesImage },
  'hvac-ahu-duct': { image: hvacAhuDuctImage },
  'ebo-themes-both': { image: eboThemeDarkImage, hoverImage: eboThemeLightImage },
  'ebo-theme-dark': { image: eboThemeDarkImage },
  'ebo-theme-light': { image: eboThemeLightImage },
  'niagara-bundle': { image: niagaraImage, hoverImage: niagaraHoverImage },
  'niagara-equipment': { image: hvacEquipmentImage, hoverImage: hvacEquipmentHoverImage },
  'niagara-pipes': { image: hvacPipesImage, hoverImage: hvacPipeAccessoriesImage },
  'niagara-ahu-duct': { image: hvacAhuDuctImage },
};

export const libraryProducts = libraryCatalog.map((item) => ({
  ...item,
  ...images[item.id],
  price: formatPrice(item.price),
  regularPrice: item.regularPrice ? `$${item.regularPrice}` : undefined,
  // Niagara cards get a "NIAGARA 4" pill so they aren't confused with EBO cards
  mediaTag: item.category === NIAGARA ? 'NIAGARA 4' : undefined,
  width: 1600,
  height: 1200,
}));
