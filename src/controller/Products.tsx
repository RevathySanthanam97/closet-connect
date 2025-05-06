import { useEffect, useDeferredValue, useState, useMemo } from "react";
import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";
import { PricingOption, ProductType } from "../types";
import ProductPlaceholders from "../components/Placeholders";
import Search from "../components/Search";


const ProductsController = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 99;
  const ITEMS_PER_PAGE = 6;

  const [data, setData] = useState<ProductType[]>();

  const [query, setQuery] = useState<string>("");
  const deferredQuery = useDeferredValue(query);

  const [minPrice, setMinPrice] = useState<number>(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
  const [pricingOptions, setPricingOptions] = useState<number[]>([]);

  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://closet-recruiting-api.azurewebsites.net/api/data");
      const fetchedData = await response.json();
      setData(fetchedData);
    }
    fetchProducts();
  }, []);
  

  const filteredData = useMemo(() => {
    setVisibleCount(ITEMS_PER_PAGE);
    return data?.filter((p) =>
      (pricingOptions.length === 0 || pricingOptions.includes(p.pricingOption)) &&
      p.price <= maxPrice && p.price >= minPrice &&
      p.title.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [data, deferredQuery, minPrice, maxPrice, pricingOptions]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  
      if (bottom) {
        setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredData?.length || 0));
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredData]);

  const handleRangeChange = (values: { min: number; max: number }) => {
    setMinPrice(values.min);
    setMaxPrice(values.max);
  };
  

  const handleReset = () => {
    setMinPrice(MIN_PRICE);
    setMaxPrice(MAX_PRICE);
    setPricingOptions([]);
  }

  const handleToggle = (option: number) => {
    setPricingOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  }

  const filterOptions = Object.keys(PricingOption)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
      label: key.charAt(0) + key.slice(1).toLowerCase(),
      value: PricingOption[key as keyof typeof PricingOption],
      checked: pricingOptions.includes(PricingOption[key as keyof typeof PricingOption])
    }));

  if (!filteredData) {
    return <ProductPlaceholders />;
  }

  return (
    <>
      <div className='search__container'>
        <Search query={query} setQuery={setQuery} />
      </div>
      <div className="filters__wrapper">
        <Filters
          minVal={MIN_PRICE}
          maxVal={MAX_PRICE}
          range={{ min: minPrice, max: maxPrice }}
          filterOptions={filterOptions}
          handleRangeChange={handleRangeChange}
          handleReset={handleReset}
          handleToggle={handleToggle}
        />
      </div>
      <div className="products__wrapper">
        <ProductsList total={filteredData.length} products={filteredData.slice(0, visibleCount)} />
      </div>
    </>
  )
}

export default ProductsController
