// period-time
type periodItemsTypes = "0_day" | "7_day" | "30_day" | "1_year";

type IFilterPeriodItems = {
  [key in periodItemsTypes]: string;
};

// period-current-time
type currentPeriodItemsTypes = "yesterday" | "all" | "custom";

type allPeriodItemsTypes = periodItemsTypes | currentPeriodItemsTypes;

type ICurrentPeriodItemsTypes = {
  [key in allPeriodItemsTypes]: string;
};

type IFilterCurrentPeriodItems = ICurrentPeriodItemsTypes;

export type {
  periodItemsTypes,
  IFilterPeriodItems,
  currentPeriodItemsTypes,
  allPeriodItemsTypes,
  IFilterCurrentPeriodItems,
};
