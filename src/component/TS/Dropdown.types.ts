export interface LanguageItem {
  label: string;
  flag: string;
  value: string;
}
export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
export interface LangSelectProps {
  items: LanguageItem[];
  selectedLanguages: LanguageItem[];
  onLanguageChange: (item: LanguageItem) => void;
  onRemoveLanguage: (item: LanguageItem) => void;
  searchInput: string;
}
