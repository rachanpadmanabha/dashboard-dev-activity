export interface ActivityMeta {
  label: string;
  fillColor: string;
}

export interface TotalActivityItem {
  name: string;
  value: string;
}

export interface DayWiseActivityItem {
  count: string;
  label: string;
  fillColor: string;
}

export interface DayWiseActivity {
  date: string;
  items: {
    children: DayWiseActivityItem[];
  };
}

export interface AuthorWorklog {
  activityMeta: ActivityMeta[];
  rows: {
    name: string;
    totalActivity: TotalActivityItem[];
    dayWiseActivity: DayWiseActivity[];
    activeDays: {
      days: number;
      isBurnOut: boolean;
      insight: string[];
    };
  }[];
}

export interface Data {
  AuthorWorklog: AuthorWorklog;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export interface Filter {
  role: string;
  status: string;
}
