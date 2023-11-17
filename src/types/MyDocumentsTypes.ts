export type MyDocumentProps = {
  data: {
    city: string;
    date: Date;
    expirationDate: string;
    paymentMethod: string;
    company: {
      director: {
        fullName: string;
        shortName: string;
      };
      companyName: {
        fullName: string;
        shortName: string;
      };
    };
    contract: {
      services: string[];
      price: number;
      fine: string;
      bankDetails: {
        name: string;
        BIK: string;
        correspondentAccount: string;
        checkingAccount: string;
      };
    };
    customer: {
      fullName: string;
      series: string;
      number: string;
      issued: string;
      dateIssue: string;
      INN: string;
      KPP: string;
    };
  };
};

export type TextListProps = {
  data: string[];
};
