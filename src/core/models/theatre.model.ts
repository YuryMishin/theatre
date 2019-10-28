export interface ISession {
  data: ISessionItem[];
}

export interface ISessionItem {
  id: string;
  type: string;
  attributes: {
    from: string;
    to: string;
  },
  relationships: {
    performance: {
      data: {
        type: string,
        id: string;
      }
    }
  };
}


export interface IPerformance {
  'data': IPerformanceItem[];
}

export interface IPerformanceItem {
  id: string;
  type: string;
  attributes: {
    title: string;
    genres: string [];
  };
}

export interface IOrder {
  'data': {
    'type': string;
    'attributes': {
      'session': string;
      'first_name': string;
      'last_name': string;
      'birthday': string;
      'email': string;
      'paypent': {
        'type': string;
        'card': {
          'number': string;
          'valid_thru': string;
          'name': string;
        }
      }
    }
  };
}
