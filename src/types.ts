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
  total: number;
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
  range: { min: number; max: number };
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

export interface MultiRangeProps {
  min: number;
  max: number;
  selectedMin: number;
  selectedMax: number;
  onChange: (values: { min: number; max: number }) => void;
}

export interface ScrollAnimationProps {
  children: React.ReactNode;
  threshold?: number;
  direction?: "up" | "down" | "left" | "right";
};
