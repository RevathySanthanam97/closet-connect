export enum PricingOption {
  FREE = 0,
  PAID = 1,
  VIEW_ONLY = 2,
}

export interface ProductType {
  id: string;
  creator: string;
  title: string;
  pricingOption: PricingOption;
  imagePath: string;
  price: number;
}

export interface ProductsListType {
  products: ProductType[];
}

export interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterProps {
  minVal: number;
  maxVal: number;
  filterOptions: {
    label: string;
    value: PricingOption;
    checked: boolean;
  }[];
  handleReset: () => void,
  handleRangeChange: (values: { min: number; max: number }) => void;
  handleToggle: (option: number) => void;
}

export interface SidebarProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title: string;
}

export interface MultiSliderProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
}
