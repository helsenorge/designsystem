export interface DummyFilter<ViewId extends string = string> {
  title: string;
  id: ViewId;
  activeFilters: string[];
}
