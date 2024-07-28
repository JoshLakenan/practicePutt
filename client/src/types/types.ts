interface Template {
  name: string;
  putts: Putt[];
  lastUsed: string;
}

interface Putt {
  distance: number;
  made: boolean;
  missed: boolean;
  set_id: string;
}

interface PuttSet {
  date: string;
  completed: boolean;
  putts: Putt[];
  made: number;
  missed: number;
  template_id: string;
}
