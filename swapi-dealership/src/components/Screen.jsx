import Products from './Products';
import Product from './Product';

const componentMap = {
  home: Products,
  productPage: Product,
};

export const Screen = ({ screen = 'home' }) => {
  if (!screen || typeof componentMap[screen] === 'undefined') {
    return <componentMap.home></componentMap.home>;
  }

  const CurrentComponent = componentMap[screen];

  return <CurrentComponent></CurrentComponent>;
};

export default Screen;
