import { ISelectOption } from 'src/app/shared/interfaces/select-option.interface';


export enum FilterOptions {
  ALL = 'ALL',
  CURRENT = 'CURRENT',
  COMPLETED = 'COMPLETED',
  DELETED = 'DELETED'
}

const filterOptionsViewValueMapper: { [key: string]: string } = {
  [FilterOptions.ALL]: 'Показать все',
  [FilterOptions.CURRENT]: 'Показать текущие',
  [FilterOptions.COMPLETED]: 'Показать завершенные',
  [FilterOptions.DELETED]: 'Показать удаленные'
};

export function getOptionsForSelect(): ISelectOption<FilterOptions>[] {
  return Object.keys(FilterOptions).map((key: string) => {
    return { value: FilterOptions[key], viewValue: filterOptionsViewValueMapper[FilterOptions[key]] };
  });
}
