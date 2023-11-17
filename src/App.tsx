import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/Documents/MyDocument";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [customer, setCustomer] = useState({
    fullName: "",
    series: "",
    number: "",
    issued: "",
    dateIssue: "",
    INN: "",
    KPP: "",
  });
  const [bankDetails, setBankDetails] = useState({
    name: "",
    BIK: "",
    correspondentAccount: "",
    checkingAccount: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState({
    city: "Москва",
    date: new Date(),
    expirationDate: "01.01.2024",
    paymentMethod: "безналичными",
    company: {
      director: {
        fullName: "Иванова Ивана Ивановича",
        shortName: "И.И. Иванов",
      },
      companyName: {
        fullName: "Общество с ограниченной ответственностью «Ромашка»",
        shortName: "ООО «Ромашка»",
      },
    },
    contract: {
      services: ["- транспортные", "- компьютерные"],
      price: 100000,
      fine: "0.2%",
      bankDetails: {
        checkingAccount: "№0000000000000",
        name: "ОТДЕЛЕНИЕ N8888 ПАО СБЕРБАНК",
        BIK: "047501602",
        correspondentAccount: "301018000000000000602",
      },
    },
    customer: {
      fullName: "Иванов Александр Петрович",
      series: "KAZ",
      number: "N11111111",
      issued: "MIA",
      dateIssue: "09.09.2020",
      INN: "0000000000",
      KPP: "0000000",
    },
  });

  return (
    <>
      <div className="container">
        <form className="form">
          <h2>Детали Договора</h2>
          <label>
            Услуги заказчика:
            <input type="text" />
          </label>
          <label>
            Дата завершения договора:
            <input type="date" />
          </label>
          <label>
            Стоимость услуг
            <input type="number" />
          </label>
          <button onClick={() => {}}></button>
        </form>
        <form className="form">
          <h2>Детали Заказчика</h2>
          <label>
            Полное имя:
            <input
              type="text"
              value={customer.fullName}
              onChange={(e) => {
                const newCustomer = { ...customer };
                newCustomer.fullName = e.target.value;
                setCustomer(newCustomer);
              }}
            />
          </label>
          <h4>Паспортные данные</h4>
          <label>
            Серия:
            <input
              type="text"
              value={customer.series}
              onChange={(e) => {
                const newCustomer = { ...customer };
                newCustomer.series = e.target.value;
                setCustomer(newCustomer);
              }}
            />
          </label>
          <label>
            Номер
            <input
              type="text"
              value={customer.number}
              onChange={(e) => {
                const newCustomer = { ...customer };
                newCustomer.number = e.target.value;
                setCustomer(newCustomer);
              }}
            />
          </label>
          <label>
            Выдан
            <input
              type="text"
              value={customer.issued}
              onChange={(e) => {
                const newCustomer = { ...customer };
                newCustomer.issued = e.target.value;
                setCustomer(newCustomer);
              }}
            />
          </label>
          <label>
            ИНН
            <input
              type="text"
              value={customer.INN}
              onChange={(e) => {
                const newCustomer = { ...customer };
                newCustomer.INN = e.target.value;
                setCustomer(newCustomer);
              }}
            />
          </label>
          <label>
            Выдан
            <input
              type="text"
              value={customer.KPP}
              onChange={(e) => {
                const newCustomer = { ...customer };
                newCustomer.KPP = e.target.value;
                setCustomer(newCustomer);
              }}
            />
          </label>
          <h4>Банковские данные</h4>
          <label>
            Имя банка
            <input
              type="text"
              value={bankDetails.name}
              onChange={(e) => {
                const newBankDetails = { ...bankDetails };
                newBankDetails.name = e.target.value;
                setBankDetails(newBankDetails);
              }}
            />
          </label>
          <label>
            БИК
            <input
              value={bankDetails.BIK}
              type="text"
              onChange={(e) => {
                const newBankDetails = { ...bankDetails };
                newBankDetails.BIK = e.target.value;
                setBankDetails(newBankDetails);
              }}
            />
          </label>
          <label>
            Корр. счет
            <input
              value={bankDetails.correspondentAccount}
              type="text"
              onChange={(e) => {
                const newBankDetails = { ...bankDetails };
                newBankDetails.correspondentAccount = e.target.value;
                setBankDetails(newBankDetails);
              }}
            />
          </label>
          <label>
            Расч. счет
            <input
              value={bankDetails.checkingAccount}
              type="text"
              onChange={(e) => {
                const newBankDetails = { ...bankDetails };
                newBankDetails.checkingAccount = e.target.value;
                setBankDetails(newBankDetails);
              }}
            />
          </label>
          <button></button>
        </form>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            const newData = { ...data };
            newData.customer = customer;
            newData.contract.bankDetails = bankDetails;
            setData(newData);
            setIsVisible(true);
          }}
        >
          Сохранить изменения
        </button>
        {isVisible && (
          <PDFDownloadLink
            document={<MyDocument data={data} />}
            fileName="sample.pdf"
          >
            <button>Скачать ПДФ</button>
          </PDFDownloadLink>
        )}
      </div>
      <PDFViewer className="container">
        <MyDocument data={data} />
      </PDFViewer>
    </>
  );
};

export default App;
