export type MyDocumentProps = {
  data: {
    city: string;
    date: Date;
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
      services: string;
      price: string;
      expirationDate: string;
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
